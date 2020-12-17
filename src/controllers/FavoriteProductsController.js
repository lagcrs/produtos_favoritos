// List of Favorite Products Controller file
const axios = require('axios')
const Customer = require('../models/Customer');

module.exports = {
    async getList(req, res){
        // get user logged id
        const userId = req.userId;
        try {
            // find user on database
            const user = await Customer.findById(userId);

            // return list of favorite products
            return res.status(200).send({ listFavoriteProducts: user.favoriteProducts })

        }catch(error){
            // return message error if falid to get list
            return res.status(500).send({ error: 'Falid to get list.' })
        }
    },

    async addProduct(req, res) {
        // get productId and user logged id
        const { productId } = req.params;
        const userId = req.userId;

        try {
            // with axios, get from luizalabs api the product by id
            const response = await axios.get(`http://challenge-api.luizalabs.com/api/product/${productId}/`);

            // save response from luizalabs api
            const getProduct = response.data;
            
            // find user on database
            const user = Customer.findById(req.userId)

            // verify if already exists favorite product on user list, search on database by id of product
            if(await user.findOne({ 'favoriteProducts': {
                $elemMatch: { id: getProduct.id }
            } })) {
                return res.status(400).send({ error: 'Favorite product already exists in list.' })
            }

            // save getProduct on user list
            await Customer.findByIdAndUpdate(userId, {
                $push: { favoriteProducts: getProduct }
            }).exec();
            
            // return success massage
            return res.status(201).send({ message: 'Product add successfully!' })

        } catch(error) {
            // return message error if falid to add product
            return res.status(500).send({ error: 'Falid to add product.' })
        }
    }
}