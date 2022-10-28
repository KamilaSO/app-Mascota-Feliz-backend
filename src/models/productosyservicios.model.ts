import {Entity, model, property} from '@loopback/repository';

@model()
export class Productosyservicios extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  tipodeproductooservicio: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  costo: number;


  constructor(data?: Partial<Productosyservicios>) {
    super(data);
  }
}

export interface ProductosyserviciosRelations {
  // describe navigational properties here
}

export type ProductosyserviciosWithRelations = Productosyservicios & ProductosyserviciosRelations;
