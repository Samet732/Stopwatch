import { useState } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import Header from './components/Header';
import { ThemeContext, themes } from './context/theme-context';

export default function App() {
  const [theme, setTheme] = useState(themes.light);
  const [time, setTime] = useState(0);
  const context = {
    theme,
    setTheme
  };

  return (
    <ThemeContext.Provider value={context}>
      <SafeAreaView style={Object.assign({}, styles.container, { backgroundColor: theme.background })}>
        <Header time={time} />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
