import React from 'react';
import { Text } from 'react-native';
import wordsToHighlight from '../context/wordsToHighlight';

const renderHighlightedText = (text) => {
  // Dividir o texto em palavras
  const words = text.split(' ');

  // Mapear cada palavra para um componente Text
  const formattedText = words.map((word, index) => {
    let isHighlighted = false;

    // Verifica se a palavra deve ser destacada
    wordsToHighlight.forEach((highlightWord) => {
      if (word.includes(highlightWord)) {
        isHighlighted = true;
      }
    });

    // Renderiza a palavra com ou sem destaque
    return (
      <Text
        key={index}
        style={isHighlighted ? { color: '#ff5555' } : {}}
      >
        {word + (index < words.length - 1 ? ' ' : '')}
      </Text>
    );
  });

  return formattedText;
};

export default renderHighlightedText;
