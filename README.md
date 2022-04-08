# Mercado Libre - Front End Challenge

En este repo se encuentra el desafío creado por Mercado Libre para hacer un proyecto que integra la resolución tanto de la parte del cliente (utilizando React.js y Styled Components) como la parte del servidor (construir una API Proxy que consume la API de Mercado Libre, utilizando Express.js).

## Para levantar el proyecto en dev

- Versión de Node.js utilizada: `16.13.1`
- Puerto del cliente: `3000`
- Puerto del servidor: `8080`

Tanto cliente como servidor se ejecutan separadamente, por lo que hay que utilizar dos terminales. Para ejecutar cada uno, desde la carpeta raíz, tirar los siguientes comandos:

**En la terminal del cliente:**
```
cd client
npm install
npm start
```
- `cd client`: Se posiciona sobre la carpeta del proyecto del cliente.
- `npm intall`: Instala las dependencias que figuran en el package.json del cliente. (Solo hace falta hacerlo la primera vez que se levanta el proyecto.)
- `npm start`: Ejecuta el proyecto en dev.

**En la terminal del servidor:**
```
cd server
npm install
npm run dev
```
- `cd client`: Se posiciona sobre la carpeta del proyecto del servidor.
- `npm intall`: Instala las dependencias que figuran en el package.json del servidor. (Solo hace falta hacerlo la primera vez que se levanta el proyecto.)
- `npm run dev`: Ejecuta el proyecto en dev.

## Variables de entorno:
Utilicé un `.env` para almacenar las variables de entorno. Por cuestiones de seguridad, es un archivo ignorado y se dejó un dummy como ejemplo en el archivo `.env.example`.  
De todos modos, por ahora, este proyecto no está utilizando ninguna api key secreta, por lo que para correr el proyecto solo basta crear un archivo nuevo que se llame `.env`, copiar y pegar las variables del dummy, o simplemente renombrar el `.env.example` por `.env`.
