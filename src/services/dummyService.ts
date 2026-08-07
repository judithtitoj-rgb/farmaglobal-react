import type { DummyAuth, DummyProduct } from '../module/dummyJson'

//const API = './Json/farmacosis.json'
//import API from "../../Json/farmacosis.json"
const API = '../../Json/farmacosis.json'

export const getDummyProducts = async () => {
    //const response = await fetch(`${API}`)
    const response = await fetch(API)
    const data = await response.json() 
    return data
}

export const getProductById = async (id: number) => {
  const response = await fetch("../Json/farmacosis.json");
  const products = await response.json();

  return products.find((p: DummyProduct) => p.id === id);
};  

const API2 = 'https://dummyjson.com'
export const signIn = async (username: string, password: string) => {
    const response = await fetch(`${API2}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })

     if (!response.ok) {
    //     toast.error('Usuario o contraseña incorrectos')
         alert('Usuario o contraseña incorrectos')
        throw new Error("Usuario o contraseña incorrectos")
       
    
    }

    const data = await response.json() as DummyAuth
    return data
}

