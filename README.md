projeto loja-virtual:

informações:

- tenha o Docker instalado 

- No seu terminal, cerifique-se que ele esteja com o path relativo a raiz do projeto `/caique-ramos`

- Peço que rode o "docker compose -f "web-store/docker-compose.yaml" up -d --build" no seu terminal bash, isso fará com que o banco de dados possua o ambiente ideal para funcionar corretamente.


1 passo - Fazer o backf funcionar

cd web-store/backEnd
yarn install
yarn run db:reset
yarn run clear
yarn run dev


2 passo - Fazer o front funcionar no endereço 'http://localhost:3000'

Depois siga os seguinte comando em outro terminal com o path relatiovo em `/caique-ramos`:

cd web-store/frontEnd
yarn
yarn run clear
yarn run dev# loja-virtual
