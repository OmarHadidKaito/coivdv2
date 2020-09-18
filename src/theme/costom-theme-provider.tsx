import React, {useContext, useState} from 'react';
import {Colors, appColors, colorType} from './colors';

export type Theme = {
  mode: colorType;
  colors: Colors;
  setTheme: (val: colorType) => void;
};

export const ThemeContext = React.createContext<Theme>({
  mode: 'Dark_Theme',
  colors: appColors['Dark_Theme'],
  setTheme: () => {},
});

export const CostomThemeProvider: React.FC = ({children}) => {
  const [color, setColor] = useState<colorType>('Dark_Theme');

  const defaultTheme: Theme = {
    mode: 'Dark_Theme',
    colors: appColors[color],
    setTheme: (val: colorType) => {
      setColor(val);
    },
  };

  return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
