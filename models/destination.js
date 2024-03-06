import mongoose, {Schema} from "mongoose";

const destinationSchema = new Schema(
    {
        MMSI: String,
        DEST: String,
        NAVSTAT: String,
        TYPE: Number,
        LONGITUDE: Number,
        LATITUDE: Number,
        NAME: String,
        TIME: String,
        COG: Number,
        SOG: Number,
        HEADING: Number,
        ROT: Number,
        IMO: Number,
        CALLSIGN: String,
        A:Number,
        B:Number,
        C:Number,
        D:Number,
        DRAUGHT: Number,
        ETA: String


    },{
        timestamps: true,
    }
);

const Destination = mongoose.models.Destination || mongoose.model("Destination", destinationSchema);

export default Destination;