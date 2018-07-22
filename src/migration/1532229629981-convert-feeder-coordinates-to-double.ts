import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class convertFeederCoordinatesToDouble1532229629981 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.changeColumn('feeders',
        new TableColumn({
          name: 'longitude',
          type: 'decimal',
          precision: 10,
          scale: 7,
        }),
        new TableColumn({
          name: 'longitude',
          type: 'double',
          isNullable: false,
        }),
      );
      await queryRunner.changeColumn('feeders',
      new TableColumn({
        name: 'latitude',
        type: 'decimal',
        precision: 10,
        scale: 7,
      }),
      new TableColumn({
        name: 'latitude',
        type: 'double',
        isNullable: false,
      }),
    );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
