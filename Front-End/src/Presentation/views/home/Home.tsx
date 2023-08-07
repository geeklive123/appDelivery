import React,{useState}from 'react';
import {useNavigation} from '@react-navigation/native'
import { StyleSheet, Text, View, Image, TextInput,Button, ToastAndroid, TouchableOpacity } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import {StackNavigationProp} from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles'
export const HomeScreen = () => {
      const {email,password,onChannge}=useViewModel();


    const navigation=useNavigation<StackNavigationProp<RootStackParamList>>()
    return (
        <View style={styles.container}>
          <Image
            style={styles.imageBackground}
            source={require("../../../../assets/chef.jpg")}
          />
          <View style={styles.logoContainer}>
            <Image source={require("../../../../assets/logo.png")} style={styles.logoImage} />
            <Text style={styles.logoText}>Food App</Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.formText}>INGRESAR</Text>
            <CustomTextInput
            image={require('../../../../assets/email.png')}
            placeholder='Correo Electronico'
            keyboardType='email-address'
            property='email'
            onChangeText={onChannge}
            value={email}
            />

<CustomTextInput
        image={require('../../../../assets/password.png')}
        placeholder="Contraseña"
        keyboardType="default"
        secureTextEntry={true}
        property="password"
        onChangeText={onChannge}
        value={password}
       
       />
            <View style={{marginTop:30}}>
            <RoundedButton onPress={()=>{
              console.log('Email: ',+email);
              console.log('Password: ',+ password);
            }} text='ENTRAR' />
            </View>
            <View style={styles.formRegister}>
          <Text>No Tienes Cuenta</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('RegisterScreen')}>
          <Text style={styles.formRegisterText}>Registrate</Text>
          </TouchableOpacity>
         
    
            </View>
          </View>
        </View>
      );
    }
    
