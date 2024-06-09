import styled from 'styled-components/native';
import { colors } from '../../../infrastructure/theme/colors';
import { Button } from 'react-native-paper';

export const AccountBackground = styled.ImageBackground.attrs({
   source: require('../../../../assets/images/home_bg.jpg'),
})`
   flex: 1;
   align-items: center;
   justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;  

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(prop) => prop.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary,
    icon:'lock-open-outline',
    mode:'elevated',
    buttonColor: colors.brand.primary,
    textColor: colors.text.inverse
    
})`
 border-radius: 3px;
 padding: ${(props) => props.theme.space[2]}
`;