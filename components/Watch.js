import { StyleSheet, View, Animated, Easing } from "react-native";
import { ThemeContext, useContext } from "../context/theme-context";
import { useState, useEffect } from "react";

export default function Watch() {
  const { theme } = useContext(ThemeContext);
  const [rotate, setRotate] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(Animated.timing(rotate, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true
    })).start();
  });

  return (
    <View style={[styles.watch, { borderColor: theme.primary }]}>
      <Animated.View style={{ 
          transform: [{ 
            rotate: rotate.interpolate({ 
              inputRange: [0, 1], outputRange: ['0deg', '360deg']
            }) 
          }] 
        }}>
        <View style={[styles.line, { backgroundColor: theme.primary }]}></View>
        <View style={styles.transparentLine}></View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  watch: {
    width: 100,
    height: 100,
    borderRadius: 360,
    borderWidth: 4,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },

  line: {
    height: 50,
    width: 4,
    borderRadius: 360
  },

  transparentLine: {
    height: 50,
    width: 4,
    backgroundColor: 'transparent',
    borderRadius: 360
  }
});