import React from 'react';

import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title, AnimationWrapperView } from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.components';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';


const AccountScreen = ({navigation}) => {
   
    return (
            <AccountBackground>
                <AccountCover/>
                <AnimationWrapperView>
                    <LottieView
                    key="animation"
                    autoPlay
                    loop
                    resizeMode="cover" 
                    style={{width: '100%', height: 400}}
                    source={require("../../../../assets/watermelon.json")} />
                </AnimationWrapperView>
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