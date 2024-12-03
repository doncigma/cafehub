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

        if (!body || !body.email || !body.password) {
            return response;
        }
        // define data
        const uData = {
            Password: String(body.password),
            email: String(body.email)
        };
        response.data = uData;
        try {
            // create user
            const loginSuccess = await prisma.users.findFirst ({
                where: {
                    email: uData.email,
                    Password: uData.Password
                }
            });
            if (!loginSuccess) {
                response.status = false;
                return response;
            }
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
        
        if (!query|| !query.password || !query.email) {
            return response;
        }
        const uData  = {
            Password: String(query.userPassword),
            email: String(query.userEmail)
        };
        response.data = uData;
        try {
            const loginSuccess = await prisma.users.findFirst ({
                where: {
                    email: uData.email,
                    Password: uData.Password
                }
            });
            if (!loginSuccess) {
                response.status = false;
                return response;
            }
            response.status = true;
            return response;
        }
        catch (error) {
            response.status = false;
            return response;
        }
    }
})