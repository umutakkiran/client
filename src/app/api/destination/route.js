import { NextResponse } from "next/server";
import connectMongodb from "../../../../libs/mongodb";
import Destination from "../../../../models/destination";

export async function POST (request) {
    const data = await request.json(); // Gelen JSON verisini al
    const documents = Array.isArray(data) ? data : [data]; // Gelen veriyi bir diziye dönüştür (eğer tek bir veri gelmişse bile)
    await connectMongodb(); // MongoDB'ye bağlan
    const insertPromises = documents.map(doc => Destination.create({id:doc.MMSI, destination:doc.DEST, navstat:doc.NAVSTAT})); // Tüm ekleme işlemlerini başlat
    return Promise.all(insertPromises)
        .then(() => {
            return new Response(JSON.stringify({ message: "Destinations created" }), { status: 201, headers: { 'Content-Type': 'application/json' } });
        })
        .catch((error) => {
            console.error("Error inserting destinations:", error);
            return new Response(JSON.stringify({ message: "Error inserting destinations" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        });
}

export async function GET() {
    await connectMongodb();
    const destinations = await Destination.find();
    return NextResponse.json({destinations})
}



export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongodb();
    await Destination.findByIdAndDelete(id);
    return NextResponse.json({message: "Destination deleted"}, {status: 200})
}