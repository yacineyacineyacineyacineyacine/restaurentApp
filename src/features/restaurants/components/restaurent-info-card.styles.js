import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const RestaurentCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  elevation: 5;
`;

export const RestaurentCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurentCardContent = styled(Card.Content)`
  flex-direction: column;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
 `;

export const Rating = styled.View`
  flex-direction: row;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: 'center';
`;

export const Icon = styled.Image`
  width: ${(props) => props.theme.space[3]};
  height: ${(props) => props.theme.space[3]};
`;

export const Adress = styled.Text`
  padding: ${(props) => props.theme.space[0]};
  color: ${(props) =>  props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;