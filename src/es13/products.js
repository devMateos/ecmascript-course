// Await hace que espere a que llegue la información del servidor antes de convertirlos en un .json
import fetch from "node-fetch";
const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

export { products };