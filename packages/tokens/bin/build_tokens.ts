import toCase from 'case';
import path from 'path';
import fs from 'fs-extra';
import flatten from 'flat';
import * as tokens from '../src';


function format(value: string | number, key?: string) {
  console.log(key);
  
  return typeof value === 'number' ? `${value / 16}rem` : value;
}
const flatTokens: { [key: string]: string } = flatten(tokens);
function createVariablesWithPrefix(prefix: string) {
  return Object.entries(flatTokens)
    .map(([key, value]: [string, any]) => {
      return `${prefix}${toCase.kebab(toCase.camel(key))}: ${format(
        value,
        key,
      )};`;
    })
    .join('\n');
}

function run() {
  const scssString = `
${createVariablesWithPrefix('$')}`;
  fs.outputFileSync(path.resolve('dist', 'styles.scss'), scssString);
  console.log('✅ Created file with SCSS variables');
}
run();
