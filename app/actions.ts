"use server";

import { getAnswer } from "@/lib/chat";

export async function askQuestion(
  prevState: { message: string },
  formData: FormData
) {
  "use server";
  try {
    const question = formData.get("question")?.toString();

    const answer = await getAnswer(question || "");

    return { message: answer };
  } catch (error) {
    console.error("Error: ", error);
    return { message: "Error: " + `${error}` };
  }
}
