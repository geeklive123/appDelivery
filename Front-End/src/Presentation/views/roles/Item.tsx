import React from 'react'
import { TouchableOpacity, View,Image,Text , StyleSheet} from 'react-native'
import {Rol} from '../../../Domain/entities/Rol'
import { MyColors } from '../../theme/AppTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/MainStackNavigator';

interface Props{
    rol:Rol,
    height:number,
    width:number,
    navigation:StackNavigationProp<RootStackParamList,"RolesScreen",undefined>
}

export const RolesItem=({rol,height,width,navigation}:Props)=> {
  return (
 <TouchableOpacity 
    onPress={()=>{
        if(rol.name=='ADMIN'){
            navigation.replace('AdminTabsNavigator');
        }
        else if(rol.name=='REPARTIDOR'){
            navigation.replace('DeliveryTabsNavigator');
        }
        else if(rol.name=='CLIENTE'){
            navigation.replace('ClientTabsNavigator');
        }
    }}
 >
  <View style={ styles.container }>
            <Image
                style={ styles.image }
                source={{ uri: rol.image }}
            />

            <View style={styles.info}>
                <Text style={styles.title}>{ rol.name }</Text>
            </View>

        </View>
      
 </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: 90,
        marginHorizontal: 20,
        marginTop: 10,
        paddingTop: 10
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15
    },
    info: {
        marginLeft: 15,
        flex: 1
    },
    title: {
        color: 'black',
        fontSize: 15
    },
    description: {
        color: 'gray',
        fontSize: 12,
        marginTop: 3
    },
    price: {
        color: 'green',
        fontSize: 12,
        fontWeight: 'bold'
    },
    actionContainer: {
        marginRight: 40
    },
    actionImage: {
        width: 25,
        height: 25,
        marginVertical:2
    },
    divider: {
        height: 1,
        backgroundColor: '#f2f2f2',
        marginHorizontal: 30,
        flex: 1
    }
});