import React from "react";
import { Link, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity, Image, Text, Linking } from "react-native";
import logoImg from "../../assets/dog.png";
import styles from "./styles";
import * as MailComposer from "expo-mail-composer";
export default function Detail() {
  const message =
    'Olá AuMigos, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha sofreu queda" com o valor de R$300,00';

  const navigation = useNavigation();
  function navigateBack() {
    navigation.goBack();
  }
  function sendMail() {
    MailComposer.composeAsync({
      subject: "Heroi do caso: cadelinha sofreu uma queda",
      recipients: ["fihdoleftaay@gmail.com"],
      body: message,
    });
  }
  function sendWhatsApp() {
    Linking.openURL(
      "https://api.whatsapp.com/send?phone=5511974710705&text=Ol%C3%A1%20AuMigos%2C%20estou%20entrando%20em%20contato%20pois%20gostaria%20de%20ajudar%20no%20caso%20%22Cadelinha%20sofreu%20queda%22%20com%20o%20valor%20de%20R%24300%2C00}"
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
        <Image style={styles.image} source={logoImg} />
      </View>
      <View style={styles.incidents}>
        <Text style={[styles.incidentsProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentsValue}>AuMigos</Text>

        <Text style={styles.incidentsProperty}>Caso:</Text>
        <Text style={styles.incidentsValue}>Cadelinha sofreu queda</Text>

        <Text style={styles.incidentsProperty}>VALOR:</Text>
        <Text style={styles.incidentsValue}>360,00 reais</Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi deste caso</Text>
        <Text style={styles.heroDescription}>Entre em contato</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}> WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}> Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
