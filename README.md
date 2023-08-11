# rubiko-basic-docker

## Descripción:

## Aplicación dockerizable con dos servicios:

**Web:**

- Levanta un servidor en Node.js utilizando Express capaz de recibir peticiones HTML al endpoint `"/health"` con una variable de entorno `GREETINGS` donde podemos escribir un mensaje que será envíado en la respuesta.

**cURL:**

- Ejecuta una petición al servicio web anteriormente mencionado.

## Instrucciones:

## Docker

1. Instala docker en tu sistema.
2. Clona este repositorio.
3. Abre una terminal en el directorio raíz del repositorio.
4. Construye la imagen Docker:
   `docker build -t rubiko-basic-docker .`
5. Ejecuta el contenedor:
   `docker run -p 5050:5000 -e GREETINGS="Hello Rubiko Tech!" rubiko-basic-docker`
6. Para acceder a la aplicación puedes utilizar un navegador, Postman o cUrl en esta dirección: `http://localhost:5050/health`

## Docker-Compose

1. Instala docker-compose en tu sistema.
2. Clona este repositorio (si no lo has hecho antes).
3. Abre una terminal en el directorio raíz del repositorio.
4. Ejecuta Docker Compose:
   `docker-compose up`

## Opcional

Si quisieras cambiar el mensaje de la respuesta entra en el archivo `docker-compose.yaml` y modifica la variable de entorno `GREETINGS`
