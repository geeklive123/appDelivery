import React, { useState, useContext } from 'react';
import { ApiDelivery } from '../../../../Data/sources/remote/api/ApiDelivery';
import * as ImagePicker from 'expo-image-picker';
import { SaveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../../hooks/useUserLocal';
import { User } from '../../../../Domain/entities/User';
import { ResponseApiDelivery } from '../../../../Data/sources/remote/models/ResponseApiDelivery';


const ProfileUpdateViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [values, setValues] = useState({
        name:'',
        lastname:'',
        phone:'',
        email:'',
        image:'',
        password:'',
        confirmPassword:'',
    });
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImageInfo>()
    const {user, getUserSession } = useUserLocal();


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            onChange('image',result.assets[0].uri);
    setFile(result.assets[0]);
        }
    }
    
    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            onChange('image',result.assets[0].uri);
    setFile(result.assets[0]);
        }
    }

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }
    
    const onChangeInfoUpdate = (name: string, lastname: string, phone: string) => {
        setValues({ ...values, name, lastname, phone})
    }

    /*const update = async () => {
        if (isValidForm()) {
            setLoading(true);
            
            let response  = {} as ResponseAPITinder;

            if (values.image?.includes('https://')) {
                response = await UpdateUserUseCase(values);
            }
            else {
                response = await UpdateWithImageUserUseCase(values, file!);
            }
            
            setLoading(false);
            console.log('RESULT: ' + JSON.stringify(response));        
            if (response.success) {
                saveUserSession(response.data);
                setSuccessMessage(response.message);
            }
            else {
                setErrorMessage(response.message);
            }
        }
    }*/

    const isValidForm = (): boolean => {
        if (values.name === '') {
            setErrorMessage('Ingresa tu nombre');
            return false;
        }
        if (values.lastname === '') {
            setErrorMessage('Ingresa tu apellido');
            return false;
        }
        if (values.phone === '') {
            setErrorMessage('Ingresa tu telefono');
            return false;
        }
        
        return true;
    }

    return {
        ...values,
        onChange,
        pickImage,
        takePhoto,
        onChangeInfoUpdate,
        errorMessage,
        successMessage,
        loading,
        user
    }
}

export default ProfileUpdateViewModel;
