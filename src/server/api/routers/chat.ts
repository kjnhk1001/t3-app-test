import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const chatRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getAllMessage: protectedProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });

    return posts ?? null;
  }),
  getSearchMessage: protectedProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ ctx, input }) => {
      const posts = await ctx.db.post.findMany({
        orderBy: { createdAt: "desc" },
        where: {
          createdBy: { id: ctx.session.user.id },
          name: {
            contains: input.name, // 部分一致検索を実施
            // mode: "insensitive", // 大文字小文字を区別しない検索
          },
        },
      });

      return posts ?? null;
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

// 記事用
// export const chatRouter = createTRPCRouter({
//   hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),

//   create: protectedProcedure
//     .input(z.object({ name: z.string().min(1) }))
//     .mutation(async ({ ctx, input }) => {
//       return ctx.db.post.create({
//         data: {
//           name: input.name,
//           createdBy: { connect: { id: ctx.session.user.id } },
//         },
//       });
//     }),
// });
