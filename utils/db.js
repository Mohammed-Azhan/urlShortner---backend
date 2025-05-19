import mongoose from "mongoose";
const connectDB = async () => {
    try{
        const connection = await mongoose.connect("mongodb+srv://azhanpalli:azhan123@cluster0.eimhuav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/urlshortner");
        console.log("connected to database");
    }
    catch(e){
        console.error(e);
    }
}
export default connectDB;