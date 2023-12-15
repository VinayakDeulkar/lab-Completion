const { getProduct } = require('../services/productService')
const GET_PRODUCT = async (req, res) => {
    try {
        const product = await getProduct({})
        return res.status(200).json({ data: product })
    }
    catch (e) {
        return res.status(400).json({ msg: e.message })
    }
}

const SEARCH_PRODUCT = async (req, res) => {
    try {
        const term = req.query.item;
        const product = await getProduct({
            $or: [
                { 'Variant SKU': { $regex: term, $options: 'i' } },
                { Title: { $regex: term, $options: 'i' } },
            ],
        })
        return res.status(200).json({ data: product })
    }
    catch (e) {
        return res.status(400).json({ msg: e.message })
    }
}
module.exports = { GET_PRODUCT, SEARCH_PRODUCT }