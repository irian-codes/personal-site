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
  },
};

const headingStyles = {
  sectionHeading: {
    fontSize: textStyles.fontSize.large,
    fontWeight: 'bold' as const,
    marginBottom: textStyles.spacing.headingMarginBottom,
    textDecoration: 'underline' as const,
  },
};

export const cvGlobalStyles = {
  text: {
    ...textStyles,
    headings: headingStyles,
  },
};
