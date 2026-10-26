import { z } from "zod";
import { base } from "../__core/app";
import { db } from "../database";
import { inquiriesTable } from "../database/schema";
export const inquiries = {
  create: base
    .input(
      z.object({
        name: z.string().trim().min(2).max(100),
        email: z.email().max(254),
        service: z.enum([
          "Branding & identity",
          "Web design",
          "Print & documents",
          "Something else",
        ]),
        message: z.string().trim().min(10).max(5000),
        website: z.string().max(0).optional(),
      }),
    )
    .handler(async ({ input }) => {
      const [saved] = await db
        .insert(inquiriesTable)
        .values({
          name: input.name,
          email: input.email,
          service: input.service,
          message: input.message,
        })
        .returning({ id: inquiriesTable.id });
      return { success: true, reference: saved.id };
    }),
};
