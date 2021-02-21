const mainColors = {
  green1: '#0bcad4',
  green2: '#EDFCFD',
  dark1: '#112340',
  dark2: '#495a75',
  dark3: '#8092AF',
  grey1: '#7d8797',
  grey2: '#E9e9e9',
  blue1: '#0066CB',
  black1: '#000000',
  black2: 'rgba(0,0,0,0.5)',
  red1: '#E06379',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  white: 'white',
  black: 'black',
  disable: mainColors.grey2,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuinactive: mainColors.dark2,
    menuactive: mainColors.green1,
    subtitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
  },
  border: mainColors.grey2,
  cardLight: mainColors.green2,
  loadingBackground : mainColors.black2,
  error:mainColors.red1
};