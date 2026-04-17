import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID!;

interface SnsAccount {
  platform: string;
  account: string;
  followerRange?: string | null;
}

export async function POST(request: Request) {
  try {
    const { name, email, country, snsAccounts } = await request.json();

    if (!name || !email || !snsAccounts?.length) {
      return NextResponse.json(
        { error: "필수 항목을 입력해주세요." },
        { status: 400 }
      );
    }

    const igEntry = snsAccounts.find((s: SnsAccount) => s.platform === "Instagram");
    const ttEntry = snsAccounts.find((s: SnsAccount) => s.platform === "TikTok");
    const ytEntry = snsAccounts.find((s: SnsAccount) => s.platform === "YouTube");
    const otherEntries = snsAccounts.filter((s: SnsAccount) => s.platform === "Other");

    const allPlatforms: string[] = [
      ...new Set<string>(snsAccounts.map((s: SnsAccount) => s.platform)),
    ];

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        이름: {
          title: [{ text: { content: name } }],
        },
        대상: {
          select: { name: "인플루언서" },
        },
        Email: {
          email: email,
        },
        ...(country && {
          국가: { select: { name: country } },
        }),
        ...(allPlatforms.length > 0 && {
          플랫폼: {
            multi_select: allPlatforms.map((p) => ({ name: p })),
          },
        }),
        ...(igEntry?.account && {
          Instagram: {
            rich_text: [{ text: { content: igEntry.account } }],
          },
        }),
        ...(igEntry?.followerRange && {
          "Instagram 팔로워": { select: { name: igEntry.followerRange } },
        }),
        ...(ttEntry?.account && {
          TikTok: {
            rich_text: [{ text: { content: ttEntry.account } }],
          },
        }),
        ...(ttEntry?.followerRange && {
          "TikTok 팔로워": { select: { name: ttEntry.followerRange } },
        }),
        ...(ytEntry?.account && {
          YouTube: {
            rich_text: [{ text: { content: ytEntry.account } }],
          },
        }),
        ...(ytEntry?.followerRange && {
          "YouTube 팔로워": { select: { name: ytEntry.followerRange } },
        }),
        ...(otherEntries.length > 0 && {
          "기타 SNS": {
            rich_text: [
              {
                text: {
                  content: otherEntries
                    .map((e: SnsAccount) => e.account)
                    .join(" / "),
                },
              },
            ],
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
