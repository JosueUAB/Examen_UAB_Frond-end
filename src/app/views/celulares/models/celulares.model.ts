export class Celulares {
  constructor (
    _id?: string,
    marca: string = "",
    modelo: string = "",
    color: string = "",
    almacenamiento: string = "",
    ram: string = "",
    bateria: number = 0,
    imei: string = "",
    precio: number = 0,
    descuento: string = "",
    vendido?: boolean
  ) {
    this._id = _id;
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.almacenamiento = almacenamiento;
    this.ram = ram;
    this.bateria = bateria;
    this.imei = imei;
    this.precio = precio;
    this.descuento = descuento;
    this.vendido = vendido;
  }

  _id?: string;
  marca: string;
  modelo: string;
  color: string;
  almacenamiento: string;
  ram: string;
  bateria: number;
  imei: string;
  precio: number;
  descuento: string;
  vendido?: boolean;
}
