import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import scaleFactor from '../functions/ScaleFactor';

export default function WhatIs() {
  // Animações
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-50)).current; // Inicializa fora da tela
  const scaleAnim = useRef(new Animated.Value(0)).current; // Inicializa com escala 0

  useEffect(() => {
    // Animação Paralela
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      })
    ]).start();
  }, [fadeAnim, slideAnim, scaleAnim]);

  return (
    <Animated.View 
      style={{
        ...styles.container,
        opacity: fadeAnim, 
        transform: [
          { translateY: slideAnim }, 
          { scale: scaleAnim },
        ],
      }}
    >
      <Animated.Text style={styles.Title}>My Name is</Animated.Text>
      <Animated.Text style={styles.Title}>
        <Text style={{ color: '#FF5555' }}>&lt; </Text>
        <Text style={{ fontWeight: 'bold' }}>Matheus Chiodi</Text>
        <Text style={{ color: '#FF5555' }}> /&gt;</Text>
      </Animated.Text>
      <Animated.View style={{ marginTop: 20 * scaleFactor }}>
        <Animated.Text style={styles.Text}>
          I am a professional programmer{' '}
          <Text style={{ color: '#FF5555', fontWeight: 'bold' }}>
            FullStack
          </Text>{' '}
          with more than 2 years of experience
        </Animated.Text>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 30 * scaleFactor,
    fontWeight: 'bold',
    color: '#44475A',
    textAlign: 'center',
  },
  Text: {
    fontSize: 22 * scaleFactor,
    color: '#44475A',
    textAlign: 'center',
  },
});
