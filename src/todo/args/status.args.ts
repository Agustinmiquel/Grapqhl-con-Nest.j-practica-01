import { ArgsType, Field } from "@nestjs/graphql";
import { IsBoolean, IsOptional } from "class-validator";

@ArgsType()
export class StatusTodo{

    @Field(()=>Boolean, {nullable: false})
    @IsOptional()
    @IsBoolean()
    status?:boolean;
}