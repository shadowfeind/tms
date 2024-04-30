import { PrismaClient } from "@prisma/client";
// we do this for development because of next js hot reload

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
