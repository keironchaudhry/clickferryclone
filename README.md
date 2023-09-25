# Prueba Tecnica

## Objetivo

_La prueba consiste en implementar un buscador y comparador de precios de billetes de
ferry consultando una API que será provista al implementador. Consistirá en 3 partes
principales_

* _Recoger los parámetros de la búsqueda del usuario (por ejemplo, mediante un
formulario):_
    - _Ruta: Solo habrá dos rutas disponibles, Algeciras - Ceuta (ALGECEUT) y Ceuta-Algeciras (CEUTALGE)_
    - _Fecha de la salida_
    - _Número de pasajeros separados entre adultos, niños y bebés. 2. Consultar la API con los parámetros recogidos para recibir los resultados 3. Mostrar tanta información como sea posible de cada combinación (fechas y horas de salida/llegada, nombres de la naviera (operador), nombre de la acomodación, precio)_

## Capturas de pantalla

* Cómo aparece la búsqueda en el landing page

    ![foto1](/documentation/screenshots/clickferries1.png)

* Despúes de buscar un viaje y con los resultados de la búsqueda:

    ![foto2](/documentation/screenshots/clickferries2.png)

* En caso de que no haya resultados disponibles con los parametros del usuario:

    ![foto3](/documentation/screenshots/clickferries3.png)

## Bugs

Por lo que veo de momento, hay un bug que occurre de vez en cuando al buscar una fecha donde no se dispone de viajes. Basicamente, en vez de mostrar al usuario "No ferries available", la pagina queda blanca. No se occurre siempre pero a veces. 

Una fecha que 100% funciona es el 24/09/2023 a las 23h00, por ejemplo.

## Tecnologia utilizado

La aplicacion utiliza los siguientes libraries:

* [Material UI](https://mui.com/material-ui/getting-started/) para el diseno general y para los componentes
* [DayJS](https://day.js.org/) para formatear las horas recibidas de llegadas y salidas

## Credito

* [ClickFerry](https://www.clickferry.com/es) para conseguir una idea de como funciona ya los parametros en la aplicacion autentica
* [Stack Overflow](https://stackoverflow.com/) para soluciones, especialmente cuando tenia problemas con los APIs
* El uso de [ChatGPT](https://openai.com/blog/chatgpt) fue empleado para ayudar con el debugging de la aplicacion 
