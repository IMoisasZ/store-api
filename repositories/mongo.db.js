// import mongodb from 'mongodb'

// function getClient(){
//     const uri = "mongodb+srv://moisas:d16m09@cluster0.47nrl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//     return new mongodb.MongoClient(uri)
// }

// export { getClient }

import mongoose from 'mongoose';

async function connect(){
    const uri = "mongodb+srv://moisas:d16m09@cluster0.47nrl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    return await mongoose.connect(uri);
}

export { connect }