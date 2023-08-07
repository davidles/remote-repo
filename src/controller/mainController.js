const path = require('path');
const productData = require('../productData.json');

const mainController = {
    home: (req, res) => {
        const data = productData.results

        res.render('home', {
            title: 'Mercado  Liebre',
            data: data
        })
    },

    search: (req, res, next) => {
        const {
            q
        } = req.query;

        const {
            results
        } = productData

        if (q) {

            const listSearch = results.filter(({
                title
            }) => title.toLowerCase().includes(q.toLowerCase()))

            req.data = listSearch

        }else{
            req.data = results;

        }


        next()
    },

    render: (req, res)=> {

        res.render('home', {
            title: 'Mercado Liebre',
            data: req.data
        })
        
    },
}

module.exports = mainController;