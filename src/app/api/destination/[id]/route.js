import { NextResponse } from "next/server";
import connectMongodb from "../../../../../libs/mongodb";
import Destination from "../../../../../models/destination";

export async function GET(request , {params}){
    const id = params.id.toString();
    console.log(id  )
    await connectMongodb();
    const destinations = await Destination.find({id: id});
    return NextResponse.json({destinations}, {status: 200})
}