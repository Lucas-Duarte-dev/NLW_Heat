import prismaClient from "../../../../infra/prisma/client";

class GetLast3MessagesUseCase {
    async execute()  {
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: "desc"
            },
            include: {
                user: true
            }
        });

        return messages;
    }
}

export {GetLast3MessagesUseCase};