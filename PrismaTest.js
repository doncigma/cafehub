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

const prisma = PrismaClientSingleton()


async function GetCafeNames() {
    const cafs = await prisma.cafe.findMany({
        select: {
            shop_name: true
        }
    });
    return cafs;
}

async function CreateUser(Username, Password, Email) {
    let data = {
        Username: Username,
        Password: Password,
        email: Email
    };
    const user = await prisma.users.create({data: data});
    return user;
}

CreateUser("GregPaul", "Password", "GregPaul@gmail.com");

//let names = GetCafeNames();

//console.log(names);