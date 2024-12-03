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
        // get args from body
        const body = await readBody(event);

        if (!body || !body.userName) {
            return response;
        }
        // define data
        const uData = {
            Username: String(body.userName),
            Password: String(body.userPassword),
            email: String(body.userEmail)
        };
        response.data = uData;
        try {
            // create user
            const userSuccess = await prisma.users.create ({data: uData});
            response.status = true;
            return response;
        }
        catch (error) {
            response.status = false;
            return response;
        }

    }

    else if (method === "GET") {

        let query = getQuery(event)
        
        if (!query|| !query.userName || !query.userPassword || !query.userEmail) {
            return response;
        }
        const uData  = {
            Username: String(query.userName),
            Password: String(query.userPassword),
            email: String(query.userEmail)
        };
        response.data = uData;
        try {
            const data = await prisma.users.create({data: uData})
            response.status = true;
            return response;
        }
        catch (error) {
            response.status = false;
            return response;
        }
    }
})