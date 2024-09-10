"use server";
import { NextResponse } from "next/server";
import { getAllAnnouncement } from "../../../db/models/announcement";

export async function GET() {
  try {
    const data = await getAllAnnouncement();
    return NextResponse.json({
      statusCode: 200,
      message: "Succes get all user",
      data: data,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error",
      data: [],
    });
  }
}

export async function POST() {
  try {
    const data = await getAllAnnouncement();
    return NextResponse.json({
      statusCode: 200,
      message: "Succes get all user",
      data: data,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error",
      data: [],
    });
  }
}
