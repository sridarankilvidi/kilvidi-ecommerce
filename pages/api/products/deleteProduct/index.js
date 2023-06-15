import dbConnect from '@/backend/config/dbConnect';
import React from 'react'
import Product from "@/backend/models/product";

export default async function handler(req, res) {
    //dbConnect();
    const { method } = req;
    const { id } = req.query;

   
    if (method === "DELETE") {
        console.log('product id is :' + id);
        
        if (!dbConnect()) {
            dbConnect();
        };
        
        try {
            //dbConnect();
            const product = await Product.findByIdAndRemove(req.query.id);   
            res.status(200).json(product);
        } catch (error) {
            console.log(error);
            res.status(404).json({ error: "Error deleting the product from DB..." });
        } finally {
            //await mongoose.connection.close();
        }
 
    };
    

};