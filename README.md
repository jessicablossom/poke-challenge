# Poke Challenge


Web app realizada con Reactjs, componentes de Material UI, Styled Components, utilizando la api : [PokeAPI](https://pokeapi.co/) a través de Axios

![Screenshot 2024-03-04 at 03 31 33](https://github.com/jessicablossom/poke-challenge/assets/11197367/73a0fbb3-b3c7-4d8d-a666-d1d37e094f16)

![Screenshot 2024-03-04 at 03 32 31](https://github.com/jessicablossom/poke-challenge/assets/11197367/01eaea84-fde1-42ae-af3d-265e050c00e7)

## Instalacion inicial:

### Clonar el repositorio de github

 ### `npm install` para instalar todas las dependencias
- Material UI
- Styled Components
- Axios
- React Router

## Correr el proyecto:

 ### `npm start`

Corre la aplicacion en development mode.\
Se abre en [http://localhost:3000](http://localhost:3000) en tu navegador preferido.

## Endpoints

API de Pokemones: https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0

API de Tipos de Pokemones: https://pokeapi.co/api/v2/type

API Detalle Pokemon: https://pokeapi.co/api/v2/type/1/

## Detalle del proyecto

El proyecto sigue una estructura organizada, con una vista principal y una página de error (404 Not Found). Se ha implementado React Router para manejar la navegación, lo que permite la expansión del proyecto con nuevas rutas de forma sencilla.
Todas las llamadas a la API se realizan utilizando Axios y están centralizadas en el archivo services/api.js. Se han diseñado varias llamadas para manejar diferentes listas de Pokémon, según las necesidades del proyecto. Además, se implementa una paginación que muestra 8 elementos por página, facilitando la navegación del usuario.
Se ha desarrollado un custom hook para gestionar la lógica de paginación de manera eficiente y reutilizable en todo el proyecto.
La funcionalidad de búsqueda permite a los usuarios encontrar Pokémon por su nombre. Los elementos que coinciden con el término de búsqueda se muestran dinámicamente.
Además, se han añadido filtros que permiten agrupar los Pokémon por su tipo. Esto proporciona una manera rápida y eficaz de explorar los Pokémon según su tipo.

## Mejoras a futuro

- Tarjeta Detallada: Agregar una función para ver información adicional de cada Pokémon en una tarjeta detallada, ya sea en un modal o en una nueva ruta.
- Ordenamiento A-Z: Permitir a los usuarios ordenar la lista de Pokémon alfabéticamente por nombre para facilitar la búsqueda.
- Favoritos: Implementar la opción de marcar Pokémon como favoritos para acceder fácilmente a una lista personalizada.
