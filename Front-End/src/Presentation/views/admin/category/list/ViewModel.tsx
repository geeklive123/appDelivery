
import React,{useState,useContext} from 'react';
import { Category } from '../../../../../Domain/entities/Category';
import { GetAllCategoryUseCase } from '../../../../../Domain/useCases/category/getAllCategory';
import { DeleteCategoryUseCase } from '../../../../../Domain/useCases/category/DeleteCategory';
import { UserContext } from '../../../../context/UserContext';
import { CategoryContext } from '../../../../context/CategoryContext';


export const AdminCategoryListViewModel=()=>{
  
    const[responseMessage,setResponseMessage]= useState('');
    const {categories,getCategories,remove}=useContext(CategoryContext);

 

    const deleteCategory = async (idCategory:string) =>{
        const result = await remove(idCategory);
        setResponseMessage(result.message);   
        
    }

    return{
        categories,
        responseMessage,
        deleteCategory,
        getCategories
    }
}
export default AdminCategoryListViewModel;