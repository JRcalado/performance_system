import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite', // Troque para o tipo correto, como postgres, mysql, etc.
  database: 'db.sqlite',
  synchronize: false, // Use migrações, não sincronização automática
  logging: true,
  entities: ['dist/**/*.entity.js'], // Certifique-se de apontar para os arquivos transpilados
  migrations: ['dist/migrations/*.js'], // Certifique-se de apontar para os arquivos transpilados
});
