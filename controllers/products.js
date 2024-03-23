import Product from '../models/product.models.js'
import  mongoose  from 'mongoose'

export const getAllProducts=async (req,res)=>{
    try{
        const products=await Product.find({})
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({message: error.message})}
}

export const getProductById=async(req,res)=>{
    try{
      const {id}=req.params
      const product=await Product.findById(id)
      res.status(200).json(product)
    }catch(error){
      res.status(500).json({message: error.message})
    }
  }

  export const postProduct=async(req,res)=>{
    try{
      const product=await Product.create(req.body)
      
      res.status(200).json(product)
    }catch(error){
      res.status(500).json({message:error.message})
    }
  
  }

  //updating a product{3 methods}
  // app.patch('/api/product/:id',async(req,res)=>{
  //   try{
  //     const {id}=req.params
      
  //     const product=await Product.findByIdAndUpdate(id,req.body)//take note the we use Product azin te model itself
  //     if(!product){
  //       return res.status(404).json({message:"product not found"})
        
  //     }
  
  //     const updatedProduct=await Product.findById(id)
  
      
  //     res.status(200).json(updatedProduct)
  
  //   }catch(error){
  //     res.status(500).json({message:error.message})
     
  
  
  //   }
  // })
  
  // app.put('/api/product/:id', async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const product = await Product.findById(id);
      
  //     if (!product) {
  //       return res.status(404).json({ message: "Product not found" });
  //     }
  
  //     const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
  //     // The { new: true } option ensures that `updatedProduct` contains the updated document
  //     res.status(200).json(updatedProduct);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // });
  
  //This updating logic needs some modifications since it only checks if the id is valid, does not check if it exists the id might be valid but does not exiist in a database
  export const updateProduct=async(req,res)=>{
    try{
       const {id}=req.params
       if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:"Product not found"})
       const updatedProduct=await Product.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updatedProduct)
    }catch(error){
      res.status(500).json({message:error.message})
    }
  }
  //deleting a product
  export const deleteProduct=async(req,res)=>{
    try{
     const{id}=req.params
      if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:"Invalid id"})
  
  
      const existingProduct = await Product.findById(id);
      if (!existingProduct) return res.status(404).json({ message: "Product not found" });
      
  
      
      const product=await Product.findByIdAndDelete(id)
      res.status(200).json({message:`${product.name} deleted successfully`})
  
    }catch(error){
      res.status(500).json({message:error.message})
    }
  
  }
  

