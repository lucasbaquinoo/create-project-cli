# Create Project CLI
Curta descrição do projeto;
Command-line interface (CLI) para criação de projetos com diferentes configurações

🚧Em desenvolvimento! Por enquanto, só tem a base de código🚧
## Rode na sua máquina

Clone o repositório

```bash
  git clone https://github.com/lucasbaquinoo/create-project-cli.git
```

Entre na pasta do projeto

```bash
  cd create-project-cli
```

Instale as dependências

```bash
  npm install
```

Link o repositório globalmente na sua máquina

```bash
  npm link
```

  
## Como usar + exemplos

Você pode digitar `create-project` e seguir com o que é pedido ou adicionar os seguintes parâmetros:

- `[template]`: Os únicos templates disponíveis são `javascript` e `typescript`.
- `--git`: Esse parâmetro irá iniciar o repositório.
- `--install`: Quando passado, instala todas as dependências do template selecionado.
- `--yes`: Segue com os valores padroês de parâmetros. 
Valores por padrão: `git: false` `template: javascript` `install: false`
