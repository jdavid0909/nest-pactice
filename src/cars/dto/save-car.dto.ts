import { IsString, MinLength } from "class-validator";



export class CarDto{

    @IsString({message:`the brand most be a cool string`})
    readonly model:string;

    @IsString()
    @MinLength(3)
    readonly brand:string;




}