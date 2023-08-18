import React, { useEffect } from 'react'
import {View,Text, ToastAndroid,Image} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './Style'
import useViewModel from './Viewmodel'
import { RoundedButton } from '../../../../components/RoundedButton';
import StylesMap from './StylesMap'
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';

interface Props extends StackScreenProps<ClientStackParamList,'ClientAddressMapScreen'>{};

export const ClientAddressMapScreen = ({navigation,route}:Props)=>{
    const { messagePermissions, position, mapRef,name,onRegionChangeComplete,latitude,longitude } = useViewModel();

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
                onRegionChangeComplete={(region)=>{
                    onRegionChangeComplete(region.latitude,region.longitude)
                }}
            />

            <Image 
                style={ styles.imageLocation }
                source={require('../../../../../../assets/location_home.png')}
            />

<View style={ styles.refPoint }>
                <Text style={ styles.refPointText }>{ name }</Text>
            </View>
          
         <View style={styles.buttonRefPoint}>
            <RoundedButton
                text='Seleccionar Punto'
                onPress={()=>{
                    navigation.navigate({
                        name:'ClientAddressCreateScreen',
                        merge:true,
                        params:{refPoint:name,latitude:latitude,longitude:longitude}
                    })
                }}
            />
         </View>
        </View>
    )
}