import { NextResponse } from "next/server";
import connectMongodb from "../../../../libs/mongodb";
import Destination from "../../../../models/destination";


export async function DELETE(request){

    const id = request.nextUrl.searchParams.get("MMSI");
    await connectMongodb();
    await Destination.findByIdAndDelete(id);
    return NextResponse.json({message: "Destination deleted"}, {status: 200})
}