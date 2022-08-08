import React, {useState, useContext}from 'react';
import { AuthContext } from '../../contexts/auth';
import { Plataform, View, Text, TextInput } from 'react-native';
import {Background, Container, AreaInput, Input , SubmitButton, SubmitText } from '../SignIn/styles';

export default function SignUp() {
 const [email, setEmail] = useState ('');
 const [password, setPassword] = useState (''); 
 const [nome, setNome] = useState ('');
 const {signUp} = useContext(AuthContext)

  function handleSignUp(){
    signUp(email, password, nome);
  }


  return (
   <Background>
    <Container>
    
      <AreaInput>
        <Input
          placeholder="Nome"
          autoCorrect={false}
          autoCaptaliza="none"
          value={nome}
          onChangeText={(text)=> setNome(text)}
        />
      </AreaInput>

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

    <SubmitButton onPress={handleSignUp}>
      <SubmitText>Cadastrar</SubmitText>
    </SubmitButton>

    </Container>
   </Background>
  );
}