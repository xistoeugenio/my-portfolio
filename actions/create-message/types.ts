import { z } from "zod";
import { Messages } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { createMessage } from "./schema";

export type InputType = z.infer<typeof createMessage>;
export type ReturnType = ActionState<InputType, Messages>;
