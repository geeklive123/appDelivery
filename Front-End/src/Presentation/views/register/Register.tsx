import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import useViewModel from './ViewModel';
import { CustomTextInput } from "../../components/CustomTextInput";

export const RegisterScreen = () => {

  const{name,lastname,email,phone,password,confirmPassword,onChange} =useViewModel();

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../assets/chef.jpg")}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/user_image.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>
      <View style={styles.form}>
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
          <RoundedButton
            onPress={() => ToastAndroid.show("Hola", ToastAndroid.SHORT)}
            text="Confirmar"
          />
        </View>
      </View>
    </View>
  );
};

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
    height: "72%",
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
    top: "5%",
    alignItems: "center",
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
  formRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  formRegisterText: {
    fontStyle: "italic",
    color: "orange",
    borderBottomWidth: 1,
    borderBottomColor: "orange",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
