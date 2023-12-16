import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Migrate1702691557123 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'responsavel',
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
                length:"200",
                isNullable:true
            },
            {
                name:'email',
                type:'varchar',
                length:'150',
                isUnique: true
            },
            {
                name:'rg',
                type:'varchar',
                isNullable:true
            },
            {
                name:'cpf',
                type:'varchar',
                isNullable:true
            },
            {
                name:'celular',
                type:'varchar',
                isNullable:true
            },
            {
                name:'operadora',
                type:'varchar',
                isNullable:true
            },
            {
                name:'data_nascimento',
                type:'date',
                isNullable:true
            },
            {
                name:'sexo',
                type:'varchar',
                isNullable:true
            },
            {
                name:'ativo',
                type:'int',
                isNullable:true
            },
            {
                name:'parentesco',
                type:'varchar',
                isNullable:true
            },
            {
                name:'createAt',
                type:'timestamp',
                default:'CURRENT_TIMESTAMP()',
                isNullable:true
            },
            {
                name:'updateAt',
                type:'timestamp',
                default:'CURRENT_TIMESTAMP()',
                isNullable:true
            }
        ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('responsavel')
    }

}
