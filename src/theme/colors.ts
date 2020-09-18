export const Sea_Theme = {
  background: '#2A69AC',
};

export const Dark_Theme = {
  background: '#171923',
};

export const Lovely_Theme = {
  background: '#F56565',
};

export const appColors = {
  Sea_Theme,
  Dark_Theme,
  Lovely_Theme,
};

export type Colors = typeof Sea_Theme;
export type colorType = keyof typeof appColors;
