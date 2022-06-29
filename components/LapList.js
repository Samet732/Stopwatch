import { StyleSheet, FlatList, View, Dimensions, Text } from "react-native";
import { ThemeContext, useContext } from "../context/theme-context";
import msToTime from './../tools/ms-to-time';

const fakedata = [
  {
    id: 1,
    time: 1000
  },
  {
    id: 2,
    time: 3500
  },
  {
    id: 3,
    time: 597300
  },
  {
    id: 4,
    time: 600000
  },
  {
    id: 5,
    time: 700000
  },
  {
    id: 6,
    time: 1000000
  },
  {
    id: 7,
    time: 30000000
  }
];

export default function LapList() {
  const { theme } = useContext(ThemeContext);
  const renderItem = ({ item }) => (
    <Item item={item} theme={theme} />
  );

  return (
    <FlatList
      data={fakedata}
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