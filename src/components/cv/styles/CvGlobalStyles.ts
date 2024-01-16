const colors = {
  primary: 'black',
  secondary: '#dd2222',
  primaryGray: '#4d4d4d',
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
  fontFamily: {
    headers: 'Poppins',
    body: 'Roboto',
    monospace: 'Roboto Mono',
  },
};

const headingStyles = {
  h1: {
    fontFamily: textStyles.fontFamily.headers,
    fontWeight: 600,
    fontSize: textStyles.fontSize.large,
    marginBottom: textStyles.spacing.headingMarginBottom,
    textDecoration: 'underline' as const,
    color: colors.secondary,
  },
  h2: {
    fontFamily: textStyles.fontFamily.headers,
    fontSize: textStyles.fontSize.medium,
    marginBottom: textStyles.spacing.lineSpacing,
    color: colors.primary,
  },
  h3: {
    fontSize: textStyles.fontSize.small,
    marginBottom: textStyles.spacing.lineSpacing,
    color: colors.primary,
  },
  h4: {
    fontSize: textStyles.fontSize.tiny,
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
