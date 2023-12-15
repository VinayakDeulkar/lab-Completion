const { getCart, addCart, deleteCartProduct } = require("../services/shoppingCartService")

const GET_CART = async (req, res) => {
    try {
        const cart = await getCart({})
        return res.status(200).json({ data: cart })
    }
    catch (e) {
        return res.status(400).json({ msg: e.message })
    }
}

const ADD_CART = async (req, res) => {
    try {
        const cart = await addCart(req.body)
        return res.status(200).json({ data: cart })
    }
    catch (e) {
        return res.status(400).json({ msg: e.message })
    }
}

const DELETE_CART = async (req, res) => {
    try {
        const cartId = req.query.cartId;
        const cart = await deleteCartProduct({ _id: cartId })
        return res.status(200).json({ data: cart })
    }
    catch (e) {
        return res.status(400).json({ msg: e.message })
    }
}
module.exports = { GET_CART, ADD_CART, DELETE_CART }
