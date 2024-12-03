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
    data: {}
}

const prisma = PrismaClientSingleton();

export default defineEventHandler(async (event) => {
    const method = event.node.req.method;
    let response : Response = {status: false, data: {}};

    if (method === "POST") {

        try {
            // create user
            const cafeList = await prisma.cafe.findMany()
            response.data = cafeList;
            response.status = true;
            return response;
        }
        catch (error) {
            response.status = false;
            return response;
        }
    }

    else if (method === "GET") {

        try {
            const cafeList = await prisma.cafe.findMany();
            response.data = cafeList;
            response.status = true;
            return response;
        }
        catch (error) {
            response.status = false;
            return response;
        }
    }
})