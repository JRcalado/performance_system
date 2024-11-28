import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddDescricaoToHabilidade implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'habilidade', // Nome da tabela no banco de dados
      new TableColumn({
        name: 'descricao',
        type: 'varchar',
        isNullable: true, // Permitir valores nulos inicialmente
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('habilidade', 'descricao');
  }
}
