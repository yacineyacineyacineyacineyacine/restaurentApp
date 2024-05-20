import styled from 'styled-components/native'

const defaultTextStyle = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontsWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: ${theme.space[0]};
  margin-bottom: ${theme.space[0]};
`;

const body = (theme) =>`
  font-size: ${theme.fontSizes.body}
`;

const hint = (theme)=>`
  font-size: ${theme.fontSizes.body};
`;

const error = (theme)=>`
  color: ${theme.colors.text.error};
`;

const caption = (theme)=>`
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontsWeights.bold};
`;

const label = (theme) =>`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontsWeights.medium};
`;

const variants ={
    body,
    label,
    caption,
    error,
    hint,
}

export const Text = styled.Text`
  ${({theme}) => defaultTextStyle(theme)};
  ${({variant, theme}) => variants[variant](theme)}
`;

Text.defaultProps = {
    variant: 'body',
};