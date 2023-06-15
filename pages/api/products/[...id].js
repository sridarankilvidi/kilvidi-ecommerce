import Product from "@/backend/models/product"

export const getProduct = async (req, res, next) => {
 console.log('the id passed is :' + req.query.id)
    const product = await Product.findById(req.query.id);

    if (!product) {
        res.status(404).json({ error: "Product not found." });
    }

    res.status(200).json({ product });
}