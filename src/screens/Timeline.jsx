import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
} from 'react-native';
import stories from '../context/stories';
import { Feather } from '@expo/vector-icons';
import scaleFactor from '../functions/ScaleFactor';
import renderHighlightedText from '../functions/renderHighlightedText';

export default function Timeline() {
  const [activeStory, setActiveStory] = useState(1);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [expanded, setExpanded] = useState(false);

  const alternStory = (id) => {
    setActiveStory(id);
    setExpanded(false);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const renderDescription = (description) => {
    const maxLength = 500;
    let textToShow = description;
    if (!expanded && description.length > maxLength) {
      textToShow = description.substring(0, maxLength) + '... ';
    }
    return renderHighlightedText(textToShow);
  };
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={styles.title}>Timeline</Text>

        {stories.map((story, index) => (
          <TouchableOpacity
            key={story.id}
            style={[
              styles.storyButton,
              activeStory === story.id && styles.activeStory,
            ]}
            onPress={() => alternStory(story.id)}
          >
            <Feather
              name={index % 2 === 0 ? 'book' : 'code'}
              size={24 * scaleFactor}
              color="white"
            />
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={{ marginTop: 20 * scaleFactor }}>
        <Animated.View style={[styles.storyContent, { opacity: fadeAnim }]}>
          <Text style={styles.storyTitle}>
            {stories.find((story) => story.id === activeStory)?.title}
          </Text>
          <Text style={styles.storyDescription} onPress={toggleExpanded}>
            {renderDescription(
              stories.find((story) => story.id === activeStory)?.description
            )}
            {!expanded && <Text style={styles.moreText}>Leia mais</Text>}
          </Text>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20 * scaleFactor,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28 * scaleFactor,
    fontWeight: 'bold',
    color: '#333',
  },
  timeline: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20 * scaleFactor,
  },
  storyButton: {
    backgroundColor: '#44475a',
    borderRadius: 50 * scaleFactor,
    padding: 12 * scaleFactor,
    elevation: 5 * scaleFactor,
  },
  activeStory: {
    backgroundColor: '#ff5555',
  },
  storyContent: {
    padding: 10 * scaleFactor,
    backgroundColor: 'white',
    borderRadius: 8 * scaleFactor,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 * scaleFactor },
    shadowOpacity: 0.1 * scaleFactor,
    shadowRadius: 4 * scaleFactor,
    marginTop: 20 * scaleFactor,
  },
  storyTitle: {
    fontSize: 22 * scaleFactor,
    fontWeight: 'bold',
    marginBottom: 8 * scaleFactor,
    color: '#333',
  },
  storyDescription: {
    fontSize: 16 * scaleFactor,
    color: '#666',
    lineHeight: 24 * scaleFactor,
    textAlign: 'justify',
  },
});
