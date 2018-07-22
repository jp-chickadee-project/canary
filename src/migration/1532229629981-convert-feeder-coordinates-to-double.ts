import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class convertFeederCoordinatesToDouble1532229629981 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query('ALTER TABLE feeders MODIFY COLUMN latitude DOUBLE NOT NULL');
      await queryRunner.query('ALTER TABLE feeders MODIFY COLUMN longitude DOUBLE NOT NULL');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
