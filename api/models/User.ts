import {Model, Column, Table, CreatedAt, UpdatedAt, DataType} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
 @Column
 name!: string;

 @Column
 lastName!: string;

 @CreatedAt
 @Column
 createdAt!: Date;

 @UpdatedAt
 @Column
 updatedAt!: Date;
}