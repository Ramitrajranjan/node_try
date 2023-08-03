const chalk = require('chalk')
const validator = require('validator')
console.log(chalk.blue('Hello world!'));
console.log(chalk.blue.inverse('Hello world!'));
console.log(chalk.blue.italic('Hello world!'));
console.log(chalk.blue.underline('Hello world!'));
console.log(chalk.blue.inverse.underline('Hello world!'));

const res=validator.isEmail("welcomehome@gmail.com")
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res))