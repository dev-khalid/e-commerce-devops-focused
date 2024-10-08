import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

export const testDbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  port: Number(process.env.DB_PORT) || 3306,
  host: process.env.DB_HOST,
  username: 'test_user',
  password: 'test_password',
  database: 'DFEC_test',
  autoLoadEntities: true,
  entities: ['src/**/*.entity{.ts}'],
  synchronize: true,
  logging: false,
  migrationsTableName: 'typeorm_migrations',
  migrationsRun: true,
  migrations: ['src/**/migrations/*{.ts}'],
};
const testConnectionSource = new DataSource(testDbConfig as DataSourceOptions);
export default testConnectionSource;
