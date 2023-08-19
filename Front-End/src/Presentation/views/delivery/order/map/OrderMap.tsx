import React, { useEffect } from 'react'
import { View, Text, ToastAndroid, Image, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './Style'
import useViewModel from './Viewmodel'
import { RoundedButton } from '../../../../components/RoundedButton';
import StylesMap from './StylesMap'
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';
import { DeliveryOrderStackParamList } from '../../../../navigator/DeliveryOrderStackNavigator';

interface Props extends StackScreenProps<DeliveryOrderStackParamList,'DeliveryOrderMapScreen'>{};

export const DeliveryOrderMapScreen = ({navigation,route}:Props)=>{
    const {order} = route.params
    const { messagePermissions, position, mapRef,name,onRegionChangeComplete,latitude,longitude,updateToDeliveredOrder,responseMessage } = useViewModel(order);

    useEffect(() => {
        if (messagePermissions != '') {
          ToastAndroid.show(messagePermissions, ToastAndroid.LONG);
        }
      }, [messagePermissions])
    

    return (
        <View style={styles.container}>
            <MapView 
                ref={ mapRef }
                customMapStyle={StylesMap}
                style={{ height: '100%', width: '100%' }}
                provider={PROVIDER_GOOGLE}
            />

<View style={ styles.info }>

<View style={ styles.infoRow }>

    <View style={styles.infoText}>
        <Text style={styles.infoTitle}>Barrio</Text>
        <Text style={styles.infoDescription}>{order.address?.neighborhood}</Text>
    </View>

    <Image 
        style={ styles.infoImage }
        source={require('../../../../../../assets/location.png')}
    />

</View>

<View style={ styles.infoRow }>

    <View style={styles.infoText}>
        <Text style={styles.infoTitle}>Direccion</Text>
        <Text style={styles.infoDescription}>{order.address?.address}</Text>
    </View>

    <Image 
        style={ styles.infoImage }
        source={require('../../../../../../assets/location_home.png')}
    />

</View>

<View style={styles.divider}></View>

<View style={ styles.infoClient }>
    <Image 
        style={styles.imageClient}
        source={{uri: order.client?.image}}
    />
    <Text style={ styles.nameClient }>{order.client?.name} {order.client?.lastname}</Text>
    <Image 
        style={styles.imagePhone}
        source={require('../../../../../../assets/phone.png')}
    />
</View>

<View style={ styles.buttonRefPoint }>
    <RoundedButton 
                        text='ENTREGAR PEDIDO'
                        onPress={() => updateToDeliveredOrder()}
                    />
</View>
</View>
          
        
        </View>
    )
}