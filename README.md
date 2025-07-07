# BMAD-Make

🚀 **CLI Tool para configuração rápida de projetos com BMAD-Method**

BMAD-Make é uma ferramenta de linha de comando que facilita a instalação e configuração do BMAD-Method em seus projetos, oferecendo diferentes tipos de instalação conforme suas necessidades.

## 📦 Instalação

### Via NPX

Execute diretamente sem necessidade de instalação:

```bash
npx github:akaytatsu/bmad-make
```

## 🎯 Tipos de Instalação Disponíveis

### 🏗️ BMAD Brownfield - Para Projetos Existentes

**Ideal para:** Projetos já em andamento que precisam implementar o BMAD-Method

**O que inclui:**
- 📖 Guia completo para projetos existentes
- 🔧 Makefile com automação completa
- 📋 Documentação detalhada do fluxo de trabalho
- 🤖 Configuração para todos os agentes BMAD
- ⚙️ Scripts de configuração automatizada

**Arquivos instalados:**
- `guia-bmad-method-projetos-existentes.md` - Guia completo passo a passo
- `Makefile.brownfield` - Automação de comandos
- Estrutura de documentação

## 🚀 Como Usar

### 1. Executar a Instalação

```bash
# No diretório do seu projeto
npx github:akaytatsu/bmad-make
```

### 2. Escolher o Tipo de Instalação

O CLI apresentará uma lista de opções:
- **BMAD Brownfield** - Para projetos existentes

### 3. Confirmar e Instalar

Após selecionar, confirme a instalação e os arquivos serão copiados para seu diretório atual.

## 📋 Pós-Instalação

### Para BMAD Brownfield

Após a instalação, siga estes passos:

1. **Leia o guia completo:**
   ```bash
   # Abra o arquivo no seu editor
   code guia-bmad-method-projetos-existentes.md
   ```

2. **Configure o ambiente:**
   ```bash
   # Renomeie o Makefile
   mv Makefile.brownfield Makefile

   # Execute a configuração completa
   make full-setup
   ```

3. **Inicie o fluxo de trabalho:**
   ```bash
   # Para ver todos os comandos disponíveis
   make help

   # Para executar o fluxo completo
   make brownfield-flow
   ```

## 🔧 Pré-requisitos

### Requisitos Básicos
- **Node.js** v16.0.0 ou superior
- **npm** ou **yarn**

### Para BMAD Brownfield
- **Node.js** v20+ (recomendado)
- **Gemini CLI** (será instalado automaticamente)
- **Conta Google** para autenticação OAuth
- **Projeto existente** com estrutura definida

## 📖 Documentação Detalhada

### BMAD Brownfield

O tipo **BMAD Brownfield** inclui documentação completa com:

#### 🤖 Agentes Disponíveis
- **@analyst** - Analista de Projeto
- **@pm** - Product Manager
- **@architect** - Arquiteto de Sistema
- **@dev** - Desenvolvedor
- **@sm** - Story Manager
- **@po** - Product Owner
- **@qa** - Quality Assurance

#### 🔄 Fluxo de Trabalho
1. **Análise e Documentação** - Documentar estado atual
2. **Planejamento** - Criar PRD e arquitetura
3. **Validação** - Executar checklists de qualidade
4. **Implementação** - Criar épicos e histórias
5. **Desenvolvimento** - Implementar funcionalidades

#### 📊 Comandos Principais
```bash
# Configuração inicial
make install          # Instalar dependências
make full-setup       # Configuração completa

# Fluxo de trabalho
make brownfield-flow  # Fluxo completo automatizado
make analyze          # Analisar projeto atual
make plan-prd         # Criar PRD
make plan-arch        # Criar arquitetura
make validate         # Validar planejamento

# Implementação
make create-epic      # Criar épico
make create-stories   # Criar histórias
make implement-story  # Implementar história

# Utilitários
make status           # Status do ambiente
make help             # Ajuda completa
```

## 🛠️ Desenvolvimento

### Estrutura do Projeto

```
bmad-make/
├── bin/
│   └── bmad-make.js           # Script principal CLI
├── bmad-brownfield/           # Arquivos para projetos existentes
│   ├── guia-bmad-method-projetos-existentes.md
│   └── Makefile.brownfield
├── package.json
└── README.md
```

### Contribuindo

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 🔍 Troubleshooting

### Problemas Comuns

#### "Command not found: npx"
```bash
# Atualize o npm
npm install -g npm@latest

# Ou use npm diretamente
npm exec github:akaytatsu/bmad-make
```

#### "Permission denied"
```bash
# Se houver problemas de permissão, tente:
npm cache clean --force

# Ou execute com diferentes permissões se necessário
sudo npx github:akaytatsu/bmad-make
```

#### "Module not found"
```bash
# Limpe o cache do npm
npm cache clean --force

# Reinstale as dependências
npm install
```

### Para BMAD Brownfield

#### Gemini CLI não funciona
```bash
# Verificar instalação
gemini --version

# Reconfigurar autenticação
gemini -p "/auth"

# Testar conexão
make test-connection
```

#### Comandos não reconhecidos
```bash
# Verificar se o Makefile foi renomeado
ls -la Makefile*

# Renomear se necessário
mv Makefile.brownfield Makefile

# Verificar sintaxe
make help
```

## 📚 Recursos Adicionais

### Links Úteis
- [Repositório GitHub](https://github.com/akaytatsu/bmad-make)
- [Issues e Suporte](https://github.com/akaytatsu/bmad-make/issues)
- [Documentação Gemini CLI](https://github.com/google/gemini-cli)

### Exemplos de Uso

#### Projeto React Existente
```bash
cd meu-projeto-react
npx github:akaytatsu/bmad-make
# Escolher: BMAD Brownfield
mv Makefile.brownfield Makefile
make full-setup
make brownfield-flow
```

#### Projeto Node.js Existente
```bash
cd minha-api-node
npx github:akaytatsu/bmad-make
# Escolher: BMAD Brownfield
mv Makefile.brownfield Makefile
make analyze
make plan-prd
```

## 📄 Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👥 Autores

- **BMAD Team** - *Desenvolvimento inicial*

## 🤝 Suporte

Se você encontrar problemas ou tiver sugestões:

1. Verifique a seção [Troubleshooting](#-troubleshooting)
2. Consulte as [Issues existentes](https://github.com/akaytatsu/bmad-make/issues)
3. Abra uma [nova Issue](https://github.com/akaytatsu/bmad-make/issues/new)

---

**⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!**

```bash
# Instalação rápida
npx github:akaytatsu/bmad-make