
import Product from "@/backend/models/product"

export const newProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        product,
    });
};