const list_color = {
  green: {
    1: '#0BCAD4',
  },
  dark: {
    1: '#112340',
    2: '#495A75',
    3: '#8092AF',
  },
  gray: {
    1: '#7D8797',
    2: '#E9E9E9',
    3: '#EDEEF0',
    4: '#B1B7C2',
    5: '#EEEEEE',
  },
  blue: {
    1: '#0066CB',
    2: '#EDFCFD',
  },
  white: '#FFFFFF',
};

const colors = {
  primary: list_color.green[1],
  secondary: list_color.dark[1],
  tertiary: list_color.blue[1],
  white: list_color.white,
  button: {
    primary: list_color.green[1],
    secondary: list_color.white,
  },
  text: {
    primary: list_color.dark[1],
    secondary: list_color.gray[1],
    tertiary: list_color.gray[3],
    menuInactive: list_color.dark[2],
    menuActive: list_color.green[1],
    subTitle: list_color.dark[3],
  },
  border: list_color.gray[2],
  card: list_color.blue[2],
  newsBorder: list_color.gray[5],
};

export default colors;
