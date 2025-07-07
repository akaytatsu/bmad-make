#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');

// Banner do BMAD-Make
function showBanner() {
  console.log(chalk.cyan(`
╔══════════════════════════════════════════════════════════════╗
║                        BMAD-Make                             ║
║              CLI Tool para Projetos BMAD-Method             ║
╚══════════════════════════════════════════════════════════════╝
  `));
}

// Opções de instalação disponíveis
const installationTypes = [
  {
    name: 'BMAD Brownfield - Para projetos existentes',
    value: 'bmad-brownfield',
    description: 'Configuração completa para projetos já em andamento com guias, Makefile e documentação'
  },
  {
    name: 'BMAD Greenfield - Para projetos novos (do zero)',
    value: 'bmad-greenfield',
    description: 'Configuração completa para projetos novos com brainstorming, planejamento e desenvolvimento do zero'
  }
];

// Função principal
async function main() {
  try {
    showBanner();

    console.log(chalk.yellow('🚀 Bem-vindo ao BMAD-Make!'));
    console.log(chalk.gray('Este tool irá configurar seu projeto com o BMAD-Method.\n'));

    // Obter diretório atual
    const currentDir = process.cwd();
    console.log(chalk.blue(`📁 Instalando no diretório: ${path.basename(currentDir)}`));

    // Selecionar tipo de instalação
    const { selectedType } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedType',
        message: 'Escolha o tipo de instalação:',
        choices: installationTypes.map(type => ({
          name: `${type.name}\n   ${chalk.gray(type.description)}`,
          value: type.value,
          short: type.name
        }))
      }
    ]);

    // Confirmar instalação
    const selectedTypeInfo = installationTypes.find(type => type.value === selectedType);
    console.log(chalk.blue(`\n📋 Tipo selecionado: ${selectedTypeInfo.name}`));
    console.log(chalk.gray(`📝 ${selectedTypeInfo.description}\n`));

    const { confirmType } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmType',
        message: 'Confirma a instalação deste tipo?',
        default: true
      }
    ]);

    if (!confirmType) {
      console.log(chalk.red('❌ Instalação cancelada pelo usuário.'));
      process.exit(0);
    }

    // Executar instalação
    await installType(selectedType, currentDir);

    // Sucesso
    console.log(chalk.green('\n🎉 Instalação concluída com sucesso!'));
    console.log(chalk.cyan('\n📖 Próximos passos:'));

    if (selectedType === 'bmad-brownfield') {
      console.log(chalk.white('1. Leia o guia: ') + chalk.yellow('guia-bmad-method-projetos-existentes.md'));
      console.log(chalk.white('2. Execute: ') + chalk.yellow('make help') + chalk.gray(' (para ver todos os comandos disponíveis)'));
      console.log(chalk.white('3. Inicie com: ') + chalk.yellow('make full-setup') + chalk.gray(' (configuração completa)'));
      console.log(chalk.white('4. Ou execute: ') + chalk.yellow('make brownfield-flow') + chalk.gray(' (fluxo completo)'));
    } else if (selectedType === 'bmad-greenfield') {
      console.log(chalk.white('1. Leia o guia: ') + chalk.yellow('guia-bmad-method-projetos-greenfield.md'));
      console.log(chalk.white('2. Execute: ') + chalk.yellow('make help -f Makefile.greenfield') + chalk.gray(' (para ver todos os comandos disponíveis)'));
      console.log(chalk.white('3. Inicie com: ') + chalk.yellow('make full-setup -f Makefile.greenfield') + chalk.gray(' (configuração completa)'));
      console.log(chalk.white('4. Ou execute: ') + chalk.yellow('make greenfield-flow -f Makefile.greenfield') + chalk.gray(' (fluxo completo)'));
      console.log(chalk.white('5. Para começar com ideias: ') + chalk.yellow('make brainstorm -f Makefile.greenfield') + chalk.gray(' (sessão de brainstorming)'));
    }

    console.log(chalk.gray('\n💡 Para mais informações, consulte o README.md'));

  } catch (error) {
    console.error(chalk.red('\n❌ Erro durante a instalação:'), error.message);
    process.exit(1);
  }
}

// Função para instalar um tipo específico
async function installType(type, targetDir) {
  const spinner = ora('Copiando arquivos...').start();

  try {
    // Caminho da pasta source no pacote NPM
    const packageDir = path.dirname(__dirname);
    const sourceDir = path.join(packageDir, type);

    // Verificar se a pasta source existe
    if (!await fs.pathExists(sourceDir)) {
      throw new Error(`Tipo de instalação '${type}' não encontrado`);
    }

    // Copiar todos os arquivos da pasta source para o diretório atual
    await fs.copy(sourceDir, targetDir, {
      overwrite: true,
      filter: (src, dest) => {
        // Log dos arquivos sendo copiados
        const relativePath = path.relative(sourceDir, src);
        if (relativePath) {
          spinner.text = `Copiando: ${relativePath}`;
        }
        return true;
      }
    });

    spinner.succeed('Arquivos copiados com sucesso!');

    // Mostrar arquivos copiados
    const copiedFiles = await getCopiedFiles(sourceDir, targetDir);
    console.log(chalk.green('\n📁 Arquivos instalados:'));
    copiedFiles.forEach(file => {
      console.log(chalk.gray(`   ✓ ${file}`));
    });

  } catch (error) {
    spinner.fail('Erro ao copiar arquivos');
    throw error;
  }
}

// Função auxiliar para listar arquivos copiados
async function getCopiedFiles(sourceDir, targetDir) {
  const files = [];

  async function walkDir(dir, basePath = '') {
    const items = await fs.readdir(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const relativePath = path.join(basePath, item);
      const stat = await fs.stat(fullPath);

      if (stat.isDirectory()) {
        await walkDir(fullPath, relativePath);
      } else {
        files.push(relativePath);
      }
    }
  }

  await walkDir(sourceDir);
  return files.sort();
}

// Executar se chamado diretamente
if (require.main === module) {
  main();
}

module.exports = { main };