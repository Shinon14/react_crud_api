const API_URL = "http://127.0.0.1:8000/api/productos/";


export const listarProductos = async () => {
    return await fetch(API_URL);  
};

export const getProducto = async (productoId) => {
    return await fetch(`${API_URL}${productoId}`);
};


export const registrarProducto = async (nuevoProducto) => {
  
    return await fetch(API_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": String(nuevoProducto.nombre).trim(),
            "descripcion": String(nuevoProducto.descripcion),
            "precio": parseInt(nuevoProducto.precio),
            "stock": parseInt(nuevoProducto.stock),
        })
    });
};

export const borrarProducto = async (productoId) => {
  
    return await fetch(`${API_URL}${productoId}`, {
        method: "DELETE"
    })
};

export const actualizarProducto = async (productoId, actProducto) => {
  
    return await fetch(`${API_URL}${productoId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": String(actProducto.nombre).trim(),
            "descripcion": String(actProducto.descripcion),
            "precio": parseInt(actProducto.precio).trim(),
            "stock": parseInt(actProducto.stock).trim()
        })
    })
};