import * as Joi from 'joi';
import { ConfigFactory } from '@nestjs/config';
import { AppConfig } from 'src/domain/entities/config.entity';
import * as dotenv from 'dotenv';
import path from 'path';

const env = process.env.NODE_ENV || 'dev';

// Load environment variables from .env file
dotenv.config({"path": path.join(__dirname, `../../.${env}.env`)});

// Load base configuration from JSON file
const baseConfig = require(`../../configs/config.${env}.json`);

// Build the complete configuration object
const config: AppConfig = {
  type: env,
  server: {
    ...baseConfig.server,
    secret: process.env.SERVER_SECRET
  },
  services: {
    ...baseConfig.services,
    redis: {
      ...baseConfig.services.redis,
      password: process.env.REDIS_PASSWORD
    },
    vault: {
      ...baseConfig.services.vault,
      token: process.env.VAULT_TOKEN
    },
    database: {
      url: process.env.DATABASE_URL
    }
  }
};


// Create the config factory function
export const configuration: ConfigFactory<AppConfig> = () => config;

// Validation schema
export const configValidationSchema = Joi.object({
  type: Joi.string().valid('dev', 'prod'),
  server: Joi.object({
    port: Joi.number(),
    host: Joi.string(),
    secret: Joi.string()
  }),
  services: Joi.object({
    redis: Joi.object({
      host: Joi.string(),
      port: Joi.number(),
      password: Joi.string()
    }),
    vault: Joi.object({
      host: Joi.string(),
      port: Joi.number(),
      token: Joi.string()
    }),
    database: Joi.object({
      url: Joi.string()
    })
  })
});