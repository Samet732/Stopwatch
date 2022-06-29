import { Dimensions, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";
import { ThemeContext, themes, useContext } from "../context/theme-context";
import Sun from './../assets/brightness-high.png'
import Moon from './../assets/moon-fill.png'

export default function Footer() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme.name === 'light')
      setTheme(themes.dark);
    else setTheme(themes.light);
  };

  const clear = () => {};
  const lap = () => {};
  const stop = () => {};

  return (
    <View style={[styles.footer, { backgroundColor: theme.foreground }]}>
      <Button
        title={"CLEAR"}
        color={theme.primary}
        onPress={clear} 
      />
      <Button
        title={"LAP"}
        color={theme.primary}
        onPress={lap} 
      />
      <Button
        title={"STOP"}
        color={theme.primary}
        onPress={stop}
      />
      <TouchableOpacity onPress={toggleTheme}>
        <Image
          style={styles.image}
          source={theme.name === 'light' ? Sun : Moon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: Dimensions.get('window').width,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  image: {
    height: 30,
    width: 30,
    marginVertical: 5
  },
});