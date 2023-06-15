import dbConnect from "@/backend/config/dbConnect";
import Product from "@/backend/models/product"
import { mongoose } from "mongoose";
import mongodb from "mongodb";

export default async function handler(req, res) {
    
    const { method } = req;
    const { id } = req.query;

    //const  id = JSON.stringify( req.query);
   
    if (method === "GET") {
        console.log('product id is :' + id);
        
        try {
            dbConnect();
            const product = await Product.findById(req.query.id);   
            res.status(200).json(product);
        } catch (error) {
            console.log(error);
            res.status(404).json({ error: "Error finding product from DB..." });
        } finally {
            await mongoose.connection.close();
        }
 
    };
}; 

