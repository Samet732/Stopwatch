import { StyleSheet, FlatList, View, Dimensions, Text } from "react-native";
import { ThemeContext, useContext } from "../context/theme-context";
import msToTime from './../tools/ms-to-time';

export default function LapList({ laps }) {
  const { theme } = useContext(ThemeContext);

  const renderItem = ({ item }) => (
    <Item item={item} theme={theme} />
  );

  return (
    <FlatList
      data={laps}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

function Item({ item, theme }) {
  return (
    <View style={styles.item}>
      <View style={[styles.circle, { borderWidth: 2, borderColor: theme.primary }]}>
        <Text style={{ color: theme.text }}>{item.id}</Text>
      </View>
      <Text style={{ color: theme.text, fontSize: 18 }}>{msToTime(item.time)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: Dimensions.get('window').width - 20,
    height: 70,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderBottomWidth: 0.2,
    marginHorizontal: 10,
    borderColor: '#999999',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  circle: {
    borderRadius: 360,
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
});