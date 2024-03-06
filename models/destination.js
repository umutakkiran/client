import mongoose, {Schema} from "mongoose";

const destinationSchema = new Schema(
    {
        id: String,
        destination: String,
        navstat: String
    },{
        timestamps: true,
    }
);

const Destination = mongoose.models.Destination || mongoose.model("Destination", destinationSchema);

export default Destination;