const tiposUsuarios = require("./../data/tiposUsuarios");
const usuarios = require("./../controllers/users");
const categorias = require("./../data/categorias");
const productos = require("./../data/productos");

async function generateSeed() {
    await tiposUsuarios.addTipoUsuairos();
    await createUsers();
    await createCategorias();
    await createProductos();
}

async function createCategorias() {
    const allCategorias = await categorias.getCategorias()
    if (allCategorias.categorias.length === 0) {
        await categorias.addCategoria({ nombre: "Tecnología" });
        await categorias.addCategoria({ nombre: "Muebles" });
        await categorias.addCategoria({ nombre: "Electrodomesticos" });
        await categorias.addCategoria({ nombre: "Herramientas" });
    }
    else {
        console.log("Ya hay categorias creadas");
    }
}

async function createUsers() {
    const allUsers = await usuarios.getUsers();
    if (allUsers.users.length === 0) {
        await usuarios.addUser({
            email: "schmidtalejo@gmail.com",
            contrasenia: "pass",
            nombre: "Alejo",
            apellido: "Schmidt",
            dni: 44079893,
            nroTelefono: "1130493759"
        });
        await usuarios.addUser({
            email: "ejemplo1@ejemplo.com",
            contrasenia: "pass",
            nombre: "Roberto",
            apellido: "Sánchez",
            dni: 22079893,
            nroTelefono: "1140313759"
        });
        await usuarios.addUser({
            email: "ejemplo2@ejemplo.com",
            contrasenia: "pass",
            nombre: "Alberto",
            apellido: "Perez",
            dni: 22079200,
            nroTelefono: "1178783759"
        });
    }
    else {
        console.log("Ya hay usuarios creados");
    }
}

async function createProductos() {
    const allProductos = await productos.getProducto()
    if (allProductos.productos.length === 0) {
        productos.addProducto({
            nombre: "PS5",
            descripciones: "descripciones PS5",
            precio: 444900,
            activo: true,
            stock: 10,
            imagen: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Samsung Galaxy S23 Ultra",
            descripciones: "descripciones Samsung Galaxy S23 Ultra",
            precio: 475999,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_973917-MLA53452120688_012023-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Xiaomi Redmi Note 10 5G - Gris grafito - 128 GB - 4 GB",
            descripciones: "descripciones Xiaomi Redmi Note 10 5G - Gris grafito - 128 GB - 4 GB",
            precio: 124699,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_966955-MLA48579050616_122021-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Telefunken TK3222K5",
            descripciones: "descripciones Telefunken TK3222K5",
            precio: 67999,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_835485-MLA54964000518_042023-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Motorola Moto E13 64gb 2gb Ram Azul Turquesa",
            descripciones: 'El celular Motorola Moto E13 cuenta con un diseño sofisticado y espectacular. Obtén el estilo que estabas esperando con el moto e13. Su diseño delgado te proporciona una experiencia audiovisual multidimensional con audio Dolby Atmos y una pantalla ultraamplia HD+ de 6.5".',
            precio: 63360,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_818200-MLA54005510824_022023-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Samsung Galaxy A04e 64 GB negro 3 GB RAM",
            descripciones: 'Doble cámara y más detalles. Sus 2 cámaras traseras de 13 Mpx/2 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo.',
            precio: 75999,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_933648-MLA53352642912_012023-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Motorola Moto G13 128gb 4gb Ram Rosa",
            descripciones: 'Mayor Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar.',
            precio: 101370,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_943948-MLU70795868350_082023-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Moto G13 128 GB gris oxford 4 GB RAM",
            descripciones: 'Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.',
            precio: 109999,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_998171-MLA54488300000_032023-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Gadnic CK32 CAMKID1X compacta color rosa",
            descripciones: 'Con tu cámara Gadnic capturar momentos y guardar recuerdos para siempre es posible. Imágenes únicas, comodidad inigualable. Es ideal para captar momentos con gran calidad de imagen y facilidad de uso. Solo necesitás apuntar y disparar para obtener excelentes fotos y videos en alta definición, que vas a ver reflejados en la pantalla integrada. Su tamaño y practicidad la vuelven la candidata perfecta para llevar a todos lados.',
            precio: 15199,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_957899-MLA46557830347_062021-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Gadnic CK33 compacta color amarillo y celeste",
            descripciones: 'Con tu cámara Gadnic capturar momentos y guardar recuerdos para siempre es posible. Imágenes únicas, comodidad inigualable. Es ideal para captar momentos con gran calidad de imagen y facilidad de uso. Solo necesitás apuntar y disparar para obtener excelentes fotos y videos en alta definición, que vas a ver reflejados en la pantalla integrada. Su tamaño y practicidad la vuelven la candidata perfecta para llevar a todos lados.',
            precio: 18099,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_702422-MLA45466991131_042021-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Cámara De Video Gadnic Extreme 10 4k Mcdep010 Ntsc/pal Gris",
            descripciones: 'Gadnic es una compañía argentina dedicada a desarrollar productos tecnológicos accesibles y de muy buenas prestaciones. Todos sus productos son fabricados bajo estrictos estándares de calidad, tanto nacionales como internacionales. Año a año se posiciona como una de las marcas con mayor crecimiento en los principales sitios de e-commerce de Argentina y de toda Latinoamérica.',
            precio: 130000,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_845368-MLA48690516376_122021-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Camara Digital Mirrorless Sony A6400 4k Wifi Sel1650",
            descripciones: 'Sony, marca líder a nivel mundial en el ámbito de la fotografía, fabrica productos de alta performance, sin descuidar la elegancia en sus diseños.\n\nFotos en todo momento.\n Esta cámara se adapta a tu ritmo de vida y te ofrece excelentes resultados en situaciones complejas. En situaciones con poca iluminación o cuando necesitás realizar tomas de escenas rápidas, la cámara sin espejos sortea todos los obstáculos para ofrecer fotografías nítidas y videos en alta calidad. Su peso ligero y resultados increíbles la convierten en tu compañera ideal.',
            precio: 1875000,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_906341-MLU72700584221_112023-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Electroland Mini cámara X200 compacta color verde",
            descripciones: 'Con tu cámara Electroland capturar momentos y guardar recuerdos para siempre es posible.\n\nImágenes únicas, comodidad inigualable\nEs ideal para captar momentos con gran calidad de imagen y facilidad de uso. Solo necesitás apuntar y disparar para obtener excelentes fotos y videos en alta definición, que vas a ver reflejados en la pantalla integrada. Su tamaño y practicidad la vuelven la candidata perfecta para llevar a todos lados.',
            precio: 14999,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_643620-MLA54579556398_032023-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Camara Deportiva 4k Pantalla Touch Ganidc Sumergible Accesor Color Negro",
            descripciones: 'Gadnic es una compañía argentina dedicada a desarrollar productos tecnológicos accesibles y de muy buenas prestaciones. Todos sus productos son fabricados bajo estrictos estándares de calidad, tanto nacionales como internacionales. Año a año se posiciona como una de las marcas con mayor crecimiento en los principales sitios de e-commerce de Argentina y de toda Latinoamérica.',
            precio: 140000,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_875816-MLU72112722092_102023-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Smart Tv 32¨ Philips Android Hd 32phd6917/77 + Bluetooth",
            descripciones: 'Este Android TV de Philips intensifica la emoción de cualquier contenido que veas. Es compatible con barras de sonido Dolby Atmos, proporcionando un sonido surround tridimensional virtual que fluye por encima y alrededor de ti.',
            precio: 110999,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_784986-MLU72560256537_102023-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Android Tv Philips Led Full Hd 43 Pulgadas Negro 43pfd6917",
            descripciones: 'Android Tv Philips Led Full Hd 43 Pulgadas Negro 43pfd6917',
            precio: 174999,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_876453-MLU72490788844_102023-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Smart Tv Samsung 2021 Un50au7000gczb Uhd 4k Tizen Led 50",
            descripciones: 'Disfruta de colores vibrantes y una imagen vívida con el Smart Tv Samsung 2021 Un50au7000gczb Uhd 4k Tizen Led 50.',
            precio: 269999,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_674873-MLU72336794057_102023-O.webp",
            categoriaId: 1,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Sillon",
            descripciones: "descripciones Sillon",
            precio: 49900,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_978869-MLA51987908977_102022-O.webp",
            categoriaId: 2,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Placard",
            descripciones: "descripciones Placard",
            precio: 69000,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_794926-MLA51838863640_102022-O.webp",
            categoriaId: 2,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Baul De Madera De Pino",
            descripciones: "descripciones Baul De Madera De Pino",
            precio: 6999,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_981710-MLA53764717622_022023-O.webp",
            categoriaId: 2,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Mesa Eames 120x80",
            descripciones: "descripciones Mesa Eames 120x80",
            precio: 43632,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_837108-MLA50786213328_072022-O.webp",
            categoriaId: 2,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Mesa de Comedor de Madera Maciza",
            descripciones: 'Esta hermosa mesa de comedor está hecha de madera maciza de alta calidad, lo que le brinda una gran durabilidad y un aspecto elegante. Es perfecta para reuniones familiares y cenas con amigos.',
            precio: 29999,
            activo: true,
            stock: 5,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_692128-MLA51165939021_082022-O.webp",
            categoriaId: 2, 
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Sofá de Cuero Genuino",
            descripciones: 'Este sofá de cuero genuino ofrece un confort excepcional y un diseño moderno. Es el complemento perfecto para tu sala de estar y está diseñado para resistir el paso del tiempo.',
            precio: 59999,
            activo: true,
            stock: 3,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_907258-MLA70411312459_072023-O.webp",
            categoriaId: 2, 
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Cama King Size con Cabecero Acolchado",
            descripciones: 'Esta espaciosa cama king size te brindará un descanso de lujo. Su cabecero acolchado y su diseño elegante la convierten en el punto focal de tu dormitorio.',
            precio: 44999,
            activo: true,
            stock: 8,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_950096-MLA49989214755_052022-O.webp",
            categoriaId: 2, 
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Escritorio de Oficina Moderno",
            descripciones: 'Este elegante escritorio de oficina está diseñado para aumentar la productividad. Con amplio espacio de trabajo y almacenamiento, es perfecto para profesionales que trabajan desde casa.',
            precio: 34999,
            activo: true,
            stock: 6,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_690221-MLA42032560939_062020-O.webp",
            categoriaId: 2, 
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Silla de Comedor Tapizada",
            descripciones: 'Estas sillas de comedor tapizadas son cómodas y elegantes. Ideales para complementar tu mesa de comedor y darle un toque de sofisticación a tus comidas.',
            precio: 1499,
            activo: true,
            stock: 12,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_793556-MLA42831897708_072020-O.webp",
            categoriaId: 2, 
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Armario de Dormitorio de 3 Puertas",
            descripciones: 'Este amplio armario de dormitorio ofrece una solución de almacenamiento perfecta. Con múltiples estantes y espacio para colgar, mantendrá tu ropa organizada.',
            precio: 24999,
            activo: true,
            stock: 4,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_989099-MLA27695070719_072018-O.webp",
            categoriaId: 2, 
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Estantería Modular de Madera",
            descripciones: 'Esta estantería modular te permite personalizar tu espacio de almacenamiento. Puedes configurarla de diversas maneras para exhibir libros, decoraciones y objetos personales.',
            precio: 1999,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_776447-MLA51664659454_092022-O.webp",
            categoriaId: 2, 
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Cómoda Vintage de Madera Tallada",
            descripciones: 'Esta cómoda vintage combina funcionalidad y estilo. Sus detalles tallados y acabado envejecido le dan un encanto antiguo que encaja perfectamente en dormitorios o espacios de estar.',
            precio: 2999,
            activo: true,
            stock: 7,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_660102-MLA51454152713_092022-O.webp",
            categoriaId: 2, 
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Sillón Reclinable de Cuero",
            descripciones: 'Este lujoso sillón reclinable de cuero es perfecto para relajarte. Con múltiples posiciones de reclinado y un diseño ergonómico, es ideal para ver películas o leer un libro.',
            precio: 4499,
            activo: true,
            stock: 5,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_856684-MLA70178659761_062023-O.webp",
            categoriaId: 2, 
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Mesa de Centro de Vidrio Templado",
            descripciones: 'Esta mesa de centro elegante cuenta con una superficie de vidrio templado y una base metálica resistente. Es perfecta para dar un toque moderno a tu sala de estar.',
            precio: 2499,
            activo: true,
            stock: 8,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_967981-MCO32659593508_102019-O.webp",
            categoriaId: 2, 
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Mesita de Noche Moderna con Cajones",
            descripciones: 'Esta mesita de noche moderna es perfecta para tu dormitorio. Cuenta con cajones para guardar tus objetos personales y un diseño minimalista.',
            precio: 799,
            activo: true,
            stock: 15,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_989184-MLA52852601044_122022-O.webp",
            categoriaId: 2, 
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Refrigerador Side-by-Side de Acero Inoxidable",
            descripciones: 'Este refrigerador de gran capacidad es perfecto para mantener tus alimentos frescos y organizados. Cuenta con dispensador de agua y hielo, además de un elegante acabado de acero inoxidable.',
            precio: 24999,
            activo: true,
            stock: 5,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_770440-MLA51044564775_082022-O.webp",
            categoriaId: 3,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Lavadora de Carga Frontal de Alta Eficiencia",
            descripciones: 'Esta lavadora de carga frontal ahorra energía y agua, lo que la hace amigable con el medio ambiente. Tiene múltiples programas de lavado y una capacidad generosa.',
            precio: 15999,
            activo: true,
            stock: 8,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_996804-MLU72566438460_112023-O.webp",
            categoriaId: 3,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Horno de Microondas de 1.2 Cuartos",
            descripciones: 'Este horno de microondas es perfecto para calentar alimentos y cocinar rápidamente. Cuenta con múltiples funciones y una capacidad de 1.2 cuartos para tus comidas diarias.',
            precio: 1499,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_772171-MLA47425763143_092021-O.webp",
            categoriaId: 3,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Cafetera de Espresso Automática",
            descripciones: 'Esta cafetera de espresso automática te permite disfrutar de espresso de alta calidad en casa. Cuenta con molinillo integrado y una amplia gama de ajustes de preparación.',
            precio: 7999,
            activo: true,
            stock: 6,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_602441-MLU69370777647_052023-O.webp",
            categoriaId: 3,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Aspiradora Robot Inteligente",
            descripciones: 'Esta aspiradora robot inteligente hace la limpieza de tu hogar más fácil. Programa horarios de limpieza, controla desde tu smartphone y disfruta de su navegación autónoma.',
            precio: 4999,
            activo: true,
            stock: 12,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_886450-MLU71621417415_092023-O.webp",
            categoriaId: 3,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Licuadora de Alta Potencia con Vaso de Vidrio",
            descripciones: 'Esta licuadora de alta potencia es ideal para hacer batidos y mezclas suaves. Cuenta con un vaso de vidrio resistente y múltiples configuraciones de velocidad.',
            precio: 2999,
            activo: true,
            stock: 8,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_659846-MLU72631566459_112023-O.webp",
            categoriaId: 3,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Horno de Convección de Acero Inoxidable",
            descripciones: 'Este horno de convección de acero inoxidable es perfecto para cocinar una variedad de platos. Cuenta con funciones de horneado, asado y convección para resultados deliciosos.',
            precio: 5499,
            activo: true,
            stock: 7,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_767579-MLA40347552815_012020-O.webp",
            categoriaId: 3,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Secadora de Ropa de Carga Frontal",
            descripciones: 'Esta secadora de ropa de carga frontal es eficiente y cuidadosa con tus prendas. Ofrece múltiples programas de secado y una gran capacidad para manejar tus necesidades de lavandería.',
            precio: 7999,
            activo: true,
            stock: 5,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_747423-MLU72643210275_112023-O.webp",
            categoriaId: 3,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Batidora de Mano Eléctrica",
            descripciones: 'Esta batidora de mano eléctrica es ideal para mezclar y batir. Viene con varios accesorios y múltiples velocidades para adaptarse a tus necesidades culinarias.',
            precio: 1299,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_857086-MLA45187483843_032021-O.webp",
            categoriaId: 3,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Robot de Cocina Multifuncional con Pantalla Táctil",
            descripciones: 'Este robot de cocina multifuncional simplifica la preparación de comidas. Con múltiples funciones, desde cortar y picar hasta cocinar al vapor, es una herramienta versátil en la cocina.',
            precio: 5999,
            activo: true,
            stock: 5,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_807568-MLU72516110299_102023-O.webp",
            categoriaId: 3,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Hervidor Eléctrico de Agua de Acero Inoxidable",
            descripciones: 'Este hervidor eléctrico de agua es rápido y eficiente. Lleva el agua a ebullición en minutos y cuenta con apagado automático para mayor seguridad.',
            precio: 1499,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_828424-MLA40194179999_122019-O.webp",
            categoriaId: 3,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Ventilador de Torre con Control Remoto",
            descripciones: 'Este ventilador de torre es ideal para mantener tu hogar fresco en días calurosos. Incluye un control remoto y múltiples velocidades para una comodidad personalizada.',
            precio: 1999,
            activo: true,
            stock: 7,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_643175-MLU72660895464_112023-O.webp",
            categoriaId: 3,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Plancha de Pelo Iónica con Pantalla Digital",
            descripciones: 'Esta plancha de pelo iónica es perfecta para alisar y dar forma a tu cabello. La tecnología iónica reduce el frizz y da un aspecto suave y brillante.',
            precio: 2499,
            activo: true,
            stock: 6,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_679509-MLA44728822852_012021-O.webp",
            categoriaId: 3,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Purificador de Aire con Filtro HEPA",
            descripciones: 'Este purificador de aire con filtro HEPA elimina partículas y alérgenos del aire. Es ideal para mejorar la calidad del aire en tu hogar, especialmente en habitaciones con alergias o asma.',
            precio: 2999,
            activo: true,
            stock: 8,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_796860-MLU72628056150_112023-O.webp",
            categoriaId: 3,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Batidora de Vaso de Alta Potencia con Programas Preestablecidos",
            descripciones: 'Esta batidora de vaso de alta potencia es perfecta para hacer batidos, sopas y salsas. Cuenta con programas preestablecidos y cuchillas afiladas para resultados perfectos.',
            precio: 3499,
            activo: true,
            stock: 5,
            imagen: "https://www.bidcom.com.ar/publicacionesML/productos/BATI004X/1000x1000-BATI004R.jpg",
            categoriaId: 3,
            vendedorId: 1,
        });        
        productos.addProducto({
            nombre: "Taladro Inalámbrico de 20V con Juego de Brocas",
            descripciones: 'Este taladro inalámbrico es perfecto para proyectos de bricolaje. Con una batería de 20V y un juego de brocas incluido, es versátil y conveniente.',
            precio: 1999,
            activo: true,
            stock: 8,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_656678-MLA69951087361_062023-O.webp",
            categoriaId: 4,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Sierra Circular de 7.25 Pulgadas con Guía Láser",
            descripciones: 'Esta sierra circular es ideal para cortes precisos en madera y otros materiales. La guía láser facilita el alineamiento y la hoja de sierra afilada proporciona resultados limpios.',
            precio: 2999,
            activo: true,
            stock: 6,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_979324-MLA46217462113_052021-O.webp",
            categoriaId: 4,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Juego de Llaves Inglesas de 12 Piezas",
            descripciones: 'Este juego de llaves inglesas incluye una variedad de tamaños para múltiples aplicaciones. Son duraderas y fáciles de ajustar, ideales para trabajos de mecánica y fontanería.',
            precio: 1499,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_624834-MLU72531534604_102023-O.webp",
            categoriaId: 4,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Soldador Eléctrico de 60W con Kit de Soldadura",
            descripciones: 'Este soldador eléctrico es perfecto para trabajos de soldadura eléctrica y electrónica. Incluye un kit de soldadura con puntas y estaño para proyectos precisos.',
            precio: 1499,
            activo: true,
            stock: 7,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_621624-MLA46608278558_072021-O.webp",
            categoriaId: 4,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Martillo de Carpintero de 16 oz con Mango de Fibra de Vidrio",
            descripciones: 'Este martillo de carpintero es esencial para proyectos de construcción y carpintería. Tiene un mango de fibra de vidrio que absorbe los golpes y reduce la fatiga.',
            precio: 799,
            activo: true,
            stock: 12,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_981681-MLU70654921372_072023-O.webp",
            categoriaId: 4,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Llave de Impacto Inalámbrica de 20V con Batería y Estuche",
            descripciones: 'Esta llave de impacto inalámbrica es ideal para cambiar neumáticos y apretar pernos. Viene con una batería recargable y un estuche de transporte conveniente.',
            precio: 2499,
            activo: true,
            stock: 5,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_645838-MLU72405691717_102023-O.webp",
            categoriaId: 4,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Juego de Destornilladores de Precisión de 9 Piezas",
            descripciones: 'Este juego de destornilladores de precisión es perfecto para trabajos electrónicos y de reparación. Incluye una variedad de puntas para adaptarse a diferentes tornillos.',
            precio: 999,
            activo: true,
            stock: 10,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_696857-MLA49001851290_022022-O.webp",
            categoriaId: 4,
            vendedorId: 1,
        });
        productos.addProducto({
            nombre: "Nivel Láser Autonivelante de 360 grados",
            descripciones: 'Este nivel láser es perfecto para tareas de alineación y nivelación. Proyecta una línea láser visible en 360 grados para un trabajo preciso.',
            precio: 2999,
            activo: true,
            stock: 6,
            imagen: "https://http2.mlstatic.com/D_NQ_NP_669410-MLA42258602085_062020-O.webp",
            categoriaId: 4,
            vendedorId: 1,
        });
        
    }
    else {
        console.log('Ya hay productos creados');
    }
}

module.exports = { generateSeed }