import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedElection() {
    const election25 = await prisma.election.upsert({
        where: {id: 'election-25'},
        update: {},
        create: {
            id: 'election-2025',
            name: 'election-2025',
            startDate: new Date('2025-05-26T00:00:00Z'),
            endDate: new Date('2025-06-26T59:59:59Z'),
            desciption: 'University Student Council Election 2025',
            isActice: true
            }
        }
    )
}



async function main() {
    console.log("SEEDING DATABASE...");  
}