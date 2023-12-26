import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
} from 'react-native';
import scaleFactor from '../functions/ScaleFactor';
import myProjects from '../context/myProjects';

export default function Projects() {
  const handleLink = (link) => {
    Linking.openURL(link);
  };

  myProjects.sort((a, b) => a.rank - b.rank);

  const truncateDescription = (desc) => {
    const maxLength = 40;
    if (desc.length > maxLength) {
      return `${desc.substring(0, maxLength)}...`;
    }
    return desc;
  };

  const animations = useRef(
    myProjects.map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    const timingAnimations = myProjects.map((_, i) => {
      return Animated.timing(animations[i], {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
        delay: i * 300,
      });
    });
    Animated.stagger(300, timingAnimations).start();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {myProjects.map((project, index) => (
        <Animated.View
          key={project.id}
          style={[
            styles.projectCard,
            {
              opacity: animations[index],
              transform: [{ scale: animations[index] }],
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => handleLink(project.link)}
            style={styles.touchableArea}
          >
            <Image source={project.image} style={styles.projectImage} />
            <View style={styles.textContainer}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDescription}>
                {truncateDescription(project.shortDescription)}
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10 * scaleFactor,
  },
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: 10 * scaleFactor,
    marginBottom: 25 * scaleFactor,
    elevation: 3 * scaleFactor,

    alignItems: 'center',
    justifyContent: 'space-between',
    height: 90 * scaleFactor,
  },
  touchableArea: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  projectImage: {
    width: 150 * scaleFactor,
    height: 90 * scaleFactor,
    borderTopLeftRadius: 10 * scaleFactor,
    borderBottomLeftRadius: 10 * scaleFactor,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10 * scaleFactor,
  },
  projectTitle: {
    fontSize: 18 * scaleFactor,
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 14 * scaleFactor,
    color: '#44475a',

    paddingRight: 10 * scaleFactor,
  },
});
