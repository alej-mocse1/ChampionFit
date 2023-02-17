import {Model, Column, Table, CreatedAt, UpdatedAt, DataType, IsEmail} from 'sequelize-typescript';



//  create the model instance that will be the one that creates the user instances
//  later these instances will be saved in the database
@Table
export class User extends Model<User> {

    @Column({
        type: DataType.STRING,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false,
        validate:{
            len: [4,60],
          }
    })
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate:{
            len: [4,60],
          }
    })
    name!: string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate:{
            len: [4,60],
          }
    })
    lastName!: string;

 
    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate:{
            len: [4,75],
          }
    })
    email!: string;


   @Column({
    type:DataType.BOOLEAN,
    allowNull: false
   })
   premiun!: boolean;
}