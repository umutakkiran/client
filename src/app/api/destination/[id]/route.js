import { NextResponse } from "next/server";
import connectMongodb from "../../../../../libs/mongodb";
import Destination from "../../../../../models/destination";
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
    Cors({
      // Allow only requests from the specified domains
      origin: ['http://example.com', 'http://localhost:3000', "https://seatracker.netlify.app"],
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

export async function GET(request , {params}){
    await middleware(cors);

    const id = params.id.toString();
    console.log(id  )
    await connectMongodb();
    const destinations = await Destination.find({id: id});
    return NextResponse.json({destinations}, {status: 200})
}