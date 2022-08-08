import React, {useState, useContext}from 'react';
import SignUp from '../SignUp';
import {useNavigation} from '@react-navigation/native'
import {AuthContext} from '../../contexts/auth';
import {Background, Container, Logo, AreaInput, Input , SubmitButton, SubmitText, Link, LinkText } from './styles';

export default function SignIn() {
  
 const navigation = useNavigation(); 

 const [email, setEmail] = useState ('');
 const [password, setPassword] = useState (''); 
 
 function handleLogin(){
 } 

  return (
   <Background>
    <Container>
      <Logo source={require('../../assets/Logo.png')}/>

      <AreaInput>
        <Input
          placeholder="Email"
          autoCorrect={false}
          autoCaptaliza="none"
          value={email}
          onChangeText={(text)=> setEmail(text)}
        />
      </AreaInput>

      <AreaInput>
        <Input
        placeholder="Senha"
        autoCorrect={false}
        autoCaptaliza="none"
        value={password}
        onChangeText={(text)=> setPassword(text)}
        />
      </AreaInput>

    <SubmitButton onPress={handleLogin}>
      <SubmitText>Acessar</SubmitText>
    </SubmitButton>

    <Link onPress={()=> navigation.navigate('SignUp')}>
      <LinkText>Criar uma conta!</LinkText>
    </Link>


    </Container>
   </Background>
  );
}