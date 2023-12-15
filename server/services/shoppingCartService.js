const shoppingCartSchema = require("../db/productSchema")

exports.getCart = async () => {
    try {
        const product = await shoppingCartSchema.find({})
        return product
    }
    catch (e) {
        throw Error('Error while get shopping cart')
    }
}

exports.addCart = async (data) => {
    try {
        const productData = shoppingCartSchema(data)
        const product = await productData.save()
        return product
    }
    catch (e) {
        throw Error('Error while add shopping cart')
    }
}

exports.deleteCartProduct = async (query) => {
    try {
        const product = await shoppingCartSchema.deleteMany(query)
        return product
    }
    catch (e) {
        throw Error('Error while delete shopping cart')
    }
}