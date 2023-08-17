import { Product } from "../../Domain/entities/Product";
import * as ImagePicker from 'expo-image-picker';
import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { createContext } from "react";
import { CreateProductUseCase } from "../../Domain/useCases/product/CreateProduct";
export interface ProductContextProps{
    create(product:Product, files:ImagePicker.ImagePickerAsset[]):Promise<ResponseApiDelivery>
}
export const ProductContext = createContext({} as ProductContextProps);
export const ProductProvider=({children}:any)=>{

    
    const create=async (product:Product,files:ImagePicker.ImagePickerAsset[]):Promise<ResponseApiDelivery>=>{
        const response =await CreateProductUseCase(product,files);
        return response;
    }
    return (
        <ProductContext.Provider value={{
            create
        }}>
            {children}
        </ProductContext.Provider>
    )
}