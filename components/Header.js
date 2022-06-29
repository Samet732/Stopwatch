import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ThemeContext, useContext } from "../context/theme-context";
import Watch from "./Watch";

export default function Header({ time }) {
  const { theme } = useContext(ThemeContext);

  //TODO: split time and print

  return (
    <View style={styles.container}>
      <Watch />
      <Text style={[styles.text, { color: theme.text }]}>00:00:00.00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    marginTop: 30,
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 42
  }
});