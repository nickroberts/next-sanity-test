import { ExecutorContext, logger } from '@nrwl/devkit';
import { ServeExecutorSchema } from './schema';
import { execSync } from 'child_process';

export const LARGE_BUFFER = 1024 * 1000000;

export default async function runExecutor(
  options: ServeExecutorSchema,
  context: ExecutorContext
) {
  logger.info('Starting Sanity with options:');
  logger.info(JSON.stringify(options, null, 2));
  const command = 'sanity start';
  const { root } = context.workspace.projects[context.projectName];
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
