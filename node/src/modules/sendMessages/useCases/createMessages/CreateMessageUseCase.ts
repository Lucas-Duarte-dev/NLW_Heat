import prismaClient from "../../../../infra/prisma/client";

class CreateMessageUseCase {
    async execute(text: string, user_id: string) {
        const message = await prismaClient.message.create({
            data: {
                text,
                user_id
            },
            include: {
                user: true
            }
        });

        return message;
    }
}

export {CreateMessageUseCase};