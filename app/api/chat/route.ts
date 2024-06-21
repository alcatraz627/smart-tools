"use server";
import { getAnswer } from "@/chat";
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  status: "ok" | "error";
  message: string;
};

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const question = searchParams.get("question");
  if (!question?.trim()) {
    return NextResponse.json<ResponseData>({
      message: "Please enter a question.",
      status: "error",
    });
  }

  const answer = await getAnswer(question);

  return NextResponse.json<ResponseData>({
    message: answer,
    status: "ok",
  });
}
