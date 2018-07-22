import { MigrationInterface, QueryRunner } from "typeorm";

export class reworkFeedersFullName1532231784641 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.renameColumn('feeders', 'fullName', 'name');
      await queryRunner.query('ALTER TABLE feeders MODIFY COLUMN name VARCHAR(255) NOT NULL;');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
