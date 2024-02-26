import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/projects";
import { NextResponse } from "next/server";

export async function POST(req){
    const {title, github_link, year} = await req.json();
    await connectMongoDB();
    await Project.create({title, github_link, year});
    return NextResponse.json({message:"Project Added"}, {status: 201})
}

export async function GET() {
  await connectMongoDB();
  const projects = await Project.find();
  return NextResponse.json({ projects });
}


// api/project?id=id_to_delete
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}