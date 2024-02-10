import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";



export class UpdateCarDto{

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?:string;

    @IsString({message:`the brand most be a cool string`})
    @IsOptional()
    readonly model?:string;

    @IsString()
    @MinLength(3)
    @IsOptional()
    readonly brand?:string;




}