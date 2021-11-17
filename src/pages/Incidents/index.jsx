import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Touchable,
} from "react-native";
import logoImg from "../../assets/dog.png";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate("Details");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>3 casos. </Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem Vindo!!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia :)
      </Text>

      <FlatList
        data={[1, 2, 3]}
        style={styles.incidentList}
        keyExtractor={(incident) => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incidents}>
            <Text style={styles.incidentsProperty}>ONG:</Text>
            <Text style={styles.incidentsValue}>AuMigos</Text>

            <Text style={styles.incidentsProperty}>Caso:</Text>
            <Text style={styles.incidentsValue}>Cadelinha sofreu queda</Text>

            <Text style={styles.incidentsProperty}>VALOR:</Text>
            <Text style={styles.incidentsValue}>360,00 reais</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
