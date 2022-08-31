# Desafio qualicorp - front

## Decisões tecnicas

### Atomic design
Na parte dos componentes eu decidi separar pelo padrão arquitetural atomic design, gosto bastante e acho que facilita pra saber qual o tamanho dos componentes só de ver a qual pasta ele pertence.

### Libs
A duas libs que eu utilizei foram: axios e vue toastify. Axios para não precisar fazendo requests com fetch api diretamente e o vue toastify para dar feedbacks ao usuário em caso de erro.

### Composition api
Decidi testar a composition api do vuejs e vi que a maneira funciona de fazer ficou muito bem aplicada no vuejs e decidi manter em alguns componentes, os principais estão em composition e alguns outros atoms estão na api antiga de option.