const productSchema = require("../db/productSchema")

exports.getProduct = async (query) => {
    try {
        const product = await productSchema.find(query)
        return product
    }
    catch (e) {
        throw Error('Error while get product')
    }
}