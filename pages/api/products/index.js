import dbConnect from "@/backend/config/dbConnect";
//import { newProduct } from '@/backend/controllers/productControllers';
import Product from "@/backend/models/product"
import { mongoose } from "mongoose";

//const express = require("express");
//const router = express.Router();
//const app = express();
//app.use(express.json());

export default async function handler(req, res) {
    const { method } = req;
 
    if (method === "GET") {
        
        try {
            dbConnect();
            const products = await Product.find();              
            res.status(200).json(products);
        } catch (error) {
            console.log(error);
            res.status(404).json({ error: "Error finding products from DB..." });          
        }finally {
			//await mongoose.connection.close();
		}

    };
       
};


