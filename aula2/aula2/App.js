import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View
      style={pedro.Tela}
    >
      <View style={pedro.Centralizado}>
        <Text style={pedro.blueText}>Universal React with Expo</Text>
        <View style={pedro.CaixaRetangular}></View>
        <View style={pedro.CaixaQuadrangular}></View>
      </View>
    </View>
  );
}

const pedro = StyleSheet.create({
  blueText: {
    color: "blue"
  },
  Tela: {
    backgroundColor: "black",
    color: "#000000",
    height: 1000,
    width: 250,
    padding: 30
  },
  CaixaRetangular: {
    width: 200,
    height: 50,
    backgroundColor: "#FFFFFF"
  },
  CaixaQuadrangular: {
    width: 100,
    height: 100,
    backgroundColor: "#FFFFFF"
  },
  Centralizado: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }

});
