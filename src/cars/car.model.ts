import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CarsCreation {
    state_number: number;
    model: number
}
    
@Table({tableName: 'cars'})
    export class Car extends Model<Car, CarsCreation> {
        @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
        @Column({type: DataType.STRING, unique: true, autoIncrement: true, primaryKey: true})
        id: string;
    }