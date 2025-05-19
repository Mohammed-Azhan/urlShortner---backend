
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { nanoid } from "nanoid";
import connectDB from "./utils/db.js";
import urlModel from "./models/urlModel.js";

dotenv.config();


const app = express();
app.use(express.json());
app.use(cors({origin : "https://shortner-nu.vercel.app"}));
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send("Hello");
})
app.post("/shortenurl", async (req, res) => {
    const url = req.body.url;
    const generateId = nanoid(5);
    const newUrl = `https://shortner-nu.vercel.app/${generateId}`
    const insertData = await new urlModel
    (
        {
            url : url, 
            shortUrl : newUrl
        }
    ).save();
    if(insertData){
         return res.status(201).json({url : newUrl, status : true});
    }
    return res.status(500).json({status : false});
})
app.post("/returnOriginal", async (req, res) => {
    const url =  `https://shortner-nu.vercel.app/${req.body.url}`;
    const findUrl = await urlModel.findOne({shortUrl : url});
    if(findUrl){
        findUrl.visited = findUrl.visited + 1;
        await findUrl.save();
        return res.status(201).json({status : true, url : findUrl.url});
    }
    else{
        return res.status(201).json({status : false});
    }
})
app.listen(port, () => {
    console.log(`App is running on ${port}`);
    connectDB();
})