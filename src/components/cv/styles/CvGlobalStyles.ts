const textStyles = {
  fontSize: {
    smallest: 10,
    medium: 12,
    large: 14,
  },
  colors: {
    primary: 'black',
    secondary: 'blue',
  },
  spacing: {
    headingMarginBottom: '0.3cm',
    lineSpacing: '0.2cm',
    smallest: '0.1cm',
  },
};

const headingStyles = {
  h1: {
    fontSize: textStyles.fontSize.large,
    fontWeight: 'bold' as const,
    marginBottom: textStyles.spacing.headingMarginBottom,
    textDecoration: 'underline' as const,
    color: textStyles.colors.secondary,
  },
  h2: {
    fontSize: textStyles.fontSize.medium,
    marginBottom: textStyles.spacing.lineSpacing,
    color: textStyles.colors.primary,
  },
};

const sectionsStyles = {
  spacing: {
    smallest: '0.25cm',
    small: '0.5cm',
    medium: '1cm',
  },
};

export const cvGlobalStyles = {
  text: {
    ...textStyles,
    headings: headingStyles,
    sections: sectionsStyles,
  },
};
