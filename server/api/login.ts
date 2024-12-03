import ws from 'ws'
import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool, neonConfig } from '@neondatabase/serverless'


const PrismaClientSingleton = () => {
    neonConfig.webSocketConstructor = ws;
    const connectionString = 'postgresql://neondb_owner:HGgkcTsP8CO9@ep-empty-scene-a6d4mg1t-pooler.us-west-2.aws.neon.tech/neondb?sslmode=require'

    const pool = new Pool({ connectionString });
    const adapter = new PrismaNeon(pool);
    const prisma = new PrismaClient({ adapter });


    return prisma;

}

interface LoginData {
    email: string,
    username: string,
    password: string
}

interface Response {
    status: boolean,
    data: LoginData
}

const prisma = PrismaClientSingleton();

export default defineEventHandler(async (event) => {
    const method = event.node.req.method;

    let response: Response = {
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

            if (!body || !body.email || !body.password) {
                return response;
            }

            // define data
            const uData: LoginData = {
                email: String(body.email),
                username: String(body.username),
                password: String(body.Password)
            };
            response.data = uData;

            // create user
            const loginSuccess = await prisma.users.findFirst({
                where: {
                    email: uData.email,
                    Password: uData.password
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
            let fail: Response = {
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
// pretty sure we dont need this, as login will only ever be get, just log error if method is GET
    else if (method === "GET") {
        try {
            let query = getQuery(event)

            if (!query || !query.password || !query.email) {
                return response;
            }
            const uData: LoginData = {
                email: String(query.userEmail),
                username: String(query.username),
                password: String(query.userPassword),
            };
            response.data = uData;
            const loginSuccess = await prisma.users.findFirst({
                where: {
                    email: uData.email,
                    Password: uData.password
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