import {MigrationInterface, QueryRunner} from 'typeorm';

export class removeUnusedVisitColumns1532220641472 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      queryRunner.dropColumn('visits', 'temperature');
      queryRunner.dropColumn('visits', 'mass');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
