# BMAD-Method para Projetos Existentes - Português Brasileiro

Este Makefile está configurado para usar **português brasileiro (pt-BR)** em todas as interações com os agentes do BMAD-Method.

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

### Fluxo Completo para Projetos Existentes
```bash
make brownfield-flow  # Executa todo o fluxo em português
```

## 📊 Comandos Principais (Todos em Português)

### Análise e Documentação
```bash
make analyze          # @analyst *document-project
make plan-prd         # @pm *create-doc brownfield-prd
make plan-arch        # @architect *create-doc brownfield-architecture
make validate         # @po *execute-checklist po-master-checklist
```

### Criação de Épicos e Histórias
```bash
make create-epic      # @pm *brownfield-create-epic
make create-stories   # @sm create-next-story
```

### Implementação
```bash
make implement-story                    # História 1.1 (padrão)
make implement-story STORY_NUMBER=1.2  # História específica
```

## 🎯 Comandos Manuais

### Usando o Helper
```bash
make manual-command AGENT=analyst COMMAND="*document-project"
make manual-command AGENT=dev COMMAND="implement feature login"
make manual-command AGENT=architect COMMAND="review database design"
```

### Diretamente no Gemini CLI
```bash
# Sempre use a instrução de idioma para comandos manuais
gemini -p "IMPORTANTE: Responda sempre em português do Brasil (pt-BR). Todos os documentos, códigos, comentários e explicações devem estar em português brasileiro. Use terminologia técnica em português quando possível. @analyst *document-project"
```

## 🤖 Agentes Disponíveis

| Agente | Função | Exemplo de Uso |
|--------|--------|----------------|
| `@analyst` | Análise de projetos | `make manual-command AGENT=analyst COMMAND="*document-project"` |
| `@pm` | Product Manager | `make manual-command AGENT=pm COMMAND="*create-doc brownfield-prd"` |
| `@architect` | Arquiteto de sistema | `make manual-command AGENT=architect COMMAND="*review-architecture"` |
| `@dev` | Desenvolvedor | `make manual-command AGENT=dev COMMAND="implement story 1.1"` |
| `@sm` | Story Manager | `make manual-command AGENT=sm COMMAND="create-next-story"` |
| `@po` | Product Owner | `make manual-command AGENT=po COMMAND="validate epic"` |
| `@qa` | Quality Assurance | `make manual-command AGENT=qa COMMAND="create-test-plan"` |

## 📝 Exemplos Práticos

### Cenário 1: Nova Funcionalidade
```bash
make analyze                    # Documentar estado atual
make plan-prd                   # Criar PRD em português
make plan-arch                  # Criar arquitetura em português
make validate                   # Validar planejamento
make create-epic                # Criar épico
make create-stories             # Criar histórias
make implement-story            # Implementar primeira história
```

### Cenário 2: Refatoração
```bash
make refactor                   # Processo completo de refatoração
# Ou comando específico:
make manual-command AGENT=dev COMMAND="refactor authentication module"
```

### Cenário 3: Correção de Bug
```bash
make fix-bug                    # Processo completo
# Ou comandos específicos:
make manual-command AGENT=dev COMMAND="analyze bug login-timeout"
make manual-command AGENT=architect COMMAND="design-fix login-timeout"
```

## 🔧 Utilitários

```bash
make status                     # Status do ambiente
make dev-help                   # Comandos úteis
make clean-docs                 # Limpar documentação
make test-connection            # Testar conexão OAuth
```

## 📖 Documentação Gerada

Todos os documentos são gerados em português brasileiro:
- `docs/project-analysis.md` - Análise do projeto
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
Sempre inclua `$(AGENT_PREFIX)` antes do comando do agente:
```makefile
meu-comando:
	@gemini -p "$(AGENT_PREFIX) @agente meu-comando"
```

## ⚠️ Importante

1. **Todos os comandos automáticos** já incluem a instrução de idioma
2. **Para comandos manuais**, sempre use `$(LANG_INSTRUCTION)` ou o helper `manual-command`
3. **Documentos gerados** estarão em português brasileiro
4. **Códigos e comentários** serão gerados em português quando possível

## 🆘 Troubleshooting

### Agente não responde em português
```bash
# Verificar configuração
make configure-language

# Usar comando manual com instrução explícita
make manual-command AGENT=analyst COMMAND="*document-project"
```

### Documentos em inglês
Verifique se está usando os comandos do Makefile (que incluem instrução de idioma) em vez de comandos diretos do Gemini CLI.

## 📞 Suporte

Para dúvidas sobre o uso em português brasileiro:
1. Execute `make help` para ver todos os comandos
2. Execute `make configure-language` para ver a configuração atual
3. Execute `make dev-help` para comandos úteis