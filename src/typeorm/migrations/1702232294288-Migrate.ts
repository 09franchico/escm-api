import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Migrate1702232294288 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'usuario',
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
                name:'senha',
                type:'varchar',
            },
            {
                name:'ativo',
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
        await queryRunner.dropTable('usuario')
    }

}
