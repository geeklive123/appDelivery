import { StackScreenProps,StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View,Text, Button,Image,TouchableOpacity} from 'react-native';
import useViewModel from './ViewModel';
import { RootStackParamList } from '../../../../../App';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../../components/RoundedButton';

export const ProfileInfoScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {removeSession,user}=useViewModel();
  return (
    <View style={styles.container}>
    <Image 
      source={require('../../../../../assets/chef.jpg')}    
      style={styles.imageBackground}
      />
      <TouchableOpacity style={styles.logout} onPress={()=>{
        removeSession();
        navigation.replace('HomeScreen');
      }}>
      <Image 
      source={require('../../../../../assets/cerrar.png')}    
      style={styles.logoutImage}
      />
      </TouchableOpacity>
       
      <View style={styles.logoContainer}>
      <Image 
      source={{uri:user?.image}}    
      style={styles.logoImage}
      />
      </View>
      <View style={styles.form}>
      <View style={ styles.formInfo }>
            <Image
              source={ require('../../../../../assets/user.png')}
              style={ styles.formImage }
            />
            <View style={ styles.formContent }>
              <Text>{ user?.name } {user?.lastname}</Text>
              <Text style={ styles.formTextDescription }>Nombre del usuario</Text>
            </View>
          </View>
          
          <View style={ {...styles.formInfo, marginTop: 25} }>
            <Image
              source={ require('../../../../../assets/user.png')}
              style={ styles.formImage }
            />
            <View style={ styles.formContent }>
              <Text>{ user?.email }</Text>
              <Text style={ styles.formTextDescription }>Correo electronico</Text>
            </View>
          </View>

          <View style={ {...styles.formInfo, marginTop: 25, marginBottom: 70} }>
            <Image
              source={ require('../../../../../assets/user.png')}
              style={ styles.formImage }
            />
            <View style={ styles.formContent }>
              <Text>{ user?.phone }</Text>
              <Text style={ styles.formTextDescription }>Telefono</Text>
            </View>
          </View>
          <RoundedButton
          onPress={()=>{}}
          text='ACTUALIZAR INFORMACION'
          />
          <View style={{ marginBottom: 2 }}>
              
            

          </View>
        
           
        </View>
       
        </View>
  )

  
}
