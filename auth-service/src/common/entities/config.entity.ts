
interface ServerConfig {
  port: number;
  host: string;
  secret: string;
}

interface RedisConfig {
  host: string;
  port: number;
  password: string;
}

interface VaultConfig {
  host: string;
  port: number;
  token: string;
}

interface DatabaseConfig {
  url: string;
}

interface ServicesConfig {
  redis: RedisConfig;
  vault: VaultConfig;
  database: DatabaseConfig;
}

export interface AppConfig {
  type: string;
  server: ServerConfig;
  services: ServicesConfig;
}
