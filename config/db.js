const mongoose = require('mongoose');

const local = "mongodb+srv://Hoanghung200603:hung200603@atlascluster.h4fmiga.mongodb.net/AND103?retryWrites=true&w=majority&appName=AtlasCluster";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
