import React from 'react';

import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title } from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.components';


const AccountScreen = ({navigation}) => {
   
    return (
            <AccountBackground>
                <AccountCover/>
                <Title>Meals To Go</Title>
                    <AccountContainer>
                        <AuthButton 
                            icon='lock-open-outline'
                            onPress={() => navigation.navigate('Login')}>
                                Login
                        </AuthButton>
                        <Spacer size='large' position='top'>
                            <AuthButton
                                icon='email'
                                onPress={() => navigation.navigate('Register')}>
                                    Register
                            </AuthButton>
                        </Spacer>
                    </AccountContainer>
            </AccountBackground> 
    );
};

export default AccountScreen;