import React,{useEffect, useState} from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { SaveUserUseCase } from '../../../Domain/useCases/userLocal/SaveUser';
import { GetUserUseCase } from '../../../Domain/useCases/userLocal/GetUser';
import { useUserLocal } from '../../hooks/useUserLocal';
 const HomeViewModel = () => {
  

  const [errorMessage,setErrorMessage]=useState('');
  const[values,setValues]=useState({
    email:'',
    password:'',
  });
  const {user,getUserSession} =useUserLocal();
  console.log('USUARIO DE SESION' + JSON.stringify(user));
  

  const onChannge=(property:string, value:any) =>{
    setValues({...values,[property]:value });
  }

  const login =async()=>{
    if(isValidForm()){
      const response=await LoginAuthUseCase(values.email,values.password);
      console.log('RESPONSE' + JSON.stringify(response));
      if(!response.success){
        setErrorMessage(response.message);
      }
      else{
        await SaveUserUseCase(response.data);
        getUserSession();
      }
    }
  }

  const isValidForm=():boolean=>{
    if(values.email===''){
      setErrorMessage('Ingresar el correo Electronico');
      return false;
    }
    if(values.password===''){
      setErrorMessage('Ingrese Contraseña');
      return false;
    }
    return true;
  }

  return {
    ...values,
    user,
    onChannge,
    login,
    errorMessage
  }
}
export default HomeViewModel;