import dbConnect from '@/backend/config/dbConnect';
import Product from "@/backend/models/product";
import { mongoose } from "mongoose";

export default async function handler(req, res) {
    const { method } = req;
    const { id } = req.query;

    if (method === "PUT") {
        
        if (!dbConnect()) {
            dbConnect();
        };

        try {
            //dbConnect();
            const dbproduct = await Product.findById(req.query.id);
            console.log(req.query.id);
            if (dbproduct != null) {
                const product = await Product.findByIdAndUpdate(req.query.id,req.body); 
                res.status(200).json(product);
            }
          

        } catch (error) {
            console.log(error);
            res.status(404).json({ error: "Error updating product to DB..." });
        } finally {
            //await mongoose.connection.close();
        }

    };

};