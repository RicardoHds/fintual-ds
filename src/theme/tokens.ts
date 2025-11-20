export enum Color {
  Border = 'border',
  InputBackground = 'inputBackground',
  TextPrimary = 'textPrimary',
  TextSecondary = 'textSecondary',
  TextInverse = 'textInverse',
  Link = 'link',
  Danger = 'danger',
  Success = 'success',
}

export enum Typography {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  BodyLg = 'bodyLg',
  BodyMd = 'bodyMd',
  BodySm = 'bodySm',
  Caption = 'caption',
  Label = 'label',
  Overline = 'overline',
  Code = 'code',
}

export type Palette = {
  [Color.Border]: string;
  [Color.InputBackground]: string;
  [Color.TextPrimary]: string;
  [Color.TextSecondary]: string;
  [Color.TextInverse]: string;
  [Color.Link]: string;
  [Color.Danger]: string;
  [Color.Success]: string;
};

export const lightPalette: Palette = {
  [Color.Border]: '#E0E0E0',
  [Color.InputBackground]: '#FFFFFF',
  [Color.TextPrimary]: '#1A1A1A',
  [Color.TextSecondary]: '#4D4D4D',
  [Color.TextInverse]: '#FFFFFF',
  [Color.Link]: '#0066FF',
  [Color.Danger]: '#D32F2F',
  [Color.Success]: '#388E3C',
};

export const darkPalette: Palette = {
  [Color.Border]: '#2D2D2D',
  [Color.InputBackground]: '#1A1A1A',
  [Color.TextPrimary]: '#FFFFFF',
  [Color.TextSecondary]: '#C1C1C1',
  [Color.TextInverse]: '#000000',
  [Color.Link]: '#5EA1FF',
  [Color.Danger]: '#FF6F6F',
  [Color.Success]: '#7EDB8A',
};

export const typography = {
  [Typography.H1]: { fontSize: 32, lineHeight: 40, fontWeight: '700' },
  [Typography.H2]: { fontSize: 28, lineHeight: 36, fontWeight: '700' },
  [Typography.H3]: { fontSize: 24, lineHeight: 32, fontWeight: '600' },

  [Typography.BodyLg]: { fontSize: 18, lineHeight: 26, fontWeight: '400' },
  [Typography.BodyMd]: { fontSize: 16, lineHeight: 24, fontWeight: '400' },
  [Typography.BodySm]: { fontSize: 14, lineHeight: 20, fontWeight: '400' },

  [Typography.Caption]: { fontSize: 12, lineHeight: 16, fontWeight: '400' },
  [Typography.Label]: { fontSize: 14, lineHeight: 18, fontWeight: '500' },
  [Typography.Overline]: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
  },

  [Typography.Code]: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'monospace',
  },
};
