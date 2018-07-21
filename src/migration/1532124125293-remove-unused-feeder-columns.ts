import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class removeUnusedFeederColumns1532124125293 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      queryRunner.dropColumn('feeders', 'lastPath');
      queryRunner.dropColumn('feeders', 'battery');
      queryRunner.dropColumn('feeders', 'lastStatus');
      queryRunner.dropColumn('feeders', 'lastContact');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
