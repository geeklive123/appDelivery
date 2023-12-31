import React,{useEffect} from 'react'
import {View,Text,FlatList,Image, ToastAndroid} from 'react-native'
import styles from './Styles'
import { StackScreenProps } from '@react-navigation/stack'
import { AdminOrderStackParamList } from '../../../../navigator/AdminOrderStackNavigator'
import { OrderDetailItem } from './Item'
import { DateFormatter } from '../../../../utils/DateFormatter'
import useViewModel from './ViewModel'
import { RoundedButton } from '../../../../components/RoundedButton'
import DropDownPicker from 'react-native-dropdown-picker'
interface Props extends StackScreenProps<AdminOrderStackParamList,'AdminOrderDetailScreen'>{};

export const AdminOrderDetailScreen=({navigation,route}:Props)=>{
    const{order} = route.params;
    const {total,deliveryMen,getTotal,getDeliveryMen,open,value,setOpen,setValue,items,setItems,dispatchOrder,responseMessage} =useViewModel(order);
    useEffect(()=>{
        if(responseMessage!==''){
            ToastAndroid.show(responseMessage,ToastAndroid.LONG);
        }
    },[responseMessage])

    useEffect(()=>{
        if(total===0.0){
            getTotal();
        }
       getDeliveryMen();
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.products}>
                <FlatList 
                data={order.products}
                keyExtractor={(item)=>item.id!}
                renderItem={({item})=><OrderDetailItem product={item}/>}
                />
            </View>
            <View style={styles.info}>
                <View style={styles.infoRow}>
                    <View style={styles.infoText}>
                        <Text style={styles.infoTitle}>Fecha del Pedido</Text>
                        <Text style={styles.infoDescription}>{DateFormatter(order.timestamp!)}</Text>
                    </View>
                    <Image
                    style={styles.infoImage}
                        source={require('../../../../../../assets/time.png')}
                    />
                </View>
                <View style={styles.infoRow}>
                    <View style={styles.infoText}>
                        <Text style={styles.infoTitle}>Cliente y Telefono</Text>
                        <Text style={styles.infoDescription}>{order.client?.name}-{order.client?.phone}</Text>
                    </View>
                    <Image
                    style={styles.infoImage}
                        source={require('../../../../../../assets/time.png')}
                    />
                </View>
                <View style={styles.infoRow}>
                    <View style={styles.infoText}>
                        <Text style={styles.infoTitle}>Dirrecion de entrega</Text>
                        <Text style={styles.infoDescription}>{order.address?.address}-{order.address?.neighborhood}</Text>
                    </View>
                    <Image
                    style={styles.infoImage}
                        source={require('../../../../../../assets/time.png')}
                    />
                </View>
                {
            order.status === 'PAGADO' 
            ? 
            <View>
              <Text style={styles.deliveries}>REPARTIDORES DISPONIBLES</Text>
              <View style={ styles.dropDown }>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
              </View>
            </View>
            : <Text style={styles.deliveries}>REPARTIDOR ASIGNADO: {order.delivery?.name}</Text>
          }
          

          

          <View style={ styles.totalInfo }>
            <Text style={styles.total}>TOTAL: ${ total }</Text>
            <View style={styles.button}>
              {
                order.status === 'PAGADO' &&
                <RoundedButton text='DESPACHAR ORDEN' onPress={() => dispatchOrder()} />
              }
            </View>
          </View>
        </View>
    </View>
  )
}
