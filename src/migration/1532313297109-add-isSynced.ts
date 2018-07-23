import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addIsSynced1532313297109 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('visits', new TableColumn({
        name: 'isSynced',
        type: 'TINYINT',
        precision: 1,
      }));

      await queryRunner.addColumn('birds', new TableColumn({
        name: 'isSynced',
        type: 'TINYINT',
        precision: 1,
      }));

      await queryRunner.addColumn('feeders', new TableColumn({
        name: 'isSynced',
        type: 'TINYINT',
        precision: 1,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('visits', 'isSynced');
      await queryRunner.dropColumn('birds', 'isSynced');
      await queryRunner.dropColumn('feeders', 'isSynced');
    }

}
