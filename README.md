# toolboxChallenge
Challenge Toolbox - Full Stack

El proyecto se divide en una api para el backend que se encarga de consumir los datos de la api de Toolbox para poder mejorar su muestreo y la estructura de dichos datos para poder tener una mejor lectura tanto de forma general como de forma individual.
La segunda parte consiste en su frontend y se basa en una sencilla pagina con una tabla donde se muestran cada uno de los datos ordenados de una forma mas amigable para el usuario.

API

Cuenta de 2 endpoints que permitiran visualizar los datos de los archivos almacenados de forma general como individual y obtener un listado de todos los archivos presentes.

El proyecto se puede iniciar de forma local con: 

    > npm start

Se pueden activar los tests desarrollados con el comando:

    > npm test

La api cuenta con un dockerfile que nos permite correr en un contenedor la misma.

GET /files/data

    Respuesta:

        [
            {
                "file": "test2.csv",
                "lines": [
                    {
                        "text": "cJk",
                        "number": 59,
                        "hex": "cac3764c37e29589c9d3ced5037d5fa9"
                    }
                ]
            },
            {
                "file": "test3.csv",
                "lines": [
                    {
                        "text": "JKAcSckUuye",
                        "number": 4.499972875308394e+31,
                        "hex": "7bc4717f776976a1602a219e78e968ee"
                    }
                ]
            } ....


---------------- 

GET /files/data?fileName=test2.csv

    Este endpoint requiere de un valor de query params que contenga la estructura de los files listados por la api:

    Ejemplo:

        test4.csv
        test10.csv

    no acepta ningun otro tipo de extension que no sea un .csv

    Respuesta:

        [
            {
                "file": "test2.csv",
                "lines": [
                    {
                        "text": "cJk",
                        "number": 59,
                        "hex": "cac3764c37e29589c9d3ced5037d5fa9"
                    }
                ]
            }
        ]


-----------------

GET /files/list

    Respuesta:

        [
            "test1.csv",
            "test2.csv",
            "test3.csv",
            "test18.csv",
            "test4.csv",
            "test5.csv",
            "test6.csv",
            "test9.csv",
            "test15.csv"
        ]


FRONTEND

El proyecto del frontend cuenta con una sola pagina donde se puede observar la tabla donde se listan los datos recibidos por medio de la api.

La pagina tambien cuenta con un componente dropdown que lista los archivos existentes utilizando el endpoint extra. Al seleccionar uno de los valores la tabla filtrara su contenido con los datos del archivo seleccionado. Cuenta con una opcion de 'All' para volver a listar todos los valores existentes.

