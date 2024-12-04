import ws from 'ws'
import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool, neonConfig } from '@neondatabase/serverless'
import { CafeResponse } from '~/types/response'


const PrismaClientSingleton = () => {
    neonConfig.webSocketConstructor = ws;
    const connectionString = 'postgresql://neondb_owner:HGgkcTsP8CO9@ep-empty-scene-a6d4mg1t-pooler.us-west-2.aws.neon.tech/neondb?sslmode=require'

    const pool = new Pool({ connectionString });
    const adapter = new PrismaNeon(pool);
    const prisma = new PrismaClient({ adapter });

    return prisma;
}

const prisma = PrismaClientSingleton();

export default defineEventHandler(async (event) => {
    const method = event.node.req.method;

    if (method === "POST") {
        const response: CafeResponse = {
            status: false,
            data: {
                cafeName: '',
                averageStars: 0,
                DrinkOffered: [{
                    drink_name: '',
                    cafe_id: 0
                }],
                Rating: [{
                    rating_id: 0,
                    user_id: 0,
                    cafe_id: 0,
                    comment: '',
                    tasteRating: 0,
                    serviceRating: 0,
                    AtmosphereRating: 0
                }]
            }
        };

        try {
            const body = await readBody(event);
            console.log(body)
            const cafeData = await prisma.cafe.findFirst({
                select: {
                    shop_name: true,
                    shop_id: false,
                    average_stars: true,
                    DrinkOffered: true,
                    Rating: true
                },
                where: {
                    shop_name: body.bcafeName
                }
            })
            console.log(cafeData)

            if (!cafeData) {
                throw new Error('getCafeData query failed');
            }

            response.data.cafeName = cafeData.shop_name;
            response.data.averageStars = cafeData.average_stars;

            response.data.DrinkOffered = cafeData.DrinkOffered;
            response.data.Rating = cafeData.Rating;

            response.status = true;
            return response;
        }

        catch (error) {
            console.error(error)
            return response;
        }
    }
    else {
        console.error("Method must be POST on a createAccount fetch")
        const fail: CafeResponse = {
            status: false,
            data: {
                cafeName: '',
                averageStars: 0,
                DrinkOffered: [{
                    drink_name: '',
                    cafe_id: 0
                }],
                Rating: [{
                    rating_id: 0,
                    user_id: 0,
                    cafe_id: 0,
                    comment: '',
                    tasteRating: 0,
                    serviceRating: 0,
                    AtmosphereRating: 0
                }]
            }
        };
        return fail;
    }
})