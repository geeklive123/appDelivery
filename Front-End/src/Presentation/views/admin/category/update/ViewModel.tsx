import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { CreateCategoryUseCase } from "../../../../../Domain/useCases/category/CreateCategory";
import { Category } from "../../../../../Domain/entities/Category";
import { UpdateCategoryUseCase } from '../../../../../Domain/useCases/category/UpdateCategory';
import { UpdateWithImageUserUseCase } from "../../../../../Domain/useCases/user/UpdateWithImageUser";
import { ResponseApiDelivery } from "../../../../../Data/sources/remote/models/ResponseApiDelivery";
import { UpdateWithCategoryUseCase } from "../../../../../Domain/useCases/category/UpdateWithImage";

const AdminCategoryUpdateViewModel = (category: Category) => {
  const [values, setValues] = useState(category);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
  const [responseMessage, setResponseMessage] = useState("");
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };
  const createCategory = async () => {
    setLoading(true);
    const response = await CreateCategoryUseCase(values, file!);
    setLoading(false);
    setResponseMessage(response.message);
 
  };


  const updateCategory= async()=>{
    setLoading(true);
    let response ={} as ResponseApiDelivery;
    if(values.image?.includes('https://')){
        const response= await UpdateCategoryUseCase(values);
    }
    else{
        response=await UpdateWithCategoryUseCase(values,file!);
    }
    setLoading(false);
    setResponseMessage(response.message);
  
  }

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };
  return {
    ...values,
    onChange,
    takePhoto,
    pickImage,
    loading,
    responseMessage,
    createCategory,
   
    updateCategory
  };
};
export default AdminCategoryUpdateViewModel;
