import { NextResponse } from "next/server";
import connectMongodb from "../../../../libs/mongodb";
import Destination from "../../../../models/destination";

export async function GET() {
    await connectMongodb();
    const typesToFind = [37, 61, 10]; // Aradığınız türlerin listesi
    const destinations = await Destination.find({ TYPE: { $in: typesToFind } }).limit(1000);

    
    return NextResponse.json({destinations})
}



export async function DELETE(request){

    const id = request.nextUrl.searchParams.get("MMSI");
    await connectMongodb();
    await Destination.findByIdAndDelete(id);
    return NextResponse.json({message: "Destination deleted"}, {status: 200})
}