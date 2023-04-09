# FRONTSQLBLOG

## Front del SQL Blog

**Tarea blog:**

Bienvenido a la documentación del front-end de la tarea blog de Leonardo.

Antes de comenzar, debes tener tanto el back como el front abierto en el visual, el front irá por el puerto 4000 y el back en 3000.

Para tener datos de prueba (algunas cuentas y entradas), debes crear una base de datos en Postgre llamada "blog". Después, abrir el archivo queries.sql del back-end (repositorio APISQLBLOG) e insertar los datos que hay en ella. Crear las dos tablas, entries y authors, y luego insertar los primeros datos de prueba, tanto en authors como en entries. Debes tener en cuenta que todas las contraseñas son 1234, y la usuario ana (ana@correo.es) es administradora.

**FUNCIONALIDADES:**

Es un servicio de entradas de blogs en comunidad, donde el usuario puede ver todas las entradas,crear y editar las suyas. Al hacer login, se muestra en index las últimas entradas publicadas, donde el usuario puede hacer clic en "ver más" y acceder al contenido. También puede acceder a "mis entradas", donde aparecerán sus entradas publicadas, y un botón para poder editarlas. Solo el administrador puede eliminar entradas.

**ADMINISTRADOR:**

Al acceder con una cuenta de administrador, se te redigirá automáticamente a /admin. La interfaz es prácticamente la misma, solo que el administrador tendrá desde el principio (el index), acceso al botón de editar entradas, sin tener que ser suyas. En el panel de control de editar entradas, también podrá eliminarlas, en un botón que pone "eliminar".
