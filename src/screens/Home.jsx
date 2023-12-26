import { StyleSheet, Text, View } from 'react-native';
import scaleFactor from '../functions/ScaleFactor';
import WhatIs from '../components/WhatIs';
import Langues from '../components/Langues';
import MyContacts from '../components/MyContacts';

export default function Home() {
  return (
    <View style={styles.container}>
      <WhatIs />
      <Langues />
      <View
        style={{
          height: 20 * scaleFactor,
          width: '100%',
          borderTopWidth: 1,
          borderColor: '#ccc',
          marginVertical: 20 * scaleFactor,
        }}
      />
      <Text
        style={{
          fontSize: 25 * scaleFactor,
          fontWeight: 'bold',
        }}
      >
        My Contacts: 
      </Text>
      <MyContacts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10 * scaleFactor,
  },
});
