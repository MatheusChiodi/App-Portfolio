import { StyleSheet, Text, View } from 'react-native';
import scaleFactor from '../functions/ScaleFactor';
import WhatIs from '../components/WhatIs';
import Langues from '../components/Langues';
import MyContacts from '../components/MyContacts';

export default function Home() {
  const contact = [
    {
      id: 1,
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/matheus-chiodi/',
      icon: 'linkedin',
      bg: '#0077b5',
      color: '#fff',
    },
    {
      id: 2,
      name: 'Github',
      url: 'https://github.com/MatheusChiodi',
      icon: 'github',
      bg: '#333',
      color: '#fff',
    },
    {
      id: 3,
      name: 'Google Play',
      url: 'https://play.google.com/store/apps/dev?id=8115131743129012258',
      icon: 'play',
      bg: '#fff',
      color: '#000',
    },
  ];

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
