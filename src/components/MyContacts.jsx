import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Animated,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native';
import scaleFactor from '../functions/ScaleFactor';
import contact from '../context/contact';
import { Feather } from '@expo/vector-icons';

export default function MyContacts() {
  const opacityAnims = useRef(contact.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = contact.map((_, index) => {
      return Animated.timing(opacityAnims[index], {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        delay: index * 10,
      });
    });
    Animated.sequence(animations).start();
  }, []);

  const handleLink = (link) => {
    Linking.openURL(link);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10 * scaleFactor,
      }}
    >
      {contact.map((contact, index) => (
        <Animated.View
          key={contact.name}
          style={{
            opacity: opacityAnims[index],
          }}
        >
          <TouchableOpacity onPress={() => handleLink(contact.url)}>
            <View style={[styles.logo, { backgroundColor: contact.bg }]}>
              <Feather
                name={contact.icon}
                size={24 * scaleFactor}
                color={contact.color}
              />
            </View>
          </TouchableOpacity>
        </Animated.View>
      ))}
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
  logo: {
    width: 50 * scaleFactor,
    height: 50 * scaleFactor,
    borderRadius: 10 * scaleFactor,
    backgroundColor: '#ccc',
    margin: 10 * scaleFactor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
