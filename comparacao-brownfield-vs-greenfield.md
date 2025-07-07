# Comparação: BMAD-Method Brownfield vs Greenfield

Este documento explica as principais diferenças entre usar o BMAD-Method em projetos existentes (brownfield) versus projetos do zero (greenfield).

## 📊 Visão Geral

| Aspecto | Brownfield | Greenfield |
|---------|------------|------------|
| **Projeto** | Existente, em andamento | Novo, do zero |
| **Foco Principal** | Melhorias e integrações | Criação e desenvolvimento |
| **Primeira Etapa** | Análise do existente | Brainstorming e ideação |
| **Complexidade** | Integração com legado | Escolhas arquiteturais |
| **Riscos** | Breaking changes | Decisões erradas iniciais |

## 🔄 Fluxos de Trabalho

### Brownfield (Projetos Existentes)
```bash
1. make analyze          # Documentar estado atual
2. make plan-prd         # PRD para melhorias
3. make plan-arch        # Arquitetura de integração
4. make validate         # Validar compatibilidade
5. make create-epic      # Épico de melhoria
6. make create-stories   # Histórias incrementais
7. make implement-story  # Implementação cuidadosa
```

### Greenfield (Projetos Novos)
```bash
1. make brainstorm       # Explorar ideias
2. make market-research  # Pesquisar mercado (opcional)
3. make plan-prd         # PRD do zero
4. make plan-arch        # Arquitetura nova
5. make validate         # Validar planejamento
6. make create-epic      # Épico de MVP
7. make setup-project    # Configurar estrutura
8. make create-stories   # Histórias de desenvolvimento
9. make implement-story  # Implementação livre
```

## 🎯 Agentes e Comandos

### Comandos Específicos do Brownfield

| Comando | Descrição | Quando Usar |
|---------|-----------|-------------|
| `@analyst *document-project` | Documenta projeto existente | Sempre primeiro |
| `@pm *create-doc brownfield-prd` | PRD para melhorias | Após análise |
| `@architect *create-doc brownfield-architecture` | Arquitetura de integração | Para mudanças estruturais |
| `@pm *brownfield-create-epic` | Épico focado em integração | Melhorias específicas |

### Comandos Específicos do Greenfield

| Comando | Descrição | Quando Usar |
|---------|-----------|-------------|
| `@analyst *brainstorm` | Sessão de brainstorming | Explorar ideias iniciais |
| `@analyst *market-research` | Pesquisa de mercado | Validar oportunidades |
| `@pm *create-doc prd` | PRD para projeto novo | Definir produto do zero |
| `@architect *create-doc architecture` | Arquitetura nova | Projetar sistema completo |
| `@pm *greenfield-create-epic` | Épico de MVP | Funcionalidades principais |
| `@architect *create-project-structure` | Estrutura inicial | Organizar projeto |
| `@dev *init-project` | Inicializar projeto | Configurar ambiente |

## 📋 Diferenças nos Checklists

### Brownfield - Foco em Integração
- ✅ Compatibilidade com sistema existente
- ✅ Impacto em funcionalidades atuais
- ✅ Estratégia de rollback
- ✅ Migração de dados
- ✅ Testes de regressão
- ✅ Documentação de mudanças

### Greenfield - Foco em Fundação
- ✅ Viabilidade do conceito
- ✅ Escolha de tecnologias
- ✅ Escalabilidade futura
- ✅ Arquitetura limpa
- ✅ Padrões de código
- ✅ Estratégia de testes

## 🏗️ Estrutura de Documentos

### Brownfield
```
docs/
├── project-analysis.md      # Análise do existente
├── prd.md                   # Melhorias planejadas
├── architecture.md          # Integração e mudanças
└── stories/
    └── epic-1/              # Melhorias incrementais
        ├── 1.1.story.md     # História de integração
        └── 1.2.story.md     # História de melhoria
```

### Greenfield
```
docs/
├── market-analysis.md       # Pesquisa de mercado
├── prd.md                   # Produto completo
├── architecture.md          # Sistema do zero
└── stories/
    └── epic-1/              # MVP completo
        ├── 1.1.story.md     # História de funcionalidade
        └── 1.2.story.md     # História de feature
```

## ⚠️ Riscos e Cuidados

### Brownfield - Riscos de Integração
- **Breaking Changes**: Mudanças podem quebrar funcionalidades existentes
- **Dependências**: Código legado pode limitar opções
- **Testes**: Necessário testar impacto em todo sistema
- **Rollback**: Sempre ter plano de volta
- **Performance**: Mudanças podem afetar performance

### Greenfield - Riscos de Decisão
- **Over-engineering**: Criar complexidade desnecessária
- **Escolhas Erradas**: Tecnologias inadequadas para o problema
- **Scope Creep**: Adicionar funcionalidades desnecessárias
- **Falta de Foco**: Perder visão do MVP
- **Paralisia de Análise**: Planejar demais, implementar pouco

## 🎨 Estratégias Recomendadas

### Para Brownfield
1. **Análise Primeiro**: Sempre documente o estado atual
2. **Mudanças Incrementais**: Pequenas melhorias por vez
3. **Testes Extensivos**: Valide que nada quebrou
4. **Rollback Ready**: Sempre tenha plano B
5. **Comunicação**: Informe stakeholders sobre mudanças

### Para Greenfield
1. **MVP First**: Comece com mínimo viável
2. **Decisões Reversíveis**: Evite lock-in tecnológico
3. **Validação Rápida**: Teste conceitos cedo
4. **Documentação Clara**: Registre decisões arquiteturais
5. **Iteração Rápida**: Falhe rápido, aprenda rápido

## 🔧 Configurações Recomendadas

### Brownfield (core-config.yml)
```yaml
# Configuração conservadora para projetos existentes
prdVersion: v3
prdSharded: false
architectureVersion: v3
architectureSharded: false
devStoryLocation: docs/stories
devLoadAlwaysFiles:
  - docs/project-analysis.md
  - docs/existing-architecture.md
```

### Greenfield (core-config.yml)
```yaml
# Configuração moderna para projetos novos
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

## 📈 Métricas de Sucesso

### Brownfield
- **Funcionalidades Preservadas**: 100% das funcionalidades existentes mantidas
- **Performance**: Sem degradação de performance
- **Bugs Introduzidos**: Zero bugs críticos
- **Tempo de Rollback**: < 30 minutos
- **Satisfação dos Usuários**: Mantida ou melhorada

### Greenfield
- **Time to Market**: Tempo para lançar MVP
- **Qualidade do Código**: Cobertura de testes > 80%
- **Escalabilidade**: Suporta crescimento planejado
- **Satisfação do Desenvolvedor**: Facilidade de manutenção
- **Validação do Mercado**: Aceitação do produto

## 🚀 Quando Usar Cada Abordagem

### Use Brownfield quando:
- ✅ Você tem um projeto existente funcionando
- ✅ Precisa adicionar funcionalidades específicas
- ✅ Quer melhorar partes do sistema atual
- ✅ Tem restrições de tempo/orçamento para reescrita
- ✅ O sistema atual atende a maioria das necessidades

### Use Greenfield quando:
- ✅ Está começando um projeto do zero
- ✅ Tem uma nova ideia de produto
- ✅ O sistema atual é irreparável/obsoleto
- ✅ Quer usar tecnologias modernas
- ✅ Tem liberdade para escolher arquitetura

## 🔄 Transição entre Abordagens

### De Greenfield para Brownfield
Quando seu projeto greenfield cresce e amadurece, você pode precisar:
- Migrar para abordagem brownfield para novas funcionalidades
- Usar análise de projeto existente antes de grandes mudanças
- Aplicar cuidados de integração em mudanças estruturais

### De Brownfield para Greenfield
Em casos extremos, pode ser necessário:
- Reescrever sistema do zero (greenfield)
- Migrar dados e funcionalidades gradualmente
- Manter sistema antigo durante transição

## 📞 Suporte e Recursos

### Documentação Específica
- **Brownfield**: `guia-bmad-method-projetos-existentes.md`
- **Greenfield**: `guia-bmad-method-projetos-greenfield.md`

### Makefiles
- **Brownfield**: `Makefile.brownfield`
- **Greenfield**: `Makefile.greenfield`

### Comandos de Ajuda
```bash
# Para brownfield
make help -f Makefile.brownfield

# Para greenfield
make help -f Makefile.greenfield
```

---

**Dica Final**: Não existe abordagem "melhor" - existe a abordagem mais adequada para sua situação específica. Analise seu contexto e escolha a metodologia que melhor se adapta às suas necessidades e restrições.