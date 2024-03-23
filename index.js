import express from 'express'
import  mongoose  from 'mongoose'

import ProductsRouter from './routes/products.js'
const app = express()

app.use(express.json())


app.use('/products',ProductsRouter)
//getting a product by Id


mongoose.connect('mongodb+srv://GOAT:Lucas@backenddb.cxe879a.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {console.log('Connected!')
app.listen(3000,()=>{
    console.log('listening on port 3000')
})

})
.catch((err) => console.error('Failed to connect to MongoDB', err));

