import ws from 'ws'
import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool, neonConfig } from '@neondatabase/serverless'
import { Response } from '~/types/response'


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

    const response: Response = {
        status: false,
        data: {
            email: '',
            username: '',
            password: ''
        }
    };

    if (method === "POST") {
        try {
            // get args from body
            const body = await readBody(event);

            if (!body || !body.userName) {
                throw new Error("Fetch readBody failed");
            }

            // define data
            const uData = {
                Username: body.userName,
                Password: body.userPassword,
                email: body.userEmail
            };
            
            // create user
            const userSuccess = await prisma.users.create({ data: uData });
            if (!userSuccess) {
                throw new Error("Account creation unsuccessful");
            }
            
            response.status = true;
            response.data = {
                email: String(body.userEmail),
                username: String(body.userName),
                password: String(body.userPassword)
            };
            return response;
        }
        catch (error) {
            console.error(error);
            const fail: Response = {
                status: false,
                data: {
                    email: '',
                    username: '',
                    password: ''
                }
            };
            return fail;
        }

    }
    else {
        console.error("Method cannot be GET on a createAccount fetch")
        const fail: Response = {
            status: false,
            data: {
                email: '',
                username: '',
                password: ''
            }
        };
        return fail;
    }
// VV shouldnt need this cuz createUser should never be GET, just log error if it is VV
// else if (method === "GET") {

    //     let query = getQuery(event)

    //     if (!query || !query.userName || !query.userPassword || !query.userEmail) {
    //         return response;
    //     }
    //     const uData = {
    //         Username: String(query.userName),
    //         Password: String(query.userPassword),
    //         email: String(query.userEmail)
    //     };
    //     response.data = uData;
    //     try {
    //         const data = await prisma.users.create({ data: uData })
    //         response.status = true;
    //         return response;
    //     }
    //     catch (error) {
    //         response.status = false;
    //         return response;
    //     }
    // }
});