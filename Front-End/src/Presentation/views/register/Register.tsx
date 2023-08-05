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

export const RegisterScreen = () => {
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
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../../assets/user.png")}
          />
          <TextInput
            placeholder="Nombres"
            style={styles.formTextInput}
            keyboardType="default"
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../../assets/my_user.png")}
          />
          <TextInput
            placeholder="Apellidos"
            style={styles.formTextInput}
            keyboardType="default"
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../../assets/email.png")}
          />
          <TextInput
            placeholder="Correo Electronico"
            style={styles.formTextInput}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../../assets/phone.png")}
          />
          <TextInput
            placeholder="Telefono"
            style={styles.formTextInput}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../../assets/password.png")}
          />
          <TextInput
            placeholder="Contraseña"
            style={styles.formTextInput}
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../../assets/confirm_password.png")}
          />
          <TextInput
            placeholder="Confirmar Contraseña"
            style={styles.formTextInput}
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
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
