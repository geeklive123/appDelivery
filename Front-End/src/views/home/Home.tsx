import React,{useState}from 'react';
import {useNavigation} from '@react-navigation/native'
import { StyleSheet, Text, View, Image, TextInput,Button, ToastAndroid, TouchableOpacity } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import {StackNavigationProp} from '@react-navigation/stack'
import { RootStackParamList } from '../../../App';
export const HomeScreen = () => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
    const navigation=useNavigation<StackNavigationProp<RootStackParamList>>()
    return (
        <View style={styles.container}>
          <Image
            style={styles.imageBackground}
            source={require("../../../assets/chef.jpg")}
          />
          <View style={styles.logoContainer}>
            <Image source={require("../../../assets/logo.png")} style={styles.logoImage} />
            <Text style={styles.logoText}>Food App</Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.formText}>INGRESAR</Text>
            <View style={styles.formInput}>
              <Image
                style={styles.formIcon}
                source={require("../../../assets/email.png")}
              />
              <TextInput
                placeholder="Correo Electronico"
                style={styles.formTextInput}
                keyboardType="email-address"
                value={email}
                onChangeText={text=>setEmail(text)}
              />
            </View>
            <View style={styles.formInput}>
              <Image
                style={styles.formIcon}
                source={require("../../../assets/password.png")}
              />
              <TextInput
                placeholder="Contraseña"
                style={styles.formTextInput}
                keyboardType="default"
                secureTextEntry={true}
                value={password}
                onChangeText={text=>setPassword(text)}
              />
            </View>
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
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      imageBackground: {
        width: "100%",
        height: "100%",
    
        bottom: "30%",
      },
      form: {
        width: "100%",
        height: "40%",
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
      },
      formText: {
        fontWeight: "bold",
        fontSize: 16,
      },
      logoContainer: {
        position: "absolute",
        alignSelf: "center",
        top: "15%",
      },
      logoImage: {
        width: 100,
        height: 100,
      },
      logoText: {
        color: "white",
        textAlign: "center",
        fontSize: 17,
        marginTop: 10,
        fontWeight: "bold",
      },
      formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "orange",
        marginLeft: 15, 
      },
      formInput: {
        flexDirection: "row",
        marginTop: 30,
      },
      formIcon: {
        width: 25,
        height: 25,
        marginTop: 5,
      },
      formRegister:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:30
      },
      formRegisterText:{
        fontStyle:'italic',
        color:'orange',
        borderBottomWidth:1,
        borderBottomColor:'orange',
        fontWeight:'bold',
        marginLeft:10
      }
    });
    
