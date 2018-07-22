import { MigrationInterface, QueryRunner } from "typeorm";

export class removeBandCombo1532287303288 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      queryRunner.dropColumn('visits', 'bandCombo');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
