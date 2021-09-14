import  Sale  from '../models/sale.model.js'
async function insertSale(sale){
    try{
        return await Sale.create(sale)
    }catch(err){
        throw err
    }
}

async function getSales(){
    try{
        return await Sale.findAll()
    }catch(err){
        throw err
    }
}

async function getSalesByProductId(productId){
    try{
        return await Sale.findAll(
            {
                where:{
                    productId: productId
                }
            })
    }catch(err){
        throw err
    }
}

async function getSale(id){
    try{
        return await Sale.findByPk(id)
    }catch(err){
        throw err
    }
}

async function deleteSale(id){
    try{
        await Sale.destroy({
            where:{
                saleId: id
            }
        })
    }catch(err){
        throw err
    }
}
async function updateSale(sale){
    try{
        await Sale.update(sale,{
            where:{
                saleId: sale.saleId
            }
        })
    }catch(err){
        throw err
    }
}


export default {
    insertSale,
    getSales,
    getSalesByProductId,
    getSale,
    deleteSale,
    updateSale
}