import React, {useContext} from 'react';
import { Text, Button } from 'react-native';

import { AuthenticationContext } from '../../../services/autentication/authentication.context';
import { SafeArea } from '../../../components/utility/safe.area.component';

export const SettingsScreen = () => {
    const {onLogout} = useContext(AuthenticationContext);
  return(
    <SafeArea>
    <Text>Settings screen</Text>
    <Button title='logout' onPress={onLogout}/>
    </SafeArea>
  )
 }