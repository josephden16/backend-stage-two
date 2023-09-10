import dotenv from 'dotenv';
import vine, { errors } from '@vinejs/vine';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.join(__dirname, '../.env') });

let envVars: any;

async function getEnvVars() {
  try {
    const envSchema = vine.object({
      NODE_ENV: vine.enum(['development', 'production', 'test']),
      MONGODB_URL: vine.string(),
      PORT: vine.number(),
    });

    const validator = vine.compile(envSchema);
    envVars = await validator.validate(process.env);
    return envVars;
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      throw new Error(`Env Config vaildation error: ${JSON.stringify(error.messages)}`);
    }
  }
}

envVars = await getEnvVars();

export default {
  port: envVars.PORT,
  env: envVars.NODE_ENV,
  mongoose: {
    url: envVars.MONGODB_URL,
  },
};
