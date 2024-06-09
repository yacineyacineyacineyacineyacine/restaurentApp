import React, { useState, useContext } from 'react';

import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput, Title, ErrorContainer } from '../components/account.styles';
import { AuthenticationContext } from '../../../services/autentication/authentication.context';
import { Spacer } from '../../../components/spacer/spacer.components';
import { Text } from '../../../components/typography/text.component';


const RegisterScreen = ({navigation}) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const { onRegister, error } = useContext(AuthenticationContext);
   
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
                    <Spacer size='large' position='top'>
                        <AuthInput
                            label='Repeat password'
                            value={repeatedPassword}
                            textContentType='password'
                            secureTextEntry
                            autoCapitalize='none'
                            onChangeText={(p) => setRepeatedPassword(p)}/>
                    </Spacer>
                   {error && <Spacer position='top' size='large'>
                        <Text variant='error'>{error}</Text>
                    </Spacer>}
                    <Spacer size='large' position='top'>
                        <AuthButton 
                            icon='email'
                            onPress={() => onRegister(email, password, repeatedPassword)}>
                                Register
                        </AuthButton>
                    </Spacer>
                </AccountContainer>
                <ErrorContainer >
                    <AuthButton onPress={() => navigation.goBack()}>Back</AuthButton>
                </ErrorContainer>
               
            </AccountBackground> 
    );
};

export default RegisterScreen;