import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput,Button, ToastAndroid } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("./assets/chef.jpg")}
      />
      <View style={styles.logoContainer}>
        <Image source={require("./assets/logo.png")} style={styles.logoImage} />
        <Text style={styles.logoText}>Food App</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("./assets/email.png")}
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
            source={require("./assets/password.png")}
          />
          <TextInput
            placeholder="Contraseña"
            style={styles.formTextInput}
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={{marginTop:30}}>
        <Button 
        title="ENTRAR" 
        onPress={()=>ToastAndroid.show('CLICK',ToastAndroid.LONG)}
        color='orange'
        />
        </View>
        <View style={styles.formRegister}>
      <Text>No Tienes Cuenta</Text>
      <Text style={styles.formRegisterText}>Registrate</Text>

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
    color:'orangez',
    borderBottomWidth:1,
    borderBottomColor:'orange',
    fontWeight:'bold',
    marginLeft:10
  }
});
