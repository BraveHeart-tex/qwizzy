import { db } from "@/data-access/database/connection";

export const getQuizById = async (id: number) => {
  return db
    .selectFrom("Quiz")
    .selectAll()
    .where("Quiz.Id", "=", id)
    .executeTakeFirst();
};
