# Guia Completo: BMAD-Method para Projetos Greenfield

Este guia fornece um passo a passo detalhado para usar o BMAD-Method em projetos completamente novos (greenfield), incluindo todos os agentes disponíveis, comandos e fluxo de trabalho recomendado.

## 📋 Índice

1. [Agentes Disponíveis](#agentes-disponíveis)
2. [Pré-requisitos e Instalação](#pré-requisitos-e-instalação)
3. [Configuração Inicial](#configuração-inicial)
4. [Fluxo de Trabalho Passo a Passo](#fluxo-de-trabalho-passo-a-passo)
5. [Comandos por Cenário](#comandos-por-cenário)
6. [Estrutura de Arquivos](#estrutura-de-arquivos)
7. [Troubleshooting](#troubleshooting)

## 🤖 Agentes Disponíveis

### **@analyst** - Analista de Negócios
**Descrição:** Especialista em brainstorming, pesquisa de mercado e análise de oportunidades.

**Quando usar:**
- Explorar ideias iniciais e conceitos
- Realizar pesquisa de mercado e análise competitiva
- Identificar oportunidades e nichos de mercado
- Validar conceitos de produto

**Comandos principais:**
- `@analyst *brainstorm` - Sessão de brainstorming para novas ideias
- `@analyst *market-research` - Pesquisa de mercado detalhada

---

### **@pm** - Product Manager
**Descrição:** Gerente de produto responsável por definir requisitos, funcionalidades e roadmap.

**Quando usar:**
- Criar PRDs (Product Requirements Documents)
- Definir funcionalidades e escopo do produto
- Planejar roadmap de desenvolvimento
- Gerenciar prioridades e MVP

**Comandos principais:**
- `@pm *create-doc prd` - Cria PRD para projetos novos
- `@pm *greenfield-create-epic` - Cria épico para projeto greenfield

---

### **@architect** - Arquiteto de Sistema
**Descrição:** Especialista em arquitetura de software, tecnologias e design técnico.

**Quando usar:**
- Projetar arquitetura de sistema do zero
- Escolher stack tecnológico
- Definir padrões e estruturas
- Planejar escalabilidade

**Comandos principais:**
- `@architect *create-doc architecture` - Arquitetura para greenfield
- `@architect *create-project-structure` - Estrutura inicial do projeto

---

### **@dev** - Desenvolvedor
**Descrição:** Desenvolvedor especializado em implementação de código e inicialização de projetos.

**Quando usar:**
- Implementar funcionalidades específicas
- Inicializar estrutura do projeto
- Configurar ambiente de desenvolvimento
- Aplicar padrões de código

**Comandos principais:**
- `@dev implement story [número]` - Implementa história específica
- `@dev *init-project` - Inicializa estrutura do projeto

---

### **@sm** - Story Manager
**Descrição:** Gerenciador de histórias responsável por criar e gerenciar user stories detalhadas.

**Quando usar:**
- Criar histórias de usuário detalhadas
- Quebrar épicos em histórias menores
- Definir critérios de aceitação
- Gerenciar backlog de desenvolvimento

**Comandos principais:**
- `@sm create-next-story` - Cria próxima história na sequência

---

### **@po** - Product Owner
**Descrição:** Dono do produto responsável por validação, qualidade e alinhamento estratégico.

**Quando usar:**
- Validar planejamento e documentação
- Executar checklists de qualidade
- Aprovar mudanças de escopo
- Garantir alinhamento com objetivos

**Comandos principais:**
- `@po *execute-checklist po-master-checklist` - Executa checklist mestre

---

### **@qa** - Quality Assurance
**Descrição:** Especialista em qualidade, testes e validação de funcionalidades.

**Quando usar:**
- Definir estratégias de teste
- Criar planos de teste
- Validar implementações
- Garantir qualidade do código

**Comandos principais:**
- `@qa create-test-plan` - Cria plano de testes

---

## 🔧 Pré-requisitos e Instalação

### Requisitos
- Node.js v20+
- Ideia ou conceito para novo projeto
- Gemini CLI instalado e configurado
- Conta Google para autenticação OAuth

### Instalação do Gemini CLI

**Passo 1: Instalar Gemini CLI**
```bash
# Instalar globalmente
npm install -g @google/gemini-cli

# OU executar diretamente sem instalação global
npx @google/gemini-cli
```

**Passo 2: Configurar Autenticação OAuth**
```bash
# Configurar autenticação OAuth (sem necessidade de API Key)
gemini -p "/auth"

# Uma janela do navegador será aberta para autenticação
# Siga as instruções na tela para fazer login com sua conta Google
```

**Passo 3: Verificar instalação**
```bash
gemini --version
```

### Instalação do BMAD-Method

**Passo 4: Instalar BMAD-Method**
```bash
npx bmad-method install
```

**Como executar:**
1. Abra o terminal na pasta onde quer criar o projeto
2. Execute o comando acima
3. Quando perguntado sobre o IDE, selecione **"Gemini CLI"**
4. Escolha **"Complete installation"** para projetos novos
5. Confirme que é um projeto greenfield (novo)

**O que acontece:**
- Detecta que é um projeto novo
- Cria estrutura de agentes no projeto
- Configura integração com Gemini CLI
- Prepara ambiente para desenvolvimento do zero

---

## ⚙️ Configuração Inicial

### Configuração para Projetos Novos (V4 Recomendado)

**Arquivo: `core-config.yml`**
```yaml
prdVersion: v4
prdSharded: true
prdShardedLocation: docs/prd
architectureVersion: v4
architectureSharded: true
architectureShardedLocation: docs/architecture
devStoryLocation: .ai/stories
devLoadAlwaysFiles:
  - docs/architecture/tech-stack.md
  - docs/coding-guidelines.md
```

### Configuração Simples (V3)

**Arquivo: `core-config.yml`**
```yaml
prdVersion: v3
prdSharded: false
architectureVersion: v3
architectureSharded: false
devStoryLocation: docs/stories
```

**Como configurar:**
1. Crie o arquivo `core-config.yml` na raiz do projeto
2. Escolha a configuração V4 (recomendada) ou V3 (simples)
3. Ajuste os caminhos conforme sua preferência

---

## 🚀 Fluxo de Trabalho Passo a Passo

### **Fase 1: Ideação e Brainstorming (Recomendada)**

#### Passo 1.1: Sessão de Brainstorming
```bash
@analyst
*brainstorm
```

**Como executar:**
1. Abra o Gemini CLI digitando `gemini` no terminal
2. No prompt do Gemini CLI, digite: `@analyst`
3. Pressione Enter
4. Digite: `*brainstorm`
5. Pressione Enter

**Sintaxe alternativa no Gemini CLI:**
```bash
# Executar diretamente com prompt
gemini -p "@analyst *brainstorm"

# OU usar modo não-interativo
echo "@analyst *brainstorm" | gemini
```

**O que acontece:**
- Explora ideias e conceitos iniciais
- Identifica oportunidades de mercado
- Analisa viabilidade técnica e comercial
- Gera insights sobre público-alvo
- Cria base para desenvolvimento do PRD

**Tempo estimado:** 15-20 minutos

#### Passo 1.2: Pesquisa de Mercado (Opcional)
```bash
@analyst
*market-research
```

**Como executar:**
1. No Gemini CLI, digite: `@analyst`
2. Digite: `*market-research`
3. Forneça informações sobre:
   - Segmento de mercado alvo
   - Concorrentes conhecidos
   - Diferencial competitivo desejado

**O que acontece:**
- Analisa concorrência existente
- Identifica gaps no mercado
- Avalia tamanho do mercado
- Sugere estratégias de posicionamento
- Gera `docs/market-analysis.md`

**Tempo estimado:** 20-25 minutos

---

### **Fase 2: Planejamento de Produto**

#### Passo 2.1: Criar PRD para Greenfield
```bash
@pm
*create-doc prd
```

**Como executar:**
1. No Gemini CLI, digite: `@pm`
2. Digite: `*create-doc prd`
3. Responda às perguntas sobre:
   - Objetivo do produto
   - Público-alvo
   - Funcionalidades principais
   - Critérios de sucesso

**Sintaxe alternativa:**
```bash
# Executar com prompt direto
gemini -p "@pm *create-doc prd"
```

**O que acontece:**
- Cria PRD específico para projeto novo
- Define escopo e funcionalidades
- Estabelece objetivos e métricas
- Identifica usuários e personas
- Gera `docs/prd.md` ou `docs/prd/` (se sharded)

**Tempo estimado:** 20-30 minutos

#### Passo 2.2: Criar Arquitetura para Greenfield
```bash
@architect
*create-doc architecture
```

**Como executar:**
1. No Gemini CLI, digite: `@architect`
2. Digite: `*create-doc architecture`
3. Forneça informações sobre:
   - Tecnologias preferidas
   - Requisitos de escalabilidade
   - Restrições técnicas
   - Integrações necessárias

**Sintaxe alternativa:**
```bash
# Executar com prompt direto
gemini -p "@architect *create-doc architecture"
```

**O que acontece:**
- Projeta arquitetura do zero
- Escolhe stack tecnológico
- Define padrões de desenvolvimento
- Planeja estrutura de pastas
- Cria diagramas de arquitetura
- Gera `docs/architecture.md`

**Tempo estimado:** 25-35 minutos

---

### **Fase 3: Validação e Aprovação**

#### Passo 3.1: Executar Checklist de Validação
```bash
@po
*execute-checklist po-master-checklist
```

**Como executar:**
1. No Gemini CLI, digite: `@po`
2. Digite: `*execute-checklist po-master-checklist`
3. Revise cada item do checklist apresentado
4. Confirme ou solicite ajustes

**Sintaxe alternativa:**
```bash
# Executar com prompt direto
gemini -p "@po *execute-checklist po-master-checklist"
```

**O que acontece:**
- Verifica completude do planejamento
- Valida alinhamento entre PRD e arquitetura
- Confirma viabilidade técnica
- Aprova ou rejeita o planejamento
- Identifica riscos e dependências
- Gera relatório de validação

**Tempo estimado:** 10-15 minutos

---

### **Fase 4: Criação de Épicos e Histórias**

#### Passo 4.1: Criar Épico para Greenfield
```bash
@pm
*greenfield-create-epic
```

**Como executar:**
1. Digite: `@pm`
2. Digite: `*greenfield-create-epic`
3. Defina:
   - Nome do épico
   - Objetivo principal
   - Critérios de sucesso
   - Funcionalidades incluídas

**O que acontece:**
- Cria épico abrangente para MVP
- Define sequência de desenvolvimento
- Estabelece marcos de entrega
- Inclui critérios de aceitação

#### Passo 4.2: Criar Histórias Detalhadas
```bash
@sm
create-next-story
```

**Como executar:**
1. Digite: `@sm`
2. Digite: `create-next-story`
3. Repita para cada história necessária

**O que acontece:**
- Cria histórias de usuário detalhadas
- Define critérios de aceitação
- Estabelece dependências entre histórias
- Prioriza desenvolvimento

---

### **Fase 5: Configuração do Projeto**

#### Passo 5.1: Configurar Estrutura do Projeto
```bash
@architect
*create-project-structure
```

**Como executar:**
1. Digite: `@architect`
2. Digite: `*create-project-structure`
3. Confirme tecnologias e estrutura

**O que acontece:**
- Cria estrutura de pastas
- Define organização de arquivos
- Estabelece convenções de nomenclatura
- Prepara ambiente de desenvolvimento

#### Passo 5.2: Inicializar Projeto
```bash
@dev
*init-project
```

**Como executar:**
1. Digite: `@dev`
2. Digite: `*init-project`
3. Confirme configurações

**O que acontece:**
- Inicializa repositório Git
- Cria arquivos de configuração
- Instala dependências básicas
- Configura ferramentas de desenvolvimento

---

### **Fase 6: Implementação**

#### Passo 6.1: Implementar História Específica
```bash
@dev implement story [número]
```

**Exemplo:**
```bash
@dev implement story 1.1
```

**Como executar:**
1. Digite: `@dev`
2. Digite: `implement story 1.1` (substitua pelo número da história)
3. Forneça contexto adicional se necessário

**O que acontece:**
- Implementa código para a história específica
- Segue padrões definidos na arquitetura
- Inclui testes quando necessário
- Documenta código em português

---

## 📁 Comandos por Cenário

### **Cenário 1: Projeto Completamente Novo**

**Sequência de comandos:**
```bash
# 1. Brainstorming inicial
@analyst
*brainstorm

# 2. Pesquisa de mercado (opcional)
@analyst
*market-research

# 3. Criar PRD
@pm
*create-doc prd

# 4. Projetar arquitetura
@architect
*create-doc architecture

# 5. Validar planejamento
@po
*execute-checklist po-master-checklist

# 6. Criar épico
@pm
*greenfield-create-epic

# 7. Configurar estrutura
@architect
*create-project-structure

# 8. Inicializar projeto
@dev
*init-project

# 9. Criar histórias
@sm
create-next-story

# 10. Implementar
@dev implement story 1.1
```

### **Cenário 2: Ideia Bem Definida**

**Sequência de comandos:**
```bash
# 1. Criar PRD diretamente
@pm
*create-doc prd

# 2. Projetar arquitetura
@architect
*create-doc architecture

# 3. Validar
@po
*execute-checklist po-master-checklist

# 4. Criar épico e histórias
@pm
*greenfield-create-epic

@sm
create-next-story

# 5. Configurar e implementar
@architect
*create-project-structure

@dev
*init-project

@dev implement story 1.1
```

### **Cenário 3: MVP Rápido**

**Sequência de comandos:**
```bash
# 1. Planejamento mínimo
@pm
*create-doc prd

# 2. Arquitetura simples
@architect
*create-doc architecture

# 3. Épico focado em MVP
@pm
*greenfield-create-epic

# 4. Implementação direta
@dev
*init-project

@dev implement story 1.1
```

### **Cenário 4: Exploração de Conceito**

**Sequência de comandos:**
```bash
# 1. Brainstorming extensivo
@analyst
*brainstorm

# 2. Pesquisa de mercado
@analyst
*market-research

# 3. Validação de conceito
@pm
*create-doc prd

# 4. Prototipagem rápida
@architect
*create-doc architecture

@dev
*init-project
```

---

## 📂 Estrutura de Arquivos Gerada

Após seguir o fluxo completo, sua estrutura de projeto terá:

```
projeto-novo/
├── docs/
│   ├── prd.md                     # Product Requirements Document
│   ├── architecture.md            # Documento de Arquitetura
│   ├── market-analysis.md         # Análise de mercado (opcional)
│   └── stories/                   # Histórias de usuário
│       ├── epic-1/
│       │   ├── 1.1.story.md
│       │   ├── 1.2.story.md
│       │   └── ...
├── .ai/                           # Configurações BMAD (V4)
│   ├── agents/                    # Agentes configurados
│   └── templates/                 # Templates personalizados
├── src/                           # Código fonte
│   ├── components/                # Componentes
│   ├── services/                  # Serviços
│   ├── utils/                     # Utilitários
│   └── main.js                    # Arquivo principal
├── tests/                         # Testes
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .gitignore                     # Arquivos ignorados pelo Git
├── package.json                   # Dependências do projeto
├── README.md                      # Documentação do projeto
├── core-config.yml                # Configuração principal
└── [arquivos específicos da tecnologia]
```

---

## 🔧 Troubleshooting

### **Problema: Não sei por onde começar**
**Solução:**
```bash
# Para ideias vagas
@analyst *brainstorm

# Para conceito mais definido
@pm *create-doc prd

# Para fluxo completo automatizado
make greenfield-flow
```

### **Problema: Agente não responde**
**Solução:**
```bash
# Verificar status da instalação BMAD
npx bmad-method status

# Verificar se Gemini CLI está funcionando
gemini --version

# Testar conexão básica
gemini -p "Hello, test message"

# Reinstalar BMAD se necessário
npx bmad-method install
```

### **Problema: Comandos não reconhecidos**
**Solução:**
1. Verifique se está usando a sintaxe correta: `@agente` seguido de `comando`
2. Confirme que o Gemini CLI está configurado corretamente:
   ```bash
   # Verificar autenticação OAuth
   gemini -p "/auth"

   # Testar comando básico
   gemini -p "test"
   ```
3. Reinstale BMAD com: `npx bmad-method install`
4. Verifique se os arquivos de agente foram criados em `.bmad-core/`

### **Problema: "Command not found: gemini"**
**Solução:**
```bash
# Se instalou globalmente, verificar PATH
npm list -g @google/gemini-cli

# Usar npx como alternativa
npx @google/gemini-cli

# Reinstalar globalmente
npm install -g @google/gemini-cli
```

### **Problema: Erro de autenticação**
**Solução:**
```bash
# Reconfigurar autenticação OAuth
gemini -p "/auth"

# Verificar se a autenticação está funcionando
gemini -p "test de conexão"
```

### **Problema: Documentos não são gerados**
**Solução:**
1. Verifique permissões de escrita na pasta `docs/`
2. Confirme configuração no `core-config.yml`
3. Execute: `@analyst *brainstorm` novamente

### **Problema: Projeto muito complexo**
**Solução:**
1. Comece com MVP mínimo
2. Use configuração V3 para simplicidade
3. Foque em funcionalidades essenciais primeiro

---

## 📝 Dicas Importantes

1. **Sempre comece com brainstorming** - Mesmo com ideia definida, explore possibilidades
2. **Use a validação do PO** - `@po *execute-checklist` evita problemas futuros
3. **Implemente incrementalmente** - Uma história por vez para manter qualidade
4. **Mantenha documentação atualizada** - Re-execute análises após mudanças
5. **Teste em ambiente isolado** - Sempre teste funcionalidades antes de integrar
6. **Use comandos diretos quando necessário** - `gemini -p "comando"` para execução rápida
7. **Configure autenticação OAuth** - Use `/auth` para configurar autenticação
8. **Monitore uso de tokens** - Use `/stats` para acompanhar consumo
9. **Comece simples** - MVP primeiro, funcionalidades avançadas depois
10. **Documente em português** - Mantenha consistência no idioma

## 🎛️ Comandos Úteis do Gemini CLI

### Comandos de Sistema
```bash
/help          # Exibir ajuda
/stats         # Mostrar estatísticas de uso
/about         # Informações da versão
/clear         # Limpar tela (Ctrl+L)
/quit          # Sair do CLI
```

### Comandos de Configuração
```bash
/theme         # Alterar tema visual
/auth          # Configurar autenticação
/editor        # Selecionar editor preferido
```

### Comandos de Contexto
```bash
/memory show   # Mostrar contexto atual
/memory add    # Adicionar ao contexto
/memory refresh # Recarregar contexto
```

### Comandos de Ferramentas
```bash
/tools         # Listar ferramentas disponíveis
/mcp           # Status dos servidores MCP
```

### Injeção de Arquivos
```bash
@arquivo.txt                    # Incluir arquivo específico
@pasta/                        # Incluir conteúdo da pasta
@pasta/ Analise este código    # Incluir pasta com prompt
```

### Execução de Shell
```bash
!ls -la                        # Executar comando shell
!git status                    # Verificar status do git
!npm install                   # Instalar dependências
```

---

## 🎯 Próximos Passos

Após dominar este fluxo básico, explore:
- Expansion packs específicos para sua tecnologia
- Automação de CI/CD com BMAD
- Integração com outras ferramentas de desenvolvimento
- Customização de agentes para necessidades específicas
- Padrões de arquitetura avançados

---

**Versão do documento:** 1.0
**Última atualização:** Janeiro 2025
**Compatível com:** BMAD-Method V4+