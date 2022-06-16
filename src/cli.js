import arg from 'arg';
import inquirer from 'inquirer';
import { createProject } from './main'

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--yes': Boolean,
      '--install': Boolean,
      '-y': '--yes',
      '-i': '--install',
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    skipPrompts: args['--yes'] || false,
    packageManager: args._[0],
    technology: args._[0],
    runInstall: args['--install'] || false,
  };
}

async function promptForMissingOptions(options) {
  const defaultTechnology = 'React.js';
  const defaultPackageManager = 'npm';
  if (options.skipPrompts) {
    return {
      ...options,
      technology: options.technology || defaultTechnology,
      packageManager: options.packageManager || defaultPackageManager,
    };
  }

  const questions = [];

  if (!options.packageManager) {
    questions.push({
      type: 'list',
      name: 'packageManager',
      message: 'What package manager would you like to use?',
      choices: ['npm', 'yarn'],
      default: defaultPackageManager,
    });
  }

  if (!options.technology) {
    questions.push({
      type: 'list',
      name: 'technology',
      message: 'Please choose which technology to use',
      choices: ['React.js', 'Next.js'],
      default: defaultTechnology,
    });
  }

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    technology: options.technology || answers.technology,
    packageManager: options.packageManager || answers.packageManager,
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  console.log(options);
}