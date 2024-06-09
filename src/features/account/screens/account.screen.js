import React from 'react';

import { AccountBackground, AccountCover, AccountContainer, AuthButton } from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.components';


const AccountScreen = ({navigation}) => {
   
    return (
            <AccountBackground>
                <AccountCover/>
                    <AccountContainer>
                        <AuthButton 
                            onPress={() => navigation.navigate('Login')}>
                                Login
                        </AuthButton>
                        <Spacer size='large' position='top'>
                            <AuthButton
                                onPress={() => navigation.navigate('Register')}>
                                    Register
                            </AuthButton>
                        </Spacer>
                    </AccountContainer>
            </AccountBackground> 
    );
};

export default AccountScreen;