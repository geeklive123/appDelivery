import React,{useState,useContext,useEffect} from 'react';
import { GetByUserAddressUseCase } from '../../../../../Domain/useCases/address/GetByUserAddress';
import { Address } from '../../../../../Domain/entities/Address';
import { UserContext } from '../../../../context/UserContext';

const ClientAddressListViewModel=()=>{
    const [address,setAddress]=useState<Address[]>([]);
    const {user,saveUserSession,getUserSession} =useContext(UserContext);
    const [checked, setChecked] = useState('');

        useEffect(()=>{
            getAddress();
            if (user.address !== null && user.address !== undefined) {
                changeRadioValue(user.address!);
                console.log('USUARIO CON DIRECCION: ' + JSON.stringify(user));
            }
            
        },[user])


    const getAddress=async()=>{
        const result = await GetByUserAddressUseCase(user.id!);
        setAddress(result);
    }
    const changeRadioValue=(address:Address)=>{
        setChecked(address.id!);
        user.address=address;
        saveUserSession(user);
      
    }
    return{
        address,
        getAddress,
        checked,
        changeRadioValue
    }
}

export default ClientAddressListViewModel