import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Plan,
  Mascotas,
} from '../models';
import {PlanRepository} from '../repositories';

export class PlanMascotasController {
  constructor(
    @repository(PlanRepository)
    public planRepository: PlanRepository,
  ) { }

  @get('/plans/{id}/mascotas', {
    responses: {
      '200': {
        description: 'Mascotas belonging to Plan',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Mascotas)},
          },
        },
      },
    },
  })
  async getMascotas(
    @param.path.string('id') id: typeof Plan.prototype.id,
  ): Promise<Mascotas> {
    return this.planRepository.mascotas(id);
  }
}
