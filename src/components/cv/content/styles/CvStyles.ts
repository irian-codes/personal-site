const colors = {
  primary: 'black',
  secondary: '#dd2222',
  primaryGray: '#4d4d4d',
};

const textStyles = {
  fontSize: {
    skills: 8,
    small: 9,
    medium: 11,
    large: 12,
    largex: 14,
  },
  spacing: {
    headingMarginBottom: '0.1cm',
    lineSpacing: '0.15cm',
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
    fontSize: textStyles.fontSize.largex,
    marginBottom: textStyles.spacing.headingMarginBottom,
    textDecoration: 'underline' as const,
    color: colors.secondary,
  },
  h2: {
    fontFamily: textStyles.fontFamily.headers,
    fontSize: textStyles.fontSize.large,
    marginBottom: textStyles.spacing.lineSpacing,
    color: colors.primary,
  },
  h3: {
    fontSize: textStyles.fontSize.medium,
    marginBottom: textStyles.spacing.lineSpacing,
    color: colors.primary,
  },
  h4: {
    fontSize: textStyles.fontSize.small,
    marginBottom: textStyles.spacing.lineSpacing,
    color: colors.primary,
  },
};

const sectionsStyles = {
  spacing: {
    small: '0.5cm',
    tiny: '0.25cm',
    smallest: '0.15cm',
  },
};

export const cvStyles = {
  colors,
  text: {
    ...textStyles,
    headings: headingStyles,
    sections: sectionsStyles,
  },
};
