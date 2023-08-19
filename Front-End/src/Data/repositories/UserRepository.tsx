import { User } from "../../Domain/entities/User";
import { UserRepository } from "../../Domain/repositories/UserRepository";
import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { ImagePickerAsset } from "expo-image-picker";
import { ApiDelivery,ApiDeliveryForImage } from "../sources/remote/api/ApiDelivery";
import { AxiosError } from "axios";
import mime from "mime";


export class UserRepositoryImpl implements UserRepository{

    async getDeliveryMen(): Promise<User[]> {
        try {
            const response = await ApiDelivery.get<User[]>('/users/findDeliveryMen');
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

        async update(user:User):Promise<ResponseApiDelivery>{
            try {
                const response=await ApiDelivery.put<ResponseApiDelivery>('/users/updateWithoutImage',user);
                
                return Promise.resolve(response.data);
                
            } catch (error) {
                let e=(error as AxiosError);
                console.log('ERROR'+JSON.stringify(e.response?.data));
                const apiError:ResponseApiDelivery=JSON.parse(JSON.stringify(e.response?.data));
                return Promise.resolve(apiError)
                
            }
        }

        async updateWithImage(user: User, file: ImagePickerAsset): Promise<ResponseApiDelivery> {
            try{
                let data = new FormData();
               //@ts-ignore
                data.append('image',{
                    uri:file.uri,
                    name:file.uri.split('/').pop(),
                    type:mime.getType(file.uri)!
                    
                })
                data.append('user', JSON.stringify(user));
                const response = await ApiDeliveryForImage.put<ResponseApiDelivery>('/users/update', data);
                return Promise.resolve(response.data);
                
            }
            catch (error) {
                let e = (error as AxiosError);
                console.log('ERROR: ' + JSON.stringify(e.response?.data));
                const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data)); 
                return Promise.resolve(apiError)
                    
            }  
        }

}