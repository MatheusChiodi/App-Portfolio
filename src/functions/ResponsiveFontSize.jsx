import { Dimensions } from 'react-native';

const responsiveFontSize = (fontSize) => {
  const standardScreenWidth = 375;
  const currentWidth = Dimensions.get('window').width;
  const scale = currentWidth / standardScreenWidth;

  return fontSize * scale;
};

export default responsiveFontSize;
