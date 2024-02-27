import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(req){
    const {title, content, date, image} = await req.json();
    await connectMongoDB();
    await Blog.create({title, content, date, image});
    return NextResponse.json({message:"Blog Added"}, {status: 201})
}

export async function GET() {
  await connectMongoDB();
  const blogs = await Blog.find();
  return NextResponse.json({ blogs });
}


// api/project?id=id_to_delete
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
}