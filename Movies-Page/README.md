## Vamos a crear una aplicación sencilla que muestra una lista de películas provenientes de una API de películas. Puedes utilizar la API gratuita de The Movie Database (TMDb). La aplicación tendrá un campo de búsqueda donde el usuario podrá ingresar el nombre de una película y mostrará los resultados coincidentes.

### Pasos para el ejercicio:

#### Configuración inicial:

1. Configura un proyecto React.
2. Crea un componente para el campo de búsqueda y otro para mostrar los resultados.

#### Llamada a la API:

- Usa `useState` para almacenar el valor del campo de búsqueda.
- Usa `useEffect` para realizar la llamada a la API cuando el usuario realiza una búsqueda o cuando el componente se monta.
- Consume la API de películas para buscar las películas por nombre utilizando `fetch` o cualquier otra librería para peticiones HTTP.

#### Mostrar resultados:

- Usa `useState` para almacenar los resultados de la búsqueda.
- Renderiza estos resultados en el componente de visualización de películas.

#### Otras funcionalidades:

- Agrega la capacidad de cargar más resultados al hacer scroll o mediante un botón de "Cargar más".
- Agrega manejo de errores si la búsqueda no devuelve resultados o si hay errores en la petición a la API.
- Utiliza `useCallback` para funciones que deben ser memorizadas para evitar renderizados innecesarios.

Recuerda asegurarte de manejar los casos de carga, error y éxito de la llamada a la API. También puedes implementar la paginación para mostrar más resultados de películas. ¡Espero que este ejercicio te ayude a mejorar tus habilidades con React y el consumo de APIs!


#### links
<!-- parentecis () => cambios -->
- para las imagenes => https://image.tmdb.org/t/p/w500/(7WsyChQLEftFiDOVTGkv3hFpyyt.jpg)
- url de la api => https://api.themoviedb.org/3/search/movie?query=(avenger)&api_key=(ed7271bea97a2214a41a422fdcbbc872)
