<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

**Lista de Tarefas** é uma aplicação web interativa para gerenciamento de tarefas pessoais, permitindo que o usuário adicione, marque como concluídas e exclua tarefas de forma intuitiva e eficiente.

Este projeto foi desenvolvido com foco no reforço de conceitos fundamentais de _JavaScript_, incluindo manipulação do **DOM**, operações com **arrays**, **estruturas de repetição** e **gerenciamento de eventos**, aplicando boas práticas de desenvolvimento e organização de código.

## Demonstração

<p align="center">
  <img src="./public/demo.png" alt="Demonstração do Projeto" />
</p>

> Imagem da aplicação em funcionamento.

### Destaques

- Interface minimalista e intuitiva.
- Manipulação dinâmica do DOM.
- Validação de entradas do usuário.
- Feedback visual para estados das tarefas.
- Código modular e bem organizado.

## Tecnologias

Este projeto foi construído com as seguintes tecnologias:

- **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** - Linguagem de programação.
- **[CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)** - Build tool e dev server de última geração.
- **[HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)** - Marcações web.

## Funcionalidades

### Gerenciamento de Tarefas

**Adicionar Tarefas**

- Formulário intuitivo para criação de novas tarefas.
- Submissão via botão ou tecla Enter.
- Validação automática de entrada.

**Marcar como Concluída**

- Clique simples para alternar estado da tarefa.
- Feedback visual com texto riscado e opacidade reduzida.
- Controle de estado com classes CSS dinâmicas.

**Excluir Tarefas**

- Botão "×" individual em cada tarefa.
- Remoção do array e re-renderização automática.
- Interface sempre sincronizada com os dados.

### Validação & Feedback

**Validação de Entrada**

- Bloqueio de submissão de tarefas vazias.
- Mensagem de erro visual para o usuário.
- Prevenção de dados inválidos.

**Mensagem de Lista Vazia**

- Exibição automática quando não há tarefas.
- Feedback claro sobre o estado da aplicação.
- Melhora a experiência do usuário.

## Aprendizados

Durante o desenvolvimento deste projeto, foram aprimorados os seguintes conceitos:

### Manipulação de Arrays

- **`splice()`**: Remoção de itens específicos do array de tarefas.
- **`push()`**: Adição eficiente de novos elementos.
- Operações imutáveis e controle de estado.

### Renderização Dinâmica

- Recriação da lista no DOM a cada alteração (adição, exclusão ou marcação).
- Sincronização constante entre interface e dados.
- Performance otimizada através de renderizações seletivas.

### Controle de Estado Visual

- **`classList.toggle()`**: Alternância do estado "completado".
- Gerenciamento de classes CSS de forma programática.
- Feedback visual instantâneo para ações do usuário.

### Validação & UX

- Implementação de mensagens de erro contextuais.
- Tratamento de estados vazios da aplicação.
- Prevenção de comportamentos indesejados.

### Organização de Código

Separação de responsabilidades com funções específicas:

- `resetInput()`: Limpeza do campo de entrada.
- `clearDom()`: Remoção de elementos do DOM.
- `showEmptyListMessage()`: Exibição de mensagens de estado.
- `render()`: Renderização controlada da interface.

### Boas Práticas com Eventos

- Uso do evento `submit` no formulário.
- Suporte a múltiplas formas de interação (Enter e clique).
- Prevenção de comportamento padrão quando necessário.

## Design

O design adota uma abordagem minimalista, fortemente inspirado no design system do **GNOME**, priorizando:

- Simplicidade visual
- Clareza na hierarquia de informações
- Feedback visual consistente
- Interface limpa e funcional

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
