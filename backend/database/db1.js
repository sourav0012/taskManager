const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/database1');
}

main().then(
    ()=>{
        console.log("mongodb is connected");
    }


).catch((err)=>{
        console.log("mongodb is not connected", err);
})

module.exports = mongoose;