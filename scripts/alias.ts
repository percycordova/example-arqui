// scripts/alias.ts
import path from 'path';
import tsconfig from '../tsconfig.json';

export function resolveAliasFromTsconfig(): Record<string, string> {
  const paths = tsconfig.compilerOptions?.paths ?? {};
  const baseUrl = tsconfig.compilerOptions?.baseUrl ?? './src';

  const aliases: Record<string, string> = {};

  for (const [alias, [target]] of Object.entries(paths)) {
    const cleanedAlias = alias.replace('/*', '');
    const cleanedTarget = target.replace('/*', '');
    aliases[cleanedAlias] = path.resolve(__dirname, `../${baseUrl}/${cleanedTarget}`);
  }

  return aliases;
}
