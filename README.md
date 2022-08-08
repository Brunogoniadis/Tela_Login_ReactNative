# Tela de Login

Sistema de Login com interface gráfica em React-Native, para projetos em Android e Iphone. 
 


## Autores

- [Bruno Goniadis Lima - Engenheiro de Software](https://github.com/Brunogoniadis/)

# Login
![image](https://raw.githubusercontent.com/Brunogoniadis/Tela_Login_ReactNative/main/samplesProject/Home.png)


## Instalação

●  Iniciar um projeto

```bash
  init "Nome do projeto"
```

Clonar TelaLogin no diretorio do seu projeto
```
  $ git clone --bare https://github.com/Brunogoniadis/Tela_Login_ReactNative
  
```    

●  Instalar os seguintes pacotes:

```bash
  styled components
  react-navigation/native@^5.x
  react-native-gesture-handler react-native-reanimated react-
      native-screens react-native-safe-area-context @react-native-community/masked-view
  @react-navigation/stack@^5.x
  @react-navigation/drawer@^5.x
  @react-native-community/async-storage
  firebase@8.8.1
```

●  Instalar sua dataBase

src\services\firebaseConnection.js

●  Toda o restante da aplicação será iniciada em "src\pages\Home\index.js"

![image  width="400"](https://raw.githubusercontent.com/Brunogoniadis/Tela_Login_ReactNative/main/samplesProject/Logado.png)
## Personalização de cores e logos

● Todas as cores dos componentes são personalizáveis seguindo o caminho:

src\pages\SignIn\styles.js

| Componente        |             Linha              |                                                             
| ----------------- | ---------------------------------------------------------------- |
| Background        | 04 | src\pages\SignIn\styles.js |
| Campo Texto       | 24 | src\pages\SignIn\styles.js |
| Campo Senha       | 24 | src\pages\SignIn\styles.js |
| Botão Acessar     | 38 | src\pages\SignIn\styles.js |
| Header CriarConta | 26 | src\routes\auth.routes.js  |


● Diretório da  imagem principal:


src\assets\Logo.png

| Imagem            |             Linha              |                                                             
| ----------------- | ---------------------------------------------------------------- |
| Logo              | 15 | src\pages\SignIn\styles.js |
