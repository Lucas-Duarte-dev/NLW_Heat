import prismaClient from "../../../../infra/prisma/client";

class ProfileUserUseCase {
    async execute(user_id: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        });

        return user;
    }
}

export {ProfileUserUseCase};