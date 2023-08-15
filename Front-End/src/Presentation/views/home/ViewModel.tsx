import React,{useEffect, useState,useContext} from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { GetUserLocalUseCase } from '../../../Domain/useCases/userLocal/GetUserLocal';
import { useUserLocal } from '../../hooks/useUserLocal';
import { UserContext } from '../../context/UserContext';
 const HomeViewModel = () => {
  

  const [errorMessage,setErrorMessage]=useState('');
  const[values,setValues]=useState({
    email:'',
    password:'',
  });
  //const {user,getUserSession} =useUserLocal();
  const{user,saveUserSession}=useContext(UserContext);
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
       saveUserSession(response.data);
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