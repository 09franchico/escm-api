import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Migrate1702183599052 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'alunos',
            columns:[{
                name:'id',
                type:'int',
                isPrimary:true,
                isGenerated:true,
                generationStrategy:'increment',
                unsigned:true
            },
            {
                name:'nome',
                type:'varchar',
                length:"200"
            },
            {
                name:'email',
                type:'varchar',
                length:'150',
                isUnique: true
            },
            {
                name:'idade',
                type:'int',
            },
            {
                name:'createAt',
                type:'timestamp',
                default:'CURRENT_TIMESTAMP()'
            },
            {
                name:'updateAt',
                type:'timestamp',
                default:'CURRENT_TIMESTAMP()'
            }
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('alunos')
    }

}
