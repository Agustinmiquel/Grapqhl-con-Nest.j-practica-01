import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

@InputType()
export class createDtoInput{

    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    @Field(()=> String, {description: "Whats need to be done"})
    description: string;
}