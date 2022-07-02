import { Dimensions, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";
import { ThemeContext, themes, useContext } from "../context/theme-context";
import { TimeContext } from "../context/time-context";
import Sun from './../assets/brightness-high.png'
import Moon from './../assets/moon-fill.png'

export default function Footer({ start, clear, lap }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { time, setTime } = useContext(TimeContext);

  const toggleTheme = () => {
    if (theme.name === 'light')
      setTheme(themes.dark);
    else setTheme(themes.light);
  };

  return (
    <View style={[styles.footer, { backgroundColor: theme.primary }]}>
      <Button
        title={"CLEAR"}
        color={theme.foreground}
        onPress={clear} 
      />
      <Button
        title={"LAP"}
        color={theme.foreground}
        onPress={lap} 
      />
      <Button
        title={time.running ? "STOP" : "START"}
        color={theme.foreground}
        onPress={start}
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