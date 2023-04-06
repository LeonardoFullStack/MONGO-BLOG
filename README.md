# FRONTSQLBLOG
Front del sql blog

Tarea blog:
Bienvenido a la documentación del front-end de la tarea blog de Leonardo.

Antes de comenzar, debes de tener tanto el back como el front abierto en el visual.

Para tener datos de prueba(Algunas cuentas y entradas), debes abrir el archivo queries.sql del back-end (repositorio APISQLBLOG)
e insertar los datos que hay en ella.
Debes tener en cuenta que todas las contraseñas son 1234, y la usuario ana (ana@correo.es) es administradora.

También puedes crear usuario  y navegar por tu cuenta, pero no tendrás entradas de prueba ni serás administrador.



FUNCIONALIDADES:
Es un servicio de entradas de blogs en comunidad, donde el usuario puede ver todas las entradas, y editar las suyas.
Al hacer login, se muestra en index las últimas entradas publicadas, donde el usuario puede clickar en ver más y acceder al contenido.
También puede acceder a mis entradas, donde saldrán sus entradas publicadas, y un botón para poder editarlos.
Solo el administrador puede eliminar entradas.

ADMINISTRADOR:
Al acceder con una cuenta de administrador, se te redigirá automáticamente a /admin . La interfaz es prácticamente la misma,
solo que el administrador tendrá desde el principio (el index), acceso al botón de editar entradas, sin tener que ser suyas.
En el panel de control de editar entradas,  también podrá eliminarlas, con un botón que pone eliminar.