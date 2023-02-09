import { createTRPCRouter, publicProcedure } from "../trpc";
import { Visibility } from "db";
import { z } from "zod";

export const eventRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.event.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.event.findFirst({ where: { id: input } });
  }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        visibility: z.nativeEnum(Visibility),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.event.create({
        data: input,
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.event.delete({ where: { id: input } });
  }),
});
