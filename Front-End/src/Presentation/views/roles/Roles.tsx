import React, { useState } from 'react'
import {Dimensions, FlatList, Text, View} from 'react-native';
import useViewModel from './ViewModel';
import { RolesItem } from './Item';
import Carousel from 'react-native-reanimated-carousel';
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { GetUserLocalUseCase } from '../../../Domain/useCases/userLocal/GetUserLocal';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/MainStackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'RolesScreen'>{};
export const RolesScreen = ({navigation,route}:Props) => {
    const {user} =useViewModel();
    const [mode,setMode]=useState<any>('horizontal-stack');
    const [snapDirection, setSnapDirection] = useState<'left'|'right'>('left');
    const width=Dimensions.get('window').width;
    const height=Dimensions.get('window').height;
    return (
      <View style={{backgroundColor: 'white'}}>
          <FlatList
            data={ user?.roles }
            keyExtractor={(item) => item.id!}
            renderItem={ ({item}) => <RolesItem rol={ item } height={ 400 } width={ width - 100  } navigation={navigation}/>}
            />
      </View>
    )
}
