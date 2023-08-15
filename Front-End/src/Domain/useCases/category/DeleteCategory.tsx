import { CategoryRepositoryImpl } from "../../../Data/repositories/CategoryRepository";
import { Category } from "../../entities/Category";

const {remove} =new CategoryRepositoryImpl();

export const DeleteCategoryUseCase= async(id:string)=>{
    return await remove(id);
}