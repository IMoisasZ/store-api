// import { getClient } from './mongo.db.js'
import { connect } from './mongo.db.js'
import ProductInfoSchema from '../schemas/productInfo.schema.js'

async function createProductInfo(productInfo){
    //mongoose
    try{
        const mongoose = await connect();
        // console.log(mongoose.connect());
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        productInfo = new ProductInfo(productInfo);
        await productInfo.save();
    }catch(err){
        throw err
    }
    //mogodb
    // const client = getClient();
    // try{
    //     await client.connect();
    //     await client.db("store").collection("productInfo").insertOne(productInfo);
    // }catch(err){
    //     throw err;
    // }finally{
    //     await client.close();
    // }
}

async function updateProductInfo(productInfo){
    // const client = getClient();
    // try{
    //     await client.connect();
    //     await client.db("store").collection("productInfo").updateOne(
    //         { productId: productInfo.productId },
    //         {$set: { ...productInfo }}    
    //     );
    // }catch(err){
    //     throw err;
    // }finally{
    //     await client.close();
    // }

    //mongoose
    try{
        const mongoose = await connect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        ProductInfo.findOneAndUpdate( { productId: productInfo.productId }, productInfo);
    }catch(err){
        throw err
    }
}

async function getProductInfo(productId){
    // const client = getClient();
    // try{
    //     await client.connect();
    //     return await client.db("store").collection("productInfo").findOne( { productId });
    // }catch(err){
    //     throw err;
    // }finally{
    //     await client.close();
    // }
    //mongoose
    try{
        const mongoose = await connect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        const query = ProductInfo.findOne( { productId });
        return query.exec();
    }catch(err){
        throw err
    }
}

async function createReview(review, productId){
    try{
        const productInfo = await getProductInfo(productId)
        productInfo.reviews.push(review)
        await updateProductInfo(productInfo);
    }catch(err){
        throw err;
    }
}

async function deleteReview(productId, index){
    try{
        const productInfo = await getProductInfo(productId)
        productInfo.reviews.splice(index, 1)
        await updateProductInfo(productInfo);
    }catch(err){
        throw err;
    }
}

async function getProductsInfo(){
    // const client = getClient();
    // try{
    //     await client.connect();
    //     return await client.db("store").collection("productInfo").find( {} ).toArray();
    // }catch(err){
    //     throw err;
    // }finally{
    //     await client.close();
    // } 

     //mongoose
     try{
        const mongoose = await connect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        const query = ProductInfo.find( { });
        return query.exec();
    }catch(err){
        throw err
    }
}

async function deleteProductInfo(productId){
    // const client = getClient();
    // try{
    //     await client.connect();
    //     return await client.db("store").collection("productInfo").deleteOne( { productId });
    // }catch(err){
    //     throw err;
    // }finally{
    //     await client.close();
    // }

     //mongoose
     try{
        const mongoose = await connect();
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
        await ProductInfo.deleteOne({ productId })
    }catch(err){
        throw err
    }
}

export default { 
    createProductInfo,
    updateProductInfo,
    getProductInfo,
    createReview,
    deleteReview,
    getProductsInfo,
    deleteProductInfo
} 