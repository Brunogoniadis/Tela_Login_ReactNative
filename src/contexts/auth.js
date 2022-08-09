import React, {useState,createContext} from 'react';
import { set } from 'react-native-reanimated';
import firebase from '../services/firebaseConnection';
export const AuthContext= createContext({});
import AsyncStorage from '@react-native-community/async-storage';


function AuthProvider ({children}){
    const [ user,setUser] = useState(null);

    //cadastrar o usuário
    async function signUp(email,password,nome){
        await firebase.auth().createUserWithEmailAndPassword(email,password).
        then(async(value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                saldo:0,
                nome:nome
            })
            .then(()=>{
                let data={
                    uid: uid,
                    nome: nome,
                    email: value.user.email
                };
                setUser(data);
            })
        })
    }
    async funcion storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringfy(data));
    }
    
    
    return(
        <AuthContext.Provider value={{ signed:!! user, user, signUp}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

