import ws from 'ws'
import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool, neonConfig } from '@neondatabase/serverless'
import { Response, LoginData } from '~/types/response'


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

    if (method === "GET") {
        try {
            // get args from body
            const body = await readBody(event);

            if (!body || !body.email || !body.password) {
                throw new Error("Fetch readBody failed");
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
                throw new Error("Login unsuccessful");
            }

            response.status = true;
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
// VV pretty sure we dont need this, as login will only ever be get, just log error if method is POST VV
     else if (method === "POST") {
         try {
             let query = getQuery(event)

             if (!query || !query.bpassword || !query.bemail) {
                 return response;
             }
             const uData: LoginData = {
                 email: String(query.bemail),
                 username: '',
                 password: String(query.bpassword),
             };
             const loginSuccess = await prisma.users.findFirst({
                select: {
                    email: true,
                    Username: true,
                    Password: true
                },
                 where: {
                     email: uData.email,
                     Password: uData.password
                 }
             });
             if (!loginSuccess) {
                 response.status = false;
                 return response;
             }
             response.data = {
                email: loginSuccess.email,
                username: loginSuccess.Username,
                password: loginSuccess.Password
             }
             response.status = true;
             return response;
         }
         catch (error) {
             response.status = false;
             return response;
         }
     }
});