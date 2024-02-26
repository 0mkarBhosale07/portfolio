import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/projects";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newGithub_link: github_link, newYear: year } = await request.json();
  await connectMongoDB();
  await Project.findByIdAndUpdate(id, { title, github_link, year });
  return NextResponse.json({ message: "Project updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const project = await Project.findOne({ _id: id });
  return NextResponse.json({ project }, { status: 200 });
}