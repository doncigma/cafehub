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

            if (!body) {
                throw new Error("Fetch readBody failed");
            }

            // define data
            const uData = {
                Username: String(body.userName),
                Password: String(body.userPassword),
                email: String(body.userEmail)
            };

            // create user
            /* 
                ERROR 
                Invalid prisma.users.create() invocation in
                C:\Projects\coding-school\cafehub\server\api\createAccount.ts:50:1

                47 };
                48
                49 // create user
                → 50 const userSuccess = await prisma.users.create(
                Unique constraint failed on the fields: (Username)

                Invalid prisma.users.create() invocation in
                server\api\createAccount.ts:50:1

                47 };
                48
                49 // create user
                → 50 const userSuccess = await prisma.users.create(
                Unique constraint failed on the fields: (Username)
                at $n.handleRequestError (node_modules\@prisma\client\runtime\library.js:121:7315)
                at $n.handleAndLogRequestError (node_modules\@prisma\client\runtime\library.js:121:6623)
                at $n.request (node_modules\@prisma\client\runtime\library.js:121:6307)
                at async l (node_modules\@prisma\client\runtime\library.js:130:9633)
                at async Object.handler (server\api\createAccount.ts:50:1)
                at async /C:/Projects/coding-school/cafehub/node_modules/h3/dist/index.mjs:1978:19
                at async Object.callAsync (/C:/Projects/coding-school/cafehub/node_modules/unctx/dist/index.mjs:72:16)
                at async Server.toNodeHandle (/C:/Projects/coding-school/cafehub/node_modules/h3/dist/index.mjs:2270:7)
            */
            // VV ERROR VV
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