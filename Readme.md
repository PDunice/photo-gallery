# Para mostrar o device manager do android studio em uma tela menos horrivel.

se tiver com o projeto aberto

- file > close project

na tela inicial do android studio
-  projeto > "..." ( no canto superior direito ) > device manager > start



# para rodar local

ionic serve

# para rodar no celular simulado

https://capacitorjs.com/docs/basics/workflow#sync-your-project 


npm run build

- montar um celular simulado no androind studio

npx cap sync

npx cap open android

colocar o filtro io.ionic.starter no logcat para ver as mensagem que iriam para o console

# para rodar no celular fisico


https://developer.android.com/tools/adb#wireless-adb-android-11

 ## no celular

- ativar modo de desenvolvedor 
- sobre o telefone  >  informacoes de software > numero de compilacao 
- clicar 7 vezes
- opcoes do desenvolvedor > ativar depuracao wifi

## no computador 
- tools > sdk manager

cd C:\Users\stefanini\AppData\Local\Android\Sdk
cd plataform-tools

pode também colocar o path acima nas variaveis de ambiente, ou chamar o adb abaixo com ./adb



dado oq aparecer nas opcoes de depuracao por wifi das opcoes de desenvolvedor
- adb pair [ip]:[porta] ( a porta muda toda vez na modal de conectar)

- adb connect [ip]:[porta] ( a porta é a da tela de depuracao por wifi )






