export class Ventas {
  constructor (
    _id?:string,
    fecha?: Date,
    clienteId: string = "",
    celularId: string = "",
    metododePago:string="",
    total?: number,
    descuentoAplicado?: number

  ) {}
}
