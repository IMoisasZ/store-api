import SaleService from '../services/sale.service.js';
async function createSale (req, res, next){
    try{
        let sale = req.body;
        if (!sale.clientId || !sale.productId || !sale.value || !sale.date){
            throw new Error("Client ID, Product ID, Value, e Date são obrigatórios.")
        }
        sale = await SaleService.createSale(sale);
        res.send(sale)
        logger.info(`POST /sale - ${JSON.stringify (sale)}`);
    }catch (err) {
        next(err);
    }
}

async function getSales(req, res, next){
    try{
        res.send(await SaleService.getSales(req.query.productId, req.query.supplierId));
        logger.info("GET /sales");
    }catch(err){
        next (err);
    }
}

async function getSale(req, res, next){
    try{
        res.send(await SaleService.getSale(req.params.id));
        logger.info("GET /sale");
    }catch(err){
        next (err);
    }
}

async function deleteSale(req, res, next){
    try{
        await SaleService.deleteSale(req.params.id);
        res.end();
        logger.info("DELETE /sale");
    }catch(err){
        next (err);
    }
}

async function updateSale (req, res, next){
    try{
        let sale = req.body;
        if (!sale.clientId || !sale.productId || !sale.value || !sale.date || !sale.saleId){
            throw new Error("Sale ID, Client ID, Product ID, Value, Date são obrigatórios.")
        }
        sale = await SaleService.updateSale(sale);
        res.send(sale)
        logger.info(`PUT /sale - ${JSON.stringify (sale)}`);
    }catch (err) {
        next(err);Value
    }
}

export default {
    createSale,
    getSales,
    getSale,
    deleteSale,
    updateSale
}