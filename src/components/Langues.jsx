import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, Text, View } from 'react-native';
import scaleFactor from '../functions/ScaleFactor';
import langues from '../context/langues';

export default function Langues() {
  // Criando um Animated.Value para cada item da lista
  const opacityAnims = useRef(langues.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = langues.map((_, index) => {
      return Animated.timing(opacityAnims[index], {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        delay: index * 10,
      });
    });
    Animated.sequence(animations).start();
  }, []);

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10 * scaleFactor,
      }}
    >
      {langues.map((langue, index) => (
        <Animated.View
          key={langue.name}
          style={{
            ...styles.langues,
            backgroundColor: langue.color,
            opacity: opacityAnims[index],
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 18 * scaleFactor,
              fontWeight: 'bold',
            }}
          >
            {langue.name}
          </Text>
        </Animated.View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  langues: {
    borderRadius: 10 * scaleFactor,
    paddingHorizontal: 20 * scaleFactor,
    paddingVertical: 5 * scaleFactor,
    marginHorizontal: 5 * scaleFactor,
    marginVertical: 5 * scaleFactor,
    elevation: 3 * scaleFactor,
  },
});
