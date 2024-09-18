import { Args, Float, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query(() => String, {description: 'Prueba con Graphql', name: 'agustinmiquel'})
    helloWorld(): string{
        return 'Hola mundo';
    }

    @Query(()=> Float, {name:'randomNumber', description:'usando argumento'})
    getRandomNumber(@Args('to')hola: number): number{
        return Math.random() * hola;
    }
}
