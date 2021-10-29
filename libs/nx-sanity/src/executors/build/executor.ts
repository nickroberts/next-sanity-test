import { ExecutorContext, logger } from '@nrwl/devkit';
import { BuildExecutorSchema } from './schema';
import { execSync } from 'child_process';
import { join, resolve } from 'path';

export const LARGE_BUFFER = 1024 * 1000000;

export default async function runExecutor(
  options: BuildExecutorSchema,
  context: ExecutorContext
) {
  logger.info('Building Sanity with options:');
  logger.info(JSON.stringify(options, null, 2));
  const { root } = context.workspace.projects[context.projectName];
  const outputPath = resolve(context.root, join('dist', root));
  const command = `sanity build ${outputPath} -y`;
  execSync(command, {
    env: {
      ...process.env,
      FORCE_COLOR: '1',
    },
    stdio: [0, 1, 2],
    maxBuffer: LARGE_BUFFER,
    cwd: root,
  });
  return {
    success: true,
  };
}

// const command = 'sanity build ../../dist/apps/studio -y';
