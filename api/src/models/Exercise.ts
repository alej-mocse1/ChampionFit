import {Model, Column, Table, CreatedAt, UpdatedAt, DataType} from 'sequelize-typescript';

@Table({
    timestamps: false
})
export class Exercise extends Model<Exercise> {
    @Column({
        type: DataType.STRING,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false
    })
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    image!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    description!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    time!: string;
}