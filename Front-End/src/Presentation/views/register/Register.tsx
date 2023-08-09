import React, { useEffect,useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import useViewModel from './ViewModel';
import { CustomTextInput } from "../../components/CustomTextInput";
import styles from './Styles'
import * as ImagePicker from 'expo-image-picker';
import { ModalPickImage } from "../../components/ModalPickImage";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import { MyColors } from "../../theme/AppTheme";


interface Props extends StackScreenProps<RootStackParamList,'RegisterScreen'>{};


export const RegisterScreen = ({navigation,route}:Props) => {

  const{name,lastname,email,image,phone,password,confirmPassword,onChange,register,errorMessage,pickImage,takePhoto,user,loading} =useViewModel();
  const[modalVisible,setModalVisible]= useState(false);

useEffect(()=>{
  if(errorMessage!=''){
    ToastAndroid.show(errorMessage,ToastAndroid.LONG);
  }
},[errorMessage])

  useEffect(()=>{
    if(user?.id !==null && user?.id !==undefined){
      navigation.replace('ProfileInfoScreen')
    }
  },[user])

  return (
    <View style={styles.container}>

       <Image
        style={styles.imageBackground}
        source={require("../../../../assets/chef.jpg")}
      />
   
     
      <View style={styles.logoContainer}>
      <TouchableOpacity onPress={()=>setModalVisible(true)}>
        {
          image==''
          ?
          <Image
          source={require("../../../../assets/user_image.png")}
          style={styles.logoImage}
        />
        :
        <Image
        source={{uri:image}}
        style={styles.logoImage}
        />
        }
     
        </TouchableOpacity>
        
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>
      <View style={styles.form}>
        <ScrollView>
        <Text style={styles.formText}>REGISTRARSE</Text>
        <CustomTextInput
            placeholder="Nombres"
            keyboardType="default"
            image={require("../../../../assets/user_image.png")}
            property="name"
            onChangeText={onChange}
            value={name}
          />
          <CustomTextInput
            placeholder="Apellidos"
            keyboardType="default"
            image={require("../../../../assets/user.png")}
            property="lastname"
            onChangeText={onChange}
            value={lastname}
          />
          <CustomTextInput
            placeholder="Correo Electronico"
            keyboardType="email-address"
            image={require("../../../../assets/user.png")}
            property="email"
            onChangeText={onChange}
            value={email}
          />
          <CustomTextInput
            placeholder="Telefono"
            keyboardType="numeric"
            image={require("../../../../assets/user.png")}
            property="phone"
            onChangeText={onChange}
            value={phone}
          />

          <CustomTextInput
            placeholder="Contraseña"
            keyboardType="default"
            image={require("../../../../assets/password.png")}
            property="password"
            onChangeText={onChange}
            value={password}
            secureTextEntry={true}
          />
          <CustomTextInput
            placeholder="Confirmar Contraseña"
            keyboardType="default"
            image={require("../../../../assets/user.png")}
            property="confirmPassword"
            onChangeText={onChange}
            value={confirmPassword}
            secureTextEntry={true}
          />
        <View style={{ marginTop: 30 }}>
        <RoundedButton text="CONFIRMAR" onPress={() =>  register()
             }
      
          />
        </View>

        </ScrollView>
      
      </View>
      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        modalUseState={modalVisible}
        setModalUseState={setModalVisible}
      />
      {
        loading &&
        <ActivityIndicator 
        style={styles.loading} 
        size="large" 
        color={MyColors.primary} 
         />
      }


    </View>
  );
};

