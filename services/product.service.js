import ProductRepository from '../repositories/product.repository.js'
import SupplierRepository from '../repositories/supplier.repository.js'
import SaleRepository from '../repositories/sale.repository.js'

async function createProduct(product){
    if(await SupplierRepository.getSupplier(product.supplierId)){
        return await ProductRepository.insertProduct(product)
    }
    throw new Error("O supplierId informado não existe!")
}

async function getProducts(){
    return await ProductRepository.getProducts();
}

async function getProduct(id){
    return await ProductRepository.getProduct(id);
}

async function deleteProduct(id){
    const sales = await SaleRepository.getSalesByProductId(id)
    if(sales){
       throw new Error("Não é possivel explicuir o produto, devido a compras!")
    }
    await ProductRepository.deleteProduct(id);
}

async function updateProduct(product){
    if(await SupplierRepository.getSupplier(product.supplierId)){
        return await ProductRepository.updateProduct(product);
    }
    throw new Error("O supplierId informado não existe!")
}

export default {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}