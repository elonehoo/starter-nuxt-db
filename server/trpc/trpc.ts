/**
 * This is your entry point to setup the root configuration for tRPC on the server.
 * - `initTRPC` should only be used once per app.
 * - We export only the functionality that we use so we can enforce which base procedures should be used
 *
 * Learn how to create protected base procedures and other things below:
 * @see https://trpc.io/docs/v10/router
 * @see https://trpc.io/docs/v10/procedures
 */
import { initTRPC } from "@trpc/server";
import { ZodError } from "zod";
import type { Context } from "~/server/trpc/context";

const t = initTRPC.context<Context>().create({
  errorFormatter: ({ shape, error }) => ({
    ...shape,
    data: {
      ...shape.data,
      zodError:
        error.code === "BAD_REQUEST" && error.cause instanceof ZodError
          ? error.cause.flatten()
          : undefined,
    },
  }),
});

/**
 * Unprotected procedure
 **/
export const publicProcedure = t.procedure;
export const router = t.router;
export const middleware = t.middleware;
