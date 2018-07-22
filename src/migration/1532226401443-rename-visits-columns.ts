import { MigrationInterface, QueryRunner } from "typeorm";

export class renameVisitsColumns1532226401443 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.renameColumn('visits', 'visitTimestamp', 'timestamp');
      await queryRunner.renameColumn('visits', 'rfid', 'bird');
      await queryRunner.renameColumn('visits', 'feederID', 'feeder');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.renameColumn('visits', 'timestamp', 'visitTimestamp');
      await queryRunner.renameColumn('visits', 'bird', 'rfid');
      await queryRunner.renameColumn('visits', 'feeder', 'feederID');
    }

}
