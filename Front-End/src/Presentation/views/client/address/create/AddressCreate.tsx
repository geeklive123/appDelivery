import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import useViewModel from "./ViewModel";
import styles from "./Styles";
import { CustomTextInput } from "../../../../components/CustomTextInput";
import { RoundedButton } from "../../../../components/RoundedButton";
import { ModalPickImage } from "../../../../components/ModalPickImage";
import { MyColors, MyStyles } from "../../../../theme/AppTheme";

export const ClientAddressCreateScreen = () => {
  const {
    address,
    neightborhood,
    refPoint,
    onChange,
    loading,
    responseMessage,
    createCategory,
  } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => setModalVisible(true)}
      >
          <Image
              style={ styles.image }
              source={ require('../../../../../../assets/map.png') }
              />
      </TouchableOpacity>
      <View style={styles.form}>
        <CustomTextInput
          placeholder="Nombre de la Dirreccion"
          image={require("../../../../../../assets/categories.png")}
          keyboardType="default"
          value={address}
          onChangeText={onChange}
          property="name"
        />
        <CustomTextInput
          placeholder="Barrio"
          image={require("../../../../../../assets/description.png")}
          keyboardType="default"
          value={neightborhood}
          onChangeText={onChange}
          property="description"
        />
         <CustomTextInput
          placeholder="Punto de referencia"
          image={require("../../../../../../assets/description.png")}
          keyboardType="default"
          value={refPoint}
          onChangeText={onChange}
          property="description"
        />
      </View>
      <View style={styles.buttonContainer}>
        <RoundedButton
          text="CREAR DIRECCION"
          onPress={() => createCategory()}
        />
      </View>
      {loading && (
        <ActivityIndicator
          style={MyStyles.loading}
          size="large"
          color={MyColors.primary}
        />
      )}
    </View>
  );
};
