import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID!;

export async function POST(request: Request) {
  try {
    const { name, email, snsAccount, platform, followerRange, country } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "필수 항목을 입력해주세요." },
        { status: 400 }
      );
    }

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        이름: {
          title: [
            {
              text: { content: name },
            },
          ],
        },
        대상: {
          select: { name: "인플루언서" },
        },
        Email: {
          email: email,
        },
        ...(snsAccount && {
          "SNS 계정": {
            url: snsAccount,
          },
        }),
        ...(platform && {
          플랫폼: {
            select: { name: platform },
          },
        }),
        ...(followerRange && {
          "팔로워 수": {
            select: { name: followerRange },
          },
        }),
        ...(country && {
          국가: {
            select: { name: country },
          },
        }),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notion API error:", error);
    return NextResponse.json(
      { error: "등록 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
