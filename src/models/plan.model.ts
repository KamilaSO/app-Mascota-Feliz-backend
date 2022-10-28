import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Mascotas} from './mascotas.model';

@model()
export class Plan extends Entity {
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
  tipodeplan: string;

  @property({
    type: 'date',
    required: true,
  })
  fechacontratacion: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  beneficios: string;

  @property({
    type: 'number',
    required: true,
  })
  costos: number;

  @property({
    type: 'string',
    required: true,
  })
  comentarios: string;

  @belongsTo(() => Mascotas)
  mascotasId: string;

  constructor(data?: Partial<Plan>) {
    super(data);
  }
}

export interface PlanRelations {
  // describe navigational properties here
}

export type PlanWithRelations = Plan & PlanRelations;
