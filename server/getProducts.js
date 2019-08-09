const products = require('../products.json');

const getProducts = (req, res) => {
    if(req.param.price) {
        const items = products. filer(val = val.price >= parseInt(req.query.price)); 
        return res.status(200).send(items);
    }
    res.status(200).send(products); 
}

module.exports = getProducts;
