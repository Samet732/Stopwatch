import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Dimensions, Text } from 'react-native';
import Footer from './components/Footer';
import msToTime from "./tools/ms-to-time";
import LapList from './components/LapList';
import Watch from './components/Watch';
import { ThemeContext, themes } from './context/theme-context';
import { TimeContext } from './context/time-context';

export default function App() {
  const [theme, setTheme] = useState(themes.light);
  const [time, setTime] = useState({ running: false, startTime: Date.now() });
  const [laps, setLaps] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let id;
    if (time.running)
      id = setInterval(() => setCount(() => Date.now() - time.startTime), 100);

    return () => {
      if (time.running)
        clearInterval(id);
    };
  }, [time.running]);

  const start = () => {
    setTime({
      running: !time.running,
      startTime: Date.now() - count
    });
  };

  const clear = () => {
    setTime({
      running: false,
      startTime: Date.now()
    });
    setLaps([]);
    setCount(0)
  };

  const lap = () => {
    let arr = laps.slice(0);
    arr.push({
      id: laps.length + 1,
      time: count
    });
    setLaps(arr);
  };

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
          <View style={styles.stopwatch}>
            <Watch />
            <Text style={[styles.text, { color: theme.text }]}>{msToTime(count)}</Text>
          </View>
          <View style={styles.group}>
            <LapList laps={laps} />
            <Footer start={start} clear={clear} lap={lap} />
          </View>
        </SafeAreaView>
      </ThemeContext.Provider>
    </TimeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  group: {
    flex: 2,
    width: Dimensions.get('window').width
  },

  stopwatch: {
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
