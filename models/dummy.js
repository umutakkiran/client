import mongoose, {Schema} from "mongoose";

const dummySchema = new Schema(
    {
        id: Number,
        title: String,
        description: String
    },{
        timestamps: true,
    }
);

const Dummy = mongoose.models.Dummy || mongoose.model("Dummy", dummySchema);

export default Dummy;