import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import useViewModel from './ViewModel'
import styles from './Styles'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import { RoundedButton } from '../../../../components/RoundedButton'
export const AdminCategoryCreateScreen = () => {
    const {name,description,image,onChange}=useViewModel();
  return (
 <View style={styles.container}>
   <TouchableOpacity style={styles.imageContainer}>
    <Image
        style={styles.image}
        source={require('../../../../../../assets/image_new.png')}
   />
   </TouchableOpacity>
   <View style={styles.form}>
    <CustomTextInput

    placeholder='Nombre de la categoria'
    image={require('../../../../../../assets/categories.png')}
    keyboardType='default'
    value={name}
    onChangeText={onChange}
    property='name'
    />
     <CustomTextInput

placeholder='Descripcion'
image={require('../../../../../../assets/description.png')}
keyboardType='default'
value={description}
onChangeText={onChange}
property='description'

/>
   </View>
   <View style={styles.buttonContainer}>
    <RoundedButton

        text='CREAR CATEGORIA'
        onPress={()=>{}}
    />
</View>
   
 </View>

  )
}
