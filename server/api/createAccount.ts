import ws from 'ws'
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
            // Retrieve args
            const body = await readBody(event);

            if (!body) {
                throw new Error("createAccount readBody failed");
            }

            // Define data
            const uData = {
                Username: body.busername,
                Password: body.bpassword,
                email: body.bemail
            };

            // Create user
            const userSuccess = await prisma.users.create({ data: uData });
            
            if (!userSuccess) {
                throw new Error("Account creation unsuccessful");
            }
            
            // Return
            response.data = {
                email: body.bemail,
                username: body.busername,
                password: body.bpassword
            };
            response.status = true;

            return response;
        }
        catch (error) {
            console.error(error);
            return response;
        }
    }
    else {
        console.error("Method must be POST on a createAccount fetch")
        return response;
    }
});