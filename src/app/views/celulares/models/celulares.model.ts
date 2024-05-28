
export class Celulares {
  constructor (
    _id?:string,
    marca: string="",
    modelo: string="",
    color: string="",
    almacenamiento: string="",
    ram: string="",
    bateria: number=0,
    imei: string="",
    precio: number=0,
    descuento: string="",
    vendido?: boolean,
  ){

  }
}

export class Clientes {
  constructor (
    _id?:string,
    CI: string="",
    Nombre: string="",
    Apellido: string="",
    Correo: string="",
    telefono: number=0,
  ){

  }
}
