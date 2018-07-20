import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class removeImage1532122875270 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    queryRunner.dropColumn('birds', 'image');
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    queryRunner.addColumn('birds', new TableColumn({
      name: 'image',
      type: 'mediumblob',
    }));
  }

}
