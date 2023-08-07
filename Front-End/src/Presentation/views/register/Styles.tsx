import { StyleSheet } from "react-native";
const RegisterStyles = StyleSheet.create({
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
  export default RegisterStyles;