import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (

      <SafeAreaView style={styles.areaSegura}>
        <View style={styles.conteudo}>
          <View style={styles.cabecalho}>
            <Text style={styles.titulo}>Aplicativo KANBAN</Text>
            <Text style={styles.subtitulo}>Aplicativo estatico em desenvolvimento</Text>
          </View>


        </View>

      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaSegura: {
    backgroundColor: "#fff"
  },
  tela: {
    backgroundColor: "#fff"
  },
  conteudo: {
    padding: 16
  },
  cabecalho: {
    marginBottom: 12
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#e2e8f0"
  },
  titulo: {
    fontSize: 20,
    fontWeight: "700"
  },
  subtitulo: {
    color: "#475569"
  },
  rotulo: {
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 8
  },
  linhaMenu: {
    marginBottom: 12
  },
  containerBotao: {
    marginHorizontal: 4,
  },
  cartao: {
    width: "100%",
    backgroundColor: "#f1f5f9",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    marginBottom: 12,
  },
  cartaoImportante: {
    backgroundColor: "#dbeafe",
    borderColor: "#60a5fa",
  },
  tituloCartao: {
    fontWeight: "700",
    marginBottom: 4
  },
  textoSecundario: {
    color: "#475569"
  },
  centralizado: {
    width: "100%",
    height: 140,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
});