import prismaClient from "../../../../infra/prisma/client";
import { io } from "../../../../infra/http/app";

class CreateMessageUseCase {
  async execute(text: string, user_id: string) {
    const messages = await prismaClient.message.create({
      data: {
        text,
        user_id,
      },
      include: {
        user: true,
      },
    });

    const infoWS = {
      id: messages.id,
      text: messages.text,
      user_id: messages.user_id,
      created_at: messages.created_at,
      user: {
        name: messages.user.name,
        avatar_url: messages.user.avatar_url,
      },
    };

    io.emit("new_message", infoWS);

    return messages;
  }
}

export { CreateMessageUseCase };
