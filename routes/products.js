import express from 'express'
import { deleteProduct, getAllProducts, getProductById, postProduct, updateProduct } from '../controllers/products.js'
const router=express.Router()

router.get('/',getAllProducts)


router.get('/:id',getProductById)
  //adding a product
  
  
  router.post('/',postProduct)
  
  router.put('/:id',updateProduct)//patch also works similarly they are both for updating
  
  //delete api
  router.delete('/:id',deleteProduct)
  
  


export default router;