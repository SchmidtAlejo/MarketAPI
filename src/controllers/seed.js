const tiposUsuarios = require("./../data/tiposUsuarios");
const usuarios = require("./../controllers/users");
const categorias = require("./../data/categorias");
const productos = require("./../data/productos");

async function generateSeed(){
    await tiposUsuarios.addTipoUsuairos();
    await createUsers();
    await createCategorias();
    await createProductos();
}

async function createCategorias(){
    const allCategorias = await categorias.getCategorias()
    if(allCategorias.categorias.length===0){
        await categorias.addCategoria({nombre: "Tecnología"});
        await categorias.addCategoria({nombre: "Muebles"});
        await categorias.addCategoria({nombre: "Electrodomesticos"});
        await categorias.addCategoria({nombre: "Herramientas"});
        await categorias.addCategoria({nombre: "Moda"});
    }
    else{
        console.log("Ya hay categorias creadas");
    }
}

async function createUsers(){
    const allUsers= await usuarios.getUsers();
    if(allUsers.users.length === 0){
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
    else{
        console.log("Ya hay usuarios creados");
    }
}

async function createProductos(){
    const allProductos = await productos.getProducto()
    if(allProductos.productos.length === 0){
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
    }
    else{
        console.log('Ya hay productos creados');
    }
}

module.exports = {generateSeed}