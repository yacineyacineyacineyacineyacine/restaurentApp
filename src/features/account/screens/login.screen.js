import React, { useState, useContext } from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput, Title, ErrorContainer } from '../components/account.styles';
import { AuthenticationContext } from '../../../services/autentication/authentication.context';
import { Spacer } from '../../../components/spacer/spacer.components';
import { Text } from '../../../components/typography/text.component';


const LoginScreen = ({navigation}) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { onLogin, isLoading, error } = useContext(AuthenticationContext)
   
    return (
            <AccountBackground>
                <AccountCover/>
                <Title>Meals To Go</Title>
                <AccountContainer>
                    <AuthInput 
                        label='E-mail'
                        value={email}
                        textContentType='email-address'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={(u) => setEmail(u)}/>
                    <Spacer size='large' position='top'>
                        <AuthInput
                            label='Password'
                            value={password}
                            textContentType='password'
                            secureTextEntry
                            autoCapitalize='none'
                            onChangeText={(p) => setPassword(p)}/>
                    </Spacer>
                   {error && <ErrorContainer >
                        <Text variant='error'>{error}</Text>
                    </ErrorContainer>}
                    <Spacer size='large' position='top'>
                        {!isLoading ?(
                            <AuthButton 
                            icon='lock-open-outline'
                            onPress={() => onLogin(email, password)}>
                                Login
                        </AuthButton>
                        ) :(
                            <ActivityIndicator animating={isLoading} color={MD2Colors.blue300} />
                        )}
                    </Spacer>
                </AccountContainer>
                <Spacer position='top' size='large'>
                    <AuthButton onPress={() => navigation.goBack()}>Back</AuthButton>
                </Spacer>
               
            </AccountBackground> 
    );
};

export default LoginScreen;