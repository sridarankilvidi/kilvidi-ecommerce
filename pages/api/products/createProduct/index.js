import dbConnect from "@/backend/config/dbConnect";
import Product from "@/backend/models/product"
import { mongoose } from "mongoose";

//const express = require("express");
//const router = express.Router();
//const app = express();
//app.use(express.json());

export default async function handler(req, res) {
    //dbConnect();
    const { method } = req;
  
    if (method === "POST") {
        dbConnect();
        const { name, description, price, seller, stock, category } = req.body;
        console.log({ name }, { description });
        /*
        const data = new Product(
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                seller: req.body.seller,
                stock: req.body.stock,
                category: req.body.category
            }
        );*/

        try {
            const product = await Product.create(
                { name, description, price, seller, stock, category }
            );
                
            //if (!product) return res.status(404).json({ error: "Product Not Saved in DB.." });
            res.status(201).json(product);
        } catch (error) {
            console.log(error);
            res.status(404).json({ error: "Error While Writing Data to DB..." });
        } finally {
            //await mongoose.connection.close();
        }
    }
};
