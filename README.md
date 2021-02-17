# Proyecto recargaPayTest
En este repositorio se encuentran los test de RecargaPay con Cypress, la consigna es la siguiente:

Realizar la automatización de al menos el siguiente caso:

1) Ingresar al portal de RecargaPay a través del siguiente link (https://recargapay.com.br/)
2) Ir a la opción Recarga de Celular (https://recargapay.com.br/recarga-online)
3) Ingresar el número de celular 1234586456 y presionar “Continuar”
4) Verificar en el popup que se abre que se muestre el mismo número de teléfono ingresado en el paso anterior (1234586456)

 
- Para ejecutar el test se tienen que seguir los siguientes pasos:
 
* Instalar Node JS. Para ello debemos ingresar al siguiente sitio https://nodejs.org/es/ y descargar e instalar la versión TLS.
* Instalar Visual Studio Code. Pueden descargarlo desde el siguiente enlace https://code.visualstudio.com/ . Seleccionar la opción Stable Build.
* Una vez instalado Node y VS, debemos crear una carpeta en la PC donde se encontrará el proyecto.
* Abrir la consola y seleccionar nuestra carpeta creada "Proyecto Cypress\cypress".
* Tipear “npm install –save-dev cypress”, o "npm install cypress" en la consola.
* Ejecutar 'npx cypress open' en la consola
