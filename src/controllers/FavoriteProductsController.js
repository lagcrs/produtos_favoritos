// List of Favorite Products
const axios = require('axios')
const Customer = require('../models/Customer');

module.exports = {
    async getList(req, res){
        const userId = req.userId;
        try {
            const user = await Customer.findById(userId);

            return res.status(200).send({ listFavoriteProducts: user.favoriteProducts })

        }catch(err){
            return res.status(500).send({ error: 'Falid to get list.' })
        }
    },

    async addProduct(req, res) {
        const { productId } = req.params;

        try {
            const response = await axios.get(`http://challenge-api.luizalabs.com/api/product/${productId}/`);

            const getProduct = response.data;
    
            // if(!getProduct) {
            //     return res.status(400).send({ error: 'Product not found.' })
            // }

            if(await Customer.find({ 'favoriteProducts.id': getProduct.id }).where('id').equals(req.userId)) {
                return res.status(400).send({ error: 'Favorite product already exists in list.' })
            }
            
            const userId = req.userId;
            await Customer.findByIdAndUpdate(userId, {
                $push: { favoriteProducts: getProduct }
            }).exec();
            

            return res.status(201).send({ message: 'Product add successfully!' })

        } catch(err) {
            return res.status(500).send({ error: 'Falid to add product' })
        }
    }
}