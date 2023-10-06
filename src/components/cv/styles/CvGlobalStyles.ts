const colors = {
  primary: 'black',
  secondary: 'blue',
};

const textStyles = {
  fontSize: {
    smallest: 8,
    tiny: 10,
    small: 12,
    medium: 14,
    large: 16,
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
    color: colors.secondary,
  },
  h2: {
    fontSize: textStyles.fontSize.medium,
    marginBottom: textStyles.spacing.lineSpacing,
    color: colors.primary,
  },
  h3: {
    fontSize: textStyles.fontSize.small,
    marginBottom: textStyles.spacing.lineSpacing,
    color: colors.primary,
  },
};

const sectionsStyles = {
  spacing: {
    small: '0.5cm',
  },
};

export const cvGlobalStyles = {
  colors,
  text: {
    ...textStyles,
    headings: headingStyles,
    sections: sectionsStyles,
  },
};
