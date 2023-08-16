const Product =require('../models/product');
const storage= require('../utils/cloud_storage');
const asyncForEach =require('../utils/async_foreach');

module.exports={

  
     create(req, res) {

        const product = JSON.parse(req.body.product); // CAPTURO LOS DATOS QUE ME ENVIE EL CLIENTE

        const files = req.files;

        let inserts=0;
        if(files.length===0){
            return res.status(501).json({
                success: false,
                message: 'Error al Registrar el producto no tiene imagenes',
              
            });
        }
        else{
            Product.create(user, (err, data) => {

        
                if (err) {
                    return res.status(501).json({
                        success: false,
                        message: 'Hubo un error con la creacion del Producto',
                        error: err
                    });
                }
                product.id=id_product;
                const start =async ()=>{
                    await asyncForEach(files,async(file)=>{
                        const path = `image_${Date.now()}`;
                        const url = await storage(file, path);
            
                        if (url != undefined && url != null) {
                          if(inserts==0){
                            product.image1=url;
                          }
                          else if(inserts==1){
                            product.image2=url;
                          }
                          else if(inserts==2){
                            product.image3=url;
                          }
                        } 
                        await  Product.update(product,(err,data)=>{
                            if (err) {
                                return res.status(501).json({
                                    success: false,
                                    message: 'Hubo un error con la creacion del Producto',
                                    error: err
                                });
                            }
                            inserts=inserts+1;
                            if(inserts==files.length){
                                return res.status(201).json({
                                    success: true,
                                    message: 'El producto se realizo correctamente',
                                    data: data
                                });
                            }
                        });
                    });
                }
                start();
            });
       
        }
     
}

}