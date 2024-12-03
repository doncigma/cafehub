import ws from 'ws'
import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from '@prisma/adapter-neon'
import {Pool, neonConfig} from '@neondatabase/serverless'


const PrismaClientSingleton = () => {
    neonConfig.webSocketConstructor = ws;
    const connectionString = 'postgresql://neondb_owner:HGgkcTsP8CO9@ep-empty-scene-a6d4mg1t-pooler.us-west-2.aws.neon.tech/neondb?sslmode=require'

    const pool = new Pool({connectionString});
    const adapter = new PrismaNeon(pool);
    const prisma = new PrismaClient({ adapter });
    

    return prisma;
        
}

interface Response {
    status: boolean,
    data: {
        average_stars: Number,
        DrinkOffered: { drink_name: string; cafe_id: number; }[],
        Rating: { 
            cafe_id: number | null;
            rating_id: number;
            stars: number;
            comment: string | null;
            UpVotes: number;
            DownVotes: number; }[]
    }
}

const prisma = PrismaClientSingleton();

export default defineEventHandler(async (event) => {
    const method = event.node.req.method;
    // let response : Response = {
    //     status: false,
    //     data: {
    //         average_stars: 0,
    //         DrinkOffered: [],
    //         Rating: []
    //     }
    // };
    
    // if (method === "POST") {

    //     try {
            
    //         const body = await readBody(event);
    //         const cafeData = await prisma.cafe.findFirst({
    //             select: {
    //                 shop_name: false,
    //                 shop_id: false,
    //                 average_stars: true,
    //                 DrinkOffered: true,
    //                 Rating: true

    //             },
    //             where: {
    //                 shop_name: String(body.cafeName)
    //             }
    //         })
    //         if (cafeData) {
    //             response.data = cafeData;
    //         }
    //         response.status = true;
    //         return response;
    //     }
    //     catch (error) {
    //         response.status = false;
    //         return response;
    //     }
    // }

    if (method === "GET") {
        let response : Response = {
            status: false,
            data: {
                average_stars: 0,
                DrinkOffered: [],
                Rating: []
            }
        };

        try {
            const body = await getQuery(event);
            const cafeData = await prisma.cafe.findFirst({
                select: {
                    shop_name: false,
                    shop_id: false,
                    average_stars: true,
                    DrinkOffered: true,
                    Rating: true
                    },
                    where: {
                        shop_name: String(body.cafeName)
                        }
            })
            if (cafeData) {
                response.data = cafeData;
            }
            response.status = true;
            return response;
        }

        catch (error) {
            response.status = false;
            return response;
        }
    }
    else if (method === "POST") {
        console.error("Methid cannot be POST on a GetCafeData fetch");
        let fail : Response = {
            status: false,
            data: {
                average_stars: 0,
                DrinkOffered: [],
                Rating: []
            }
        };
        return fail;
    }
})