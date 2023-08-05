import React,{useState} from 'react'

 const HomeViewModel = () => {
  
  const[values,setValues]=useState({
    email:'',
    password:'',
  });
  

  const onChannge=(property:string, value:any) =>{
    setValues({...values,[property]:value });
  }
  return {
    ...values,
    onChannge
  }
}
export default HomeViewModel;