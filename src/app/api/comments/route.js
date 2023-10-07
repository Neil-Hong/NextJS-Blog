import { getAuthSession } from "@/UTILS/auth";
import prisma from "@/UTILS/connect";
import { NextResponse } from "next/server";

//GET SINGLE POST
export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const postSlug = searchParams.get("postSlug");
    try {
        const comments = await prisma.post.findMany({
            where: { ...(postSlug && { postSlug }) },
            include: { user: true },
        });
        return new NextResponse(JSON.stringify(comments, { status: 200 }));
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }, { status: 500 }));
    }
};

//CREAT A POST METHOD
export const POST = async (req) => {
    const session = await getAuthSession();
    if (!session) {
        return new NextResponse(JSON.stringify({ message: "Not Authenticated" }, { status: 500 }));
    }
    try {
        const body = await req.json();
        const comments = await prisma.comment.create({
            data: { ...body, userEmail: session.user.email },
        });
        return new NextResponse(JSON.stringify(comments, { status: 200 }));
    } catch (error) {
        console.log(error);
    }
};
