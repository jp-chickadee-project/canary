import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class makeVisitTimestampRequired1532221108363 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query('DELETE FROM visits WHERE visitTimestamp IS NULL;');
      await queryRunner.changeColumn('visits', 'visitTimestamp', new TableColumn({
        name: 'visitTimestamp',
        type: 'bigint',
        precision: 20,
        isNullable: false,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
