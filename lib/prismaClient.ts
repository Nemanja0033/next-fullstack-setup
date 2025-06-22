import { PrismaClient } from "./generated/prisma";

// Create a new Prisma Client instance
// This client will be used to interact with the database

export const db = new PrismaClient();