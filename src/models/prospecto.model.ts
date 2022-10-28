import {Entity, model, property} from '@loopback/repository';

@model()
export class Prospecto extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  numerodecontacto: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;


  constructor(data?: Partial<Prospecto>) {
    super(data);
  }
}

export interface ProspectoRelations {
  // describe navigational properties here
}

export type ProspectoWithRelations = Prospecto & ProspectoRelations;
