import React,{useState,useEffect} from 'react'
import {View,Text,Image,TouchableOpacity, ActivityIndicator, ToastAndroid,ScrollView} from 'react-native'
import useViewModel from './ViewModel'
import styles from './Styles'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import { RoundedButton } from '../../../../components/RoundedButton'
import { ModalPickImage } from '../../../../components/ModalPickImage'
import { MyColors, MyStyles } from '../../../../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator'
import { ModalPickMultipleImage } from '../../../../components/ModalPickMultipleImage'

interface Props extends StackScreenProps<ProductStackParamList,'AdminProductCreateScreen'>{};

export const AdminProductCreateScreen = ({navigation,route}:Props) => {
    const {category}=route.params;
    const {name,description,image1,image2,image3,price,onChange,takePhoto,pickImage,loading,responseMessage,createProduct}=useViewModel(category);
    const [modalVisible, setModalVisible] = useState(false);
    const [numberImage,setNumberImage]=useState(1);

    useEffect(()=>{
    if(responseMessage!==''){
 
        ToastAndroid.show(responseMessage,ToastAndroid.LONG);
      }
    } ,[responseMessage])
   
 
  return (
 <View style={styles.container}>
    <View style={styles.imageContainer}>
    <TouchableOpacity 
   onPress={()=>{
    setNumberImage(1)
    setModalVisible(true)
   }}>
 
   {
              image1 == ''
              ? <Image 
                  source={require('../../../../../../assets/image_new.png')}
                  style={ styles.image }
              />
              : <Image 
                source={{uri:image1}}
                  style={ styles.image }
                />
            }
   </TouchableOpacity>
   <TouchableOpacity 
   onPress={()=>{
    setNumberImage(2)
    setModalVisible(true)
   }}>
 
   {
              image2 == ''
              ? <Image 
                  source={require('../../../../../../assets/image_new.png')}
                  style={ styles.image }
              />
              : <Image 
                source={{uri:image2}}
                  style={ styles.image }
                />
            }
   </TouchableOpacity>
   <TouchableOpacity 
   onPress={()=>{
    setNumberImage(3)
    setModalVisible(true)
   }}>
 
   {
              image3 == ''
              ? <Image 
                  source={require('../../../../../../assets/image_new.png')}
                  style={ styles.image }
              />
              : <Image 
                source={{uri:image3}}
                  style={ styles.image }
                />
            }
   </TouchableOpacity>
    </View>
   
   <View style={styles.form}>
    <ScrollView>
    <View style={styles.categoryInfo} >
    <Image 
    style={styles.imageCategory}
    source={require('../../../../../../assets/categories.png')}
    />
    <Text style={styles.textCategory}>Categoria Seleccionada</Text>
    <Text>{category.name}</Text>
</View>
    <CustomTextInput

    placeholder='Nombre del Producto'
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
<CustomTextInput

placeholder='Precio'
image={require('../../../../../../assets/price.png')}
keyboardType='numeric'
value={price}
onChangeText={onChange}
property='price'

/>

   
   <View style={styles.buttonContainer}>
    <RoundedButton

        text='CREAR PRODUCTO'
        onPress={()=>createProduct()}
    />
</View>
    </ScrollView>
    </View>
<ModalPickMultipleImage
          openGallery={ pickImage }
          openCamera={ takePhoto }
          modalUseState={ modalVisible }
          setModalUseState={ setModalVisible }
          numberImage={numberImage}
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
