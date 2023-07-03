Aplicativo de Lista de Compras

[x] - Criar repositório para o aplicativo
[x] - Criar as páginas html
    [x] - Página da lista de listas
        [x] - Titulo
        [x] - Add Botão incluir nova lista
        [x] - Add Botão editar lista
        [x] - Add Lista de visualização
         [x] - icone de navegar
        [x] - Add lista do modo edição

            
    [x] - Página de uma lista de compras
        [x] - Criar serviço 
        [x] - Titulo
        [x] - Add Botão incluir nova lista
        [x] - Add Botão editar lista
        [x] - Add Lista de visualização
        [x] - Add lista do modo edição
            
[x] - Implementar comportamentos
      [x] - Página da lista de listas
         [x] - Configurar a ativação e desativação do modo de edição
         [x] - criar servico
            [x] - Implementar a persistencia das alteraçõe
            [x] - Add 
            [x] - update
            [x] - lista
         [x] - Implementar comportamento para a ação de excluir
         [x] - Implementar ação de criar
         [x] - Configurar a navegação para a tela de itens da lista

    [x] - Página de uma lista de compras
        [x] - Configurar a ativação e desativação do modo de edição
        [x] - fazer o editar funcionar
        [x] - fazer o checkbox funcionar
        [x] - Criar serviço
        [x] - Implementar a persistencia das alterações
        [x] - Implementar comportamento par a ação de excluir
        [x] - Implementar a ação de criar
      
        

[x] Tarefas para os comportamentos
   [x] - Importar libs de storage
   [x] - Criar servico para storage


----------


Telas:

 [x] Criar tela para Lista de listas
  -> URL: /shopping-lists
 [x] Criar tela para itens de uma lista
  -> URL: /shopping-lists/:listId
    -> Rotas com parametro

 Componentes:

 [x] Listagem de itens com navegação
    [x] - Botão que navega para uma pagina
 [x] Listagem de itens que podem ser concluídos
    [x] - Check de conclusão
 [x] Listagem de itens que podem ser editados e excluidos
    [x] - Lista com inputs
    [x] - Botões de exclusão
 [x] Botão flutuante de criação
 [x] Botão flutuante de edição

 ------------------------

 informações para executar o projetp:

- Utilizar node versão 16.14.0 ou acima da v18:

- Caso voce ja tenha node instalado
Executar: node -v
Caso a versão seja diferente de 16.14.0 ou abaixo da v18, instalar a versão 16.14.0 ou v18.15.0

- Utilizar o CLI com Ionic v7:

- Caso voce ja tenha ionic instalado:
Executar: ionic -v
Caso a versão seja menor que 7, desinstalar a versão instalada e executar:
npm install -g @ionic/cli

- Caso voce nao tenha ionic instalado:
Executar: npm install -g @ionic/cli

- Baixar as dependencias:

- No root do repositorio, execute:
cd ./AppListaDeCompras
npm install
ionic serve