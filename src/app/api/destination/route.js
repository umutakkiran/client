import { NextResponse } from "next/server";
import connectMongodb from "../../../../libs/mongodb";
import Destination from "../../../../models/destination";
import Cors from 'cors';
import initMiddleware from "../../../../libs/init-middleware";
// Initialize the cors middleware
const cors = initMiddleware(
    Cors({
      // Allow only requests from the specified domains
      origin: ['http://example.com', 'http://localhost:3000' , "https://seatracker.netlify.app"],
      // Allow only certain HTTP methods
      methods: ['GET', 'POST'],
    })
  );
  
  // Helper method to wait for a middleware to execute before continuing
  // And to throw an error when an error happens in a middleware
  function middleware(handler) {
    return async (req, res) => {
      try {
        await handler(req, res);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Sorry, something went wrong' });
      }
    };
  }

export async function POST (request) {
    // Run the middleware
    await middleware(cors);

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
    // Run the middleware
     await middleware(cors);

    await connectMongodb();
    const destinations = await Destination.find();
    return NextResponse.json({destinations})
}



export async function DELETE(request){
    // Run the middleware
    await middleware(cors);

    const id = request.nextUrl.searchParams.get("id");
    await connectMongodb();
    await Destination.findByIdAndDelete(id);
    return NextResponse.json({message: "Destination deleted"}, {status: 200})
}