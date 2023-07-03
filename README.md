  *Projeto de Rotas*

 Inicialmente eu usei o CMD para criar a pasta na qual esta inserido o projeto ,usando o
md (que serve para criar uma pasta) e depois entrei na pasta usando o cd (que entra
nesta pasta criada).
Logo após, dei um npm init -y, para criar a pasta package.json;
Também dei um npm i express, no qual irá inserir o express dentro da biblioteca.
 Agora eu abri o VS Code e para facilitar minha vida em relação a disponibilidade da
página, criei a pasta .gitignore que faz com que meu projeto ignore a pasta "node_modules" 

 Criei o documento src, e ali dentro algumas pastas(server.js, routes.js,) e um documento
 de controle chamada prodController (que possuí uma pasta chamada de prodController).

 -A página em andamento:
    Usamos o server.js para importar o express e a página routes; também 
   o app (que é uma constante) irá receber o express e usar o a página routes.
   o app também irá escutar em uma porta que eu excolhi como 3344, e eu posso por uma
   mensagem de comando para inicializar o projeto.
    Usamos agora a página routes para determinar as 5 rotas que o usuário irá encontrar na página.
    A página prodController servirá como auxiliador das 2 páginas acima, que vai mostrar o resultado da 
    pesquisa do usuário.


*OBS*: Eu conseguiria facilmente fazer o que foi pedido apenas com o server.js, porém as rotas nos dão muito
mais mobilidade e organização para a programação.
    
