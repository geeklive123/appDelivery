import React from 'react'
import { CategoryRepositoryImpl } from '../../../Data/repositories/CategoryRepository'
import { Category } from '../../entities/Category';
import * as ImagePicker from 'expo-image-picker';
const {updateWithImage}=new CategoryRepositoryImpl();
export const UpdateWithCategoryUseCase=async(category:Category,file:ImagePicker.ImagePickerAsset)=>{
    return await updateWithImage(category,file);
}