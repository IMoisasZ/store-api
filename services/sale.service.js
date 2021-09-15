import SaleRepository from '../repositories/sale.repository.js'
import ProductRepository from '../repositories/product.repository.js'
import ClientRepository from '../repositories/client.repository.js'

async function createSale(sale){
    let error = ""
    if(!await ClientRepository.getClient(sale.clientId)){
        error = "O Client ID informado não existe.";
    }
    const product = await ProductRepository.getProduct(sale.productId)
    if(!product){
        error += "O Product ID informado não existe."
    }
    if(error){
        throw new Error(error)
    }

    if (product.stock > 0){
        sale = await SaleRepository.insertSale(sale)
        product.stock--;
        await ProductRepository.updateProduct(product)
        return sale;
    }else{
        throw new Error("O produto informado não ha estoque")
    }

}

async function getSales(productId, supplierId){
    if(productId){
        return await SaleRepository.getSalesByProductId(productId)
    }
    if(supplierId){
        return await SaleRepository.getSalesBySupplierId(supplierId)
    }
    return await SaleRepository.getSales();
}

async function getSale(id){
    return await SaleRepository.getSale(id);
}

async function deleteSale(id){
    const sale = await SaleRepository.getSale(id)
    if(sale){
        const product = await ProductRepository.getProduct(sale.productId);
        await SaleRepository.deleteSale(id);
        product.stock++;
        await ProductRepository.updateProduct(product)
    }else{
        throw new Error("O ID informado não existe!")
    }
}

async function updateSale(sale){
    let error = ""
    if(!await ClientRepository.getClient(sale.clientId)){
        error = "O Client ID informado não existe.";
    }
    if(!await ProductRepository.getProduct(sale.productId)){
        error += "O Product ID informado não existe."
    }
    if(error){
        throw new Error(error)
    }
    return await SaleRepository.updateSale(sale);
}

export default {
    createSale,
    getSales,
    getSale,
    deleteSale,
    updateSale
}