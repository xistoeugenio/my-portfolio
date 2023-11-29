"use server";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";

import { createMessage } from "./schema";
import { InputType, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {


  const { name, email, phoneNumber, message } = data;
  let createdMessage;

  try {
    createdMessage = await db.messages.create({
      data: {
        name,
        email,
        phoneNumber,
        message
      },
    });
  } catch (error) {
    return {
      error: "Failed to create."
    }
  }

  return { data: createdMessage };
};

export const createdMessage = createSafeAction(createMessage, handler);
