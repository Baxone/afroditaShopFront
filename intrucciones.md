### afroditashopFront

  - La aplicación va tener los siguiente de forma publica.
        1. Una parte publica donde se mostraran todos los productos paginados
        2. Un vista-detalle del producto.
        3. Una home con un calltoaction que me lleve a la lista de productos.
        4. Una pagina 404 para ruta no existentes.
        5. un formulario de login y otro de registro de usuarios.

  - La aplicación tendrá en su parte privada. Solo accesible mediante login
        1. Una pagina de perfil donde visualizar y editar los datos del usuario.
        2. Distinguir entre usuario de tipo ADMIN y tipo ROLE.
        3. El usuario de tipo ROLE solo podrá editar su perfil.
        4. El usuario de tipo ADMIN podrá subir, actualizar y borrar productos.
        5. El usuario de tipo ADMIN podrá subir, actualizar y borrar clientes.

### Primera Tarea
   - No os olvideis de crear ramas en GIT.
        - crearia una rama develop y de ahi voy sacando las featured. Consejo una featured por tarea/persona. Cuando terminamos la featured la volcamos en develop. Y hacemos push de develop. Cuando estemos seguros de que todo funciona bien en develop mergeamos a main.
        
   - Crear componente para la parte publica. HOME, ERROR404, PRODUCTLIST, DETAILPRODUCT, LOGIN, REGISTER
   - Crear el servicio para los productos
   - Crear el interfaz para los productos
   - Rutas:
            /home -> HOMECOMPONENT
            /product-list -> PRODUCTLISTCOMPONENT
            /product/1 -> DETAILPRODUCT
            cualquier otra ruta cargar ERROR404

   - Crear el servicio el metodo GETALL y pintarlos en PRODUCTLIST, llamando a las peticiones de nuestro back. "IMPORTANTE EL BACK TIENE QUE ESTAR LEVANTADO"


### Segunda Tarea

  - Crear un component header con un menu de navegación y un logo, el menu tendrá las siguientes opciones home, productos, login, registro, cada una tendrá una ruta especifica definida en routing.

  - home: Cargará un hero con un boton calltoaction a productos.

  - error404 cargará una imagen con el error 404.

  - productList: Cargará la lista de productos con una maquetación visual en bootstrap.

  
  ### Tercera Tarea.
    - Crear la vista de detalle, pintando los datos de cada producto, podeis usar la misma card, poniendola al 100%

    - Crear el formulario de registro de usuario, servicio de usuarios, interfaz de usuario, y form de tipo model con validaciones.

    - form login, hacer login.
    
    - Crear componente profile, crear ruta profile, crear un guard para proteger dicha ruta, que no me deje entrar si no estoy logado (si tengo token);

    


    