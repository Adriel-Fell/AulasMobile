import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={estilos.tela}>
        <View style={estilos.conteudo}>
          <View style={estilos.cabecalho}>
            <Text style={estilos.titulo}>React Native</Text>
            <Text style={estilos.subtitulo}>Avaliação 27/08</Text>
          </View>

          <View style={estilos.item}>
            <Text style={estilos.textoItem}>Batatas são macias</Text>
          </View>
          <View style={estilos.containerBotao}>
            <Button title="ENVIAR" color="#2563eb" onPress={() => { }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: "#fff"
  },
  tela: {
    flex: 1,
    backgroundColor: "#fff"
  },
  conteudo: {
    flex: 1,
    padding: 16
  },
  cabecalho: {
    marginBottom: 320
  },
  titulo: {
    fontSize: 20,
    fontWeight: "700"
  },
  textoItem: {
    fontSize: 17,
    fontWeight: "600"
  },
  subtitulo: {
    color: "#475569"
  },
  item: {
    backgroundColor: "#dbeafe",
    borderWidth: 1, borderColor: "#60a5fa",
    borderRadius: 8,
    padding: 6,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: 60,
    margin: 60,
  },
  containerBotao: {
    paddingLeft: 100,
    paddingRight: 100,
    flex: 1,
    marginHorizontal: 4,
  },
});