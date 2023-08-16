import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {View,Text} from 'react-native'
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator'

interface Props extends StackScreenProps<ProductStackParamList,'AdminProductListScreen'>{};
export const AdminProductListScreen=({navigation,route}:Props)=>{
    const {category}=route.params;
    console.log('CATEGORY'+ JSON.stringify(category));
    
    return(
        <View style={{marginTop:50}}>
            <Text>
                AdminProductListScreen
            </Text>
        </View>
    )
}