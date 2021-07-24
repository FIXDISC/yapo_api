# YAPO_API

INSTALACION
Pre-requisitos
- Git
- Docker
- Node JS
- WIndows 10

1. Crear carpeta local que contendrá la aplicacion (Ej: C:\ACM_TEST)
2. Dentro de ACM_TEST abrir consola de comandos y ejecutar :  
	C:\ACM_TEST>git clone https://github.com/FIXDISC/yapo_api.git
3. Acceder a la carpeta del proyecto yapo_api :
	cd C:\ACM_TEST\yapo_api\
4. Generar el contenedor :
	C:\ACM_TEST\yapo_api> docker build -t yapo_api .
5. Desplegar la imagen con el proyecto:
	docker run -it -p 8000:8000 yapo_api
6. Navegar en el browser a la direccion:
	http://localhost:8000/pi/?random_limit=10
7. La Api debe responder con mensaje: 
	PI (8): 3.14159265  (Donde 8 es el numero random de decimales) 