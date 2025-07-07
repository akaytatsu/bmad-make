# BMAD-Method para Projetos Greenfield - Português Brasileiro

Este Makefile está configurado para usar **português brasileiro (pt-BR)** em todas as interações com os agentes do BMAD-Method e **Gemini 2.5 Flash** por padrão para evitar problemas de quota.

## 🚨 Solução para Erro 429 (Quota Exceeded)

Se você receber o erro "Quota exceeded for quota metric 'Gemini 2.5 Pro Requests'":

### Solução Rápida
```bash
# Use o modelo Flash (padrão do Makefile)
make brainstorm                                # Já usa Flash por padrão
make brainstorm GEMINI_MODEL=gemini-2.5-flash # Força Flash explicitamente

# Para comandos manuais
gemini --model gemini-2.5-flash -p "seu comando aqui"
```

### Configuração Interativa (NOVO!)
```bash
# Escolher modelo através de menu interativo
make set-model

# Ou usar o alias
make change-model
```

### Configuração Manual
```bash
# Ver configuração atual e opções
make quota-help
```

## 🤖 Controle de Modelo Gemini

### Modelos Disponíveis
- **gemini-2.5-flash** (padrão) - Rápido, menos quota, adequado para maioria das tarefas
- **gemini-2.5-pro** - Melhor qualidade, mais quota, para tarefas complexas

### Como Usar

#### **Método 1: Configuração Interativa (RECOMENDADO)**
```bash
# Menu interativo para escolher modelo
make set-model
# Escolha:
# 1) gemini-2.5-flash (rápido, evita quota)
# 2) gemini-2.5-pro (melhor qualidade)
# 3) Cancelar

# Depois use normalmente
make brainstorm
make greenfield-flow
```

#### **Método 2: Temporário por Comando**
```bash
# Usar Flash (padrão - evita quota exceeded)
make brainstorm

# Usar Pro temporariamente (quando quota permitir)
make brainstorm GEMINI_MODEL=gemini-2.5-pro
```

#### **Método 3: Configurar para Sessão**
```bash
# Configurar modelo para toda sessão
export GEMINI_MODEL=gemini-2.5-flash
make greenfield-flow
```

## 🌐 Configuração de Idioma

### Automática
Todos os comandos do Makefile já incluem automaticamente a instrução de idioma:
```bash
"IMPORTANTE: Responda sempre em português do Brasil (pt-BR). Todos os documentos, códigos, comentários e explicações devem estar em português brasileiro. Use terminologia técnica em português quando possível."
```

### Verificar Configuração
```bash
make configure-language
```

## 🚀 Uso Básico

### Instalação Completa
```bash
make install          # Instala Gemini CLI + BMAD-Method
make full-setup       # Configuração completa + testes
```

### Fluxo Completo para Projetos Novos
```bash
make greenfield-flow  # Executa todo o fluxo em português
```

## 💡 Comandos Principais (Todos em Português)

### Ideação e Brainstorming
```bash
make brainstorm       # @analyst *brainstorm (Flash por padrão)
make market-research  # @analyst *market-research (Flash por padrão)

# Usar Pro quando quota permitir
make brainstorm GEMINI_MODEL=gemini-2.5-pro
```

### Planejamento e Documentação
```bash
make plan-prd         # @pm *create-doc prd (Flash por padrão)
make plan-arch        # @architect *create-doc architecture (Flash por padrão)
make validate         # @po *execute-checklist po-master-checklist (Flash por padrão)

# Usar Pro quando quota permitir
make plan-prd GEMINI_MODEL=gemini-2.5-pro
```

### Criação de Épicos e Histórias
```bash
make create-epic      # @pm *greenfield-create-epic
make create-stories   # @sm create-next-story
```

### Implementação
```bash
make implement-story                    # História 1.1 (Flash por padrão)
make implement-story STORY_NUMBER=1.2  # História específica (Flash por padrão)
make init-project                       # Inicializar estrutura do projeto
make setup-project PROJECT_NAME=minha-app  # Configurar projeto específico

# Usar Pro para implementações complexas
make implement-story GEMINI_MODEL=gemini-2.5-pro STORY_NUMBER=1.2
```

## 🎯 Comandos Manuais

### Usando o Helper
```bash
make manual-command AGENT=analyst COMMAND="*brainstorm"
make manual-command AGENT=pm COMMAND="*create-doc prd"
make manual-command AGENT=architect COMMAND="*create-doc architecture"
```

### Diretamente no Gemini CLI
```bash
# Sempre use a instrução de idioma E o modelo Flash para comandos manuais
gemini --model gemini-2.5-flash -p "IMPORTANTE: Responda sempre em português do Brasil (pt-BR). Todos os documentos, códigos, comentários e explicações devem estar em português brasileiro. Use terminologia técnica em português quando possível. @analyst *brainstorm"

# Ou use Pro quando quota permitir
gemini --model gemini-2.5-pro -p "IMPORTANTE: Responda sempre em português do Brasil (pt-BR). Todos os documentos, códigos, comentários e explicações devem estar em português brasileiro. Use terminologia técnica em português quando possível. @pm *create-doc prd"
```

## 🤖 Agentes Disponíveis

| Agente | Função | Exemplo de Uso |
|--------|--------|----------------|
| `@analyst` | Análise e brainstorming | `make manual-command AGENT=analyst COMMAND="*brainstorm"` |
| `@pm` | Product Manager | `make manual-command AGENT=pm COMMAND="*create-doc prd"` |
| `@architect` | Arquiteto de sistema | `make manual-command AGENT=architect COMMAND="*create-doc architecture"` |
| `@dev` | Desenvolvedor | `make manual-command AGENT=dev COMMAND="implement story 1.1"` |
| `@sm` | Story Manager | `make manual-command AGENT=sm COMMAND="create-next-story"` |
| `@po` | Product Owner | `make manual-command AGENT=po COMMAND="*execute-checklist po-master-checklist"` |
| `@qa` | Quality Assurance | `make manual-command AGENT=qa COMMAND="create-test-plan"` |

## 📝 Exemplos Práticos

### Cenário 1: Projeto Completamente Novo (Flash - Evita Quota)
```bash
make brainstorm                 # Ideação inicial (Flash)
make market-research            # Pesquisa de mercado (Flash)
make plan-prd                   # Criar PRD em português (Flash)
make plan-arch                  # Criar arquitetura em português (Flash)
make validate                   # Validar planejamento (Flash)
make create-epic                # Criar épico (Flash)
make setup-project              # Configurar estrutura do projeto (Flash)
make create-stories             # Criar histórias (Flash)
make implement-story            # Implementar primeira história (Flash)
```

### Cenário 1b: Projeto Novo (Pro - Melhor Qualidade)
```bash
# Quando quota permitir, use Pro para melhor qualidade
export GEMINI_MODEL=gemini-2.5-pro
make brainstorm
make plan-prd
make plan-arch
# ... resto do fluxo
```

### Cenário 2: Começar com Ideia Específica
```bash
make plan-prd                   # Começar direto com PRD
make plan-arch                  # Criar arquitetura
make validate                   # Validar
make create-epic                # Criar épico
make setup-project PROJECT_NAME=minha-startup
```

### Cenário 3: Fluxo Rápido para MVP
```bash
make greenfield-flow            # Fluxo completo automatizado
# Ou comandos específicos:
make manual-command AGENT=pm COMMAND="create mvp plan"
make manual-command AGENT=architect COMMAND="design minimal architecture"
```

## 🔧 Utilitários

```bash
make status                     # Status do ambiente
make dev-help                   # Comandos úteis
make clean-docs                 # Limpar documentação
make test-connection            # Testar conexão OAuth (Flash)
make set-model                  # Configurar modelo Gemini
make quota-help                 # Ajuda para problemas de quota
```

## 📖 Documentação Gerada

Todos os documentos são gerados em português brasileiro:
- `docs/market-analysis.md` - Análise de mercado
- `docs/prd.md` - Product Requirements Document
- `docs/architecture.md` - Documento de arquitetura
- `docs/stories/` - Histórias de usuário
- Códigos com comentários em português

## 🎨 Personalização

### Modificar Instrução de Idioma
Edite a variável `LANG_INSTRUCTION` no Makefile:
```makefile
LANG_INSTRUCTION := "Sua instrução personalizada aqui"
```

### Adicionar Novos Comandos
Sempre inclua `$(MODEL_FLAG)` e `$(AGENT_PREFIX)` antes do comando do agente:
```makefile
meu-comando:
	@gemini $(MODEL_FLAG) -p "$(AGENT_PREFIX) @agente meu-comando"
```

### Modificar Modelo Padrão
Edite a variável `GEMINI_MODEL` no Makefile:
```makefile
# Para usar Flash por padrão (recomendado)
GEMINI_MODEL ?= gemini-2.5-flash

# Para usar Pro por padrão (cuidado com quota)
GEMINI_MODEL ?= gemini-2.5-pro
```

### Configurar Nome do Projeto Padrão
Edite a variável `PROJECT_NAME` no Makefile:
```makefile
PROJECT_NAME ?= meu-projeto-incrivel
```

## ⚠️ Importante

1. **Todos os comandos automáticos** já incluem a instrução de idioma e modelo Flash
2. **Para comandos manuais**, sempre use `--model gemini-2.5-flash` e a instrução de idioma
3. **Documentos gerados** estarão em português brasileiro
4. **Códigos e comentários** serão gerados em português quando possível
5. **Modelo Flash** é usado por padrão para evitar quota exceeded
6. **Use Pro apenas quando necessário** e quota permitir
7. **Projetos greenfield** começam do zero, então brainstorming é essencial

## 🆘 Troubleshooting

### Erro 429 - Quota Exceeded
```bash
# Solução imediata - usar Flash
make quota-help
make brainstorm GEMINI_MODEL=gemini-2.5-flash

# Verificar modelo atual
make set-model

# Testar conexão com Flash
make test-connection GEMINI_MODEL=gemini-2.5-flash
```

### Agente não responde em português
```bash
# Verificar configuração
make configure-language

# Usar comando manual com instrução explícita
make manual-command AGENT=analyst COMMAND="*brainstorm"
```

### Documentos em inglês
Verifique se está usando os comandos do Makefile (que incluem instrução de idioma) em vez de comandos diretos do Gemini CLI.

### Comandos muito lentos
```bash
# Use Flash para velocidade
export GEMINI_MODEL=gemini-2.5-flash
make greenfield-flow

# Ou force Flash em comando específico
make brainstorm GEMINI_MODEL=gemini-2.5-flash
```

### Não sei por onde começar
```bash
# Para ideias vagas
make brainstorm

# Para conceito mais definido
make plan-prd

# Para fluxo completo
make greenfield-flow
```

## 📞 Suporte

Para dúvidas sobre o uso em português brasileiro e problemas de quota:
1. Execute `make help` para ver todos os comandos
2. Execute `make quota-help` para resolver problemas de quota
3. Execute `make set-model` para configurar modelo
4. Execute `make configure-language` para ver a configuração atual
5. Execute `make dev-help` para comandos úteis

## 🔥 Comandos de Emergência (Quota Exceeded)

```bash
# Teste rápido se Flash funciona
make test-connection GEMINI_MODEL=gemini-2.5-flash

# Brainstorming rápido com Flash
make brainstorm GEMINI_MODEL=gemini-2.5-flash

# Configurar Flash para toda sessão
export GEMINI_MODEL=gemini-2.5-flash
make greenfield-flow
```

## 🎯 Fluxo Recomendado para Iniciantes

```bash
# 1. Instalação (uma vez só)
make install

# 2. Testar conexão
make test-connection

# 3. Começar projeto
make greenfield-flow

# 4. Ou passo a passo:
make brainstorm          # Explorar ideias
make plan-prd           # Definir produto
make plan-arch          # Definir arquitetura
make validate           # Validar tudo
make create-epic        # Criar épico
make setup-project      # Configurar estrutura
make create-stories     # Criar histórias
make implement-story    # Começar a implementar