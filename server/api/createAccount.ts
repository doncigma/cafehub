import ws from 'ws'
import os from 'os'
import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool, neonConfig } from '@neondatabase/serverless'
import { SignupResponse } from '~/types/response'


const PrismaClientSingleton = () => {
    neonConfig.webSocketConstructor = ws;
    const connectionString =  "postgresql://neondb_owner:HGgkcTsP8CO9@ep-empty-scene-a6d4mg1t-pooler.us-west-2.aws.neon.tech/neondb?sslmode=require"

    const pool = new Pool({ connectionString });
    const adapter = new PrismaNeon(pool);
    const prisma = new PrismaClient({ adapter });

    return prisma;
}

const prisma = PrismaClientSingleton();

export default defineEventHandler(async (event) => {
    const method = event.node.req.method;

    const response: SignupResponse = {
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

            if (!body) {
                throw new Error("Fetch readBody failed");
            }

            // define data
            const uData = {
                Username: body.busername,
                Password: body.bpassword,
                email: body.bemail
            };

            // create user
            const userSuccess = await prisma.users.create({ data: uData });
            if (!userSuccess) {
                throw new Error("Account creation unsuccessful");
            }
            
            response.status = true;
            response.data = {
                email: String(body.bemail),
                username: String(body.busername),
                password: String(body.bpassword)
            };
            return response;
        }
        catch (error) {
            console.error(error);
            const fail: SignupResponse = {
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
        console.error("Method must be POST on a createAccount fetch")
        const fail: SignupResponse = {
            status: false,
            data: {
                email: '',
                username: '',
                password: ''
            }
        };
        return fail;
    }
});