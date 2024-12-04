import ws from 'ws'
import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool, neonConfig } from '@neondatabase/serverless'
import { ReviewResponse } from "~/types/response"

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

    const response: ReviewResponse = { status: false }

    if (method === "POST") {

        try {
            // Retrieve args
            const body = await readBody(event);

            if (!body) {
                throw new Error("getCafeData readBody failed");
            }
            
            // Fetch data
            const user = await prisma.users.findFirst({
                select: {
                    user_id: true
                },
                where: {
                    Username: body.busername
                }
            });

            const cafe = await prisma.cafe.findFirst({
                select: {
                    shop_id: true
                },
                where: {
                    shop_name: body.bcafeName
                }
            });

            if (!user || !cafe) {
                throw new Error('findFirst user or cafe query failed');
            }

            // Define data
            const rData = {
                user_id: user.user_id,
                cafe_id: cafe.shop_id,
                comment: body.bcontent,
                tasteRating: body.bratings.taste,
                serviceRating: body.bratings.service,
                AtmosphereRating: body.bratings.atmosphere
            };

            // Try write
            const reviewData = await prisma.rating.create({ data: rData });

            if (!reviewData) {
                throw new Error('getCafeData query failed');
            }

            // Return
            response.status = true;
            return response;
        }

        catch (error) {
            console.error(error)
            return response;
        }
    }
    else {
        console.error("Method must be POST on a createAccount fetch");
        return response;
    }
})