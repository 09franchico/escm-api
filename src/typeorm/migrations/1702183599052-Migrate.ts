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
                length:"200",
                comment:'nome do aluno',
                isNullable:true
            },
            {
                name:'email',
                type:'varchar',
                length:'150',
                isUnique: true,
                comment:'email do aluno',
                isNullable:true
            },
            {
                name:'idade',
                type:'int',
                comment:'idade do aluno',
                isNullable:true
            },
            {
                name:'sexo',
                type:'varchar',
                comment:'sexo [ M - F ] do aluno',
                isNullable:true
            },
            {
                name:'ativo',
                type:'int',
                comment:'Aluno 1 = ativo, 0 = desativado',
                isNullable:true
            },
            {
                name:'endereco',
                type:'varchar',
                comment:'Endereço do aluno',
                isNullable:true
            },
            {
                name:'bairro',
                type:'varchar',
                comment:'Bairro do aluno',
                isNullable:true
            },
            {
                name:'cidade',
                type:'varchar',
                isNullable:true
            },
            {
                name:'uf',
                type:'varchar',
                isNullable:true
            },
            {
                name:'cep',
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
                name:'autorizado_sair_com',
                type:'varchar',
                comment:'Reponsavel que deve ser liberado o aluno',
            },
            {
                name:'responsavel_carne',
                type:'varchar',
                comment:'responsavel por pagar o carne'
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
