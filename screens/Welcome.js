import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { 
  WelcomeContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea, 
  StyledButton,
  ButtonText,
  WelcomeImage,
  Avatar
 } from '../components/styles'; 
const Welcome = ({navigation}) =>{
 return(
    <>
     <StatusBar style='light'/>
      <InnerContainer>
        <WelcomeImage  resizeMode='cover' source={require('../img/img2.jpg')}/>
          <WelcomeContainer>
            <PageTitle welcome={true}>Welcome Buddy!</PageTitle>
            <SubTitle welcome={true}>Marge Simpson</SubTitle>
            <SubTitle welcome={true}>YourEmailHere@gmail.com</SubTitle>
            <StyledFormArea>
              <Avatar source={require('../img/pps.jpg')}/>
                <StyledButton onPress={()=>{navigation.navigate('Login')}}>
                  <ButtonText>Logout</ButtonText>
                </StyledButton>
            </StyledFormArea>
          </WelcomeContainer>
        </InnerContainer>
    </>
 );  
}
export default Welcome;
