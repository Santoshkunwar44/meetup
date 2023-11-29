const { default: mongoose } = require("mongoose")

module.exports = async()=>{
    try {
        const db = await mongoose.connect(process.env.MONGO_URI)
        console.log(db.connection.host)


    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}