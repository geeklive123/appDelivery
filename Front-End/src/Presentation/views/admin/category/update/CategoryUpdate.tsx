import React,{useState,useEffect} from 'react'
import {View,Text,Image,TouchableOpacity, ActivityIndicator, ToastAndroid} from 'react-native'
import useViewModel from './ViewModel'
import styles from './Styles'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import { RoundedButton } from '../../../../components/RoundedButton'
import { ModalPickImage } from '../../../../components/ModalPickImage'
import { MyColors, MyStyles } from '../../../../theme/AppTheme'
import { CategoryStackParamList } from '../../../../navigator/AdminCategoryNavigator'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<CategoryStackParamList,'AdminCategoryUpdateScreen'>{};

export const AdminCategoryUpdateScreen = ({navigation,route}:Props) => {

    const {category}=route.params;
    const {name,description,image,onChange,takePhoto,pickImage,loading,responseMessage,createCategory,updateCategory}=useViewModel(category);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(()=>{
    if(responseMessage!==''){
 
        ToastAndroid.show(responseMessage,ToastAndroid.LONG);
      }
    } ,[responseMessage])
   
 
  return (
 <View style={styles.container}>
   <TouchableOpacity style={styles.imageContainer}
   onPress={()=>setModalVisible(true)}>
 
   {
              image == ''
              ? <Image 
                  source={require('../../../../../../assets/image_new.png')}
                  style={ styles.image }
              />
              : <Image 
                source={{uri:image}}
                  style={ styles.image }
                />
            }
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

        text='Actualizar CATEGORIA'
        onPress={()=>updateCategory()}
    />
</View>
<ModalPickImage
          openGallery={ pickImage }
          openCamera={ takePhoto }
          modalUseState={ modalVisible }
          setModalUseState={ setModalVisible }
          />

        {
          loading && 
          <ActivityIndicator 
            style={MyStyles.loading} 
            size="large" 
            color={ MyColors.primary }  
          />
        }
 </View>

  )
}
