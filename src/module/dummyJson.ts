export interface DummyResponse {
    limit: number
    products: Array<DummyProduct>
    skip: number
    total: number
}
export interface DummyProduct {
    id: number
    nombre: string
    categoria: string
    precio: number
    stock: number
    descuento: number
    imagen: string
    laboratorio: string
    tipo: string
    quantity: number
  
}

export interface DummyAuth {
    accessToken: string,
    refreshToken: string,
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
    role: string
}

export interface User {
    id: number
    firstName: string
    lastName: string
    age: number
    email: string
    phone: string
    image: string
    role: string
    address: {
        city: string
    }

    bank: {
        cardExpire: string
        cardNumber: string
        cardType: string
    }
}

export interface UserResponse {
    users: User[]
}

export interface Delivery {
    idPedido: number;
    dni: string;
    nombreCompleto: string;
    telefonoMovil: string;
    geolocalizacion: {
        latitud: number;
        longitud: number;
    };
    direccionEntrega: string;
    medicamento: {
        nombreComercial: string;
        nombreGenerico: string;
    };
    numeroLote: string;
    fechaCaducidad: string;
    condicionesConservacion: string;
    cantidad: number;
    precio: number;
    costoDelivery: number;
    tiempoEstimadoEntrega: string;
    medioPago: string;
    comprobante: string;
    estadoPedido: string;
    repartidor: string;
    observaciones: string;
}