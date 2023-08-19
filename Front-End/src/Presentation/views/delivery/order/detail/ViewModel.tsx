import React,{useState,useEffect,useContext} from 'react';
import { Order } from '../../../../../Domain/entities/Order';
import { GetDeliveryMenUserUseCase } from '../../../../../Domain/useCases/user/GetDeliveryMenUser';
import { User } from '../../../../../Domain/entities/User';
import { UpdateToDispatchedOrderUseCase } from '../../../../../Domain/useCases/order/UpdateToDispatchedOrder';
import { OrderContext } from '../../../../context/OrderContext';

    interface DropDownProps{
        label:string,
        value:string
    }

 const AdminOrderDetailViewModel =(order:Order)=>{
    const[total,setTotal]=useState(0.0);
    const [deliveryMen,setDeliveryMen]= useState<User[]>([]);
   const [responseMessage,setResponseMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState<DropDownProps[]>([]);
  const {updateToDispacthed}=useContext(OrderContext);

  useEffect(()=>{
    setDropDownItems();
  },[deliveryMen])

      const setDropDownItems=()=>{
        let itemsDeliveryMen:DropDownProps[]=[];
        deliveryMen.forEach(delivery=>{
            itemsDeliveryMen.push({
                label:delivery.name+''+delivery.lastname,
                value:delivery.id!
            })
        });
        setItems(itemsDeliveryMen);
      }

    const getDeliveryMen=async()=>{
        const result =await GetDeliveryMenUserUseCase();
        console.log('REPARTIDORES'+JSON.stringify(result,null,3));
        
        setDeliveryMen(result);
    }

    const dispatchOrder= async()=>{
        if(value !==null){
            order.id_delivery=value!;
            const result =await updateToDispacthed(order);
            setResponseMessage(result.message);
        }else{
            setResponseMessage('Selecciona el repartidor');
        }
        console.log('REPARTIDOR SELECCIONADO'+value);
        
    }

    const getTotal=()=>{
        order.products.forEach(p=>{
            setTotal(total+(p.price*p.quantity!));
        });
    }

    return{
        total,
        deliveryMen,
        getTotal,
        getDeliveryMen,
        open,
        value,
        setOpen,
        setValue,
        items,
        setItems,
        dispatchOrder,
        responseMessage
        
    }
}
export default AdminOrderDetailViewModel;