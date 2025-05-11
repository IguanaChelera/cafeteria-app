// Mover la definición del tipo Producto a un archivo centralizado
// Crear un archivo types.ts para definir y exportar el tipo Producto

export interface Producto {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  uniqueId?: number; // Identificador único opcional
  quantity: number; // Nueva propiedad para la cantidad
}