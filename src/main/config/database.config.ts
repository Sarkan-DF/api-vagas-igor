import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export default new DataSource({
  type: "postgres",
  port: 8081,
  username: process.env.BD_USER,
  password: process.env.BD_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  url: process.env.DB_URL,

  ssl: {
    rejectUnauthorized: false,
  },
  migrations: ["src/app/shared/database/migrations/**/*.ts"],
  entities: ["src/app/shared/database/entities/**/*.ts"],
  schema: "vagas",
});
