import React, {useContext} from 'react';
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';

import { AuthenticationContext } from '../../../services/autentication/authentication.context';
import { SafeArea } from '../../../components/utility/safe.area.component';
import { Spacer } from '../../../components/spacer/spacer.components';
import { Text } from '../../../components/typography/text.component';

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]}
`;
const  AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({navigation}) => {
    const {onLogout, user} = useContext(AuthenticationContext);
  return(
    <SafeArea>
       <Spacer position='top' size='large'>
        <AvatarContainer>
            <Avatar.Icon size={180} icon='human' backgroundColor='#2182bd'/>
            <Spacer position='top' size='small'>
               <Text variant='label'>{user.email}</Text>
            </Spacer>    
        </AvatarContainer>
        </Spacer>
        <List.Section>
        <SettingsItem
              style={{padding: 16}}
              title='Favourites'
              description='View your favourites'
              left={(props) => <List.Icon {...props} color='black' icon='heart'/>}
              onPress={() => navigation.navigate('Favourites')}
            />
            <SettingsItem
              style={{padding: 16}}
              title='logout'
              left={(props) => <List.Icon {...props} color='black' icon='logout'/>}
              onPress={onLogout}
            />
        </List.Section>
    
    </SafeArea>
  )
 }