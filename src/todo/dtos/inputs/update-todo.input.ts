import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength, MinLength } from "class-validator";

@InputType()
export class updateDtoInput {

    @Field(()=>Number)
    @MinLength(1)
    @IsOptional()
    @IsNumber()
    id:number;

    @Field(()=>String)
    @IsNotEmpty()
    @IsOptional()
    @MaxLength(20)
    description: string;

    @Field(()=>Boolean)
    @IsBoolean()
    @IsOptional()
    completed: boolean;
}