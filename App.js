import { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Dimensions } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import LapList from './components/LapList';
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
		    <View style={styles.group}>
          <LapList />
          <Footer />
        </View>
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

  group: { 
    flex: 2, 
    width: Dimensions.get('window').width 
  }
});
