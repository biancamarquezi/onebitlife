import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import DefaultButton from "../../Components/Common/DefaultButton";

export default function AppExplanation() {
  function handleSetShowHome() {
    console.log("Botão clicado!");
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Antes, deixa eu te explicar...</Text>
          <Text style={styles.description}>
            Pronto(a) para subir de nível na vida?
          </Text>
          <Text style={styles.descriptionCta}>
            Na próxima tela você vai poder escolher {"\n"} seus 04 hábitos de
            forma individual.
          </Text>
          <DefaultButton
            buttonText={"Continuar"}
            handlePress={handleSetShowHome}
            width={250}
            heigth={50}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 40,
  },
  descriptionCta: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    MarginBottom: 10,
  },
  description: {
    color: "white",
    textAlign: "center",
    MarginBottom: 30,
  },
});
