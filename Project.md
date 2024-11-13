# Artefacto backend-devops

## Descripcion

Este proyecto es una implementacion que contiene 3 funcionalidades o modulos principales, los cuales son los siguientes:


- **calculadora.ts**: Este modulo tiene un listado de funciones que permiten realizar operaciones arimecticas de (suma y resta)

- **numero.ts**: Este modulo tiene una funcion booleana la cual valida si un numero es Primo o No

- ***palabras.ts**: Este modulo tiene una funcion booleana la cual valida si una string(frase) es Palindro o capicua (Es una secuencia de caracteres que se lee igual de izquierda a derecha que de derecha a izquierda, ignorando espacios y diferencia entre mayusculas y minusculas)


## Uso del Proyecto
Para poder utilizar las funcionalidades que provee el artefacto, tenemos el siguiente listado de endpoints:

- **http://localhost:3001/**: Muestra informacion relacionada al usuario que ha levantado el servidor y el puerto de escucha.
- **http://localhost:3001/api-key**: Muestra informacion referente a la API KEY de la aplicacion
- **http://localhost:3001/operar?operacion=<suma|resta>&num1=<valor numerico>&num2=<valor numerico>**: Muestra informacion referente al calculo de una operacion aritmetica (suma o resta)
- **http://localhost:3001/palindromo?frase=<string>**: Valida si un string coincide con la secuencia de caracteres (capicua o palindro)
- **http://localhost:3001/primo?numero=<number>**: Valida si un numero es Primo o no