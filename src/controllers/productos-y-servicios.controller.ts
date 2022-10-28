import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Productosyservicios} from '../models';
import {ProductosyserviciosRepository} from '../repositories';

export class ProductosYServiciosController {
  constructor(
    @repository(ProductosyserviciosRepository)
    public productosyserviciosRepository : ProductosyserviciosRepository,
  ) {}

  @post('/productosyservicios')
  @response(200, {
    description: 'Productosyservicios model instance',
    content: {'application/json': {schema: getModelSchemaRef(Productosyservicios)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productosyservicios, {
            title: 'NewProductosyservicios',
            exclude: ['id'],
          }),
        },
      },
    })
    productosyservicios: Omit<Productosyservicios, 'id'>,
  ): Promise<Productosyservicios> {
    return this.productosyserviciosRepository.create(productosyservicios);
  }

  @get('/productosyservicios/count')
  @response(200, {
    description: 'Productosyservicios model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Productosyservicios) where?: Where<Productosyservicios>,
  ): Promise<Count> {
    return this.productosyserviciosRepository.count(where);
  }

  @get('/productosyservicios')
  @response(200, {
    description: 'Array of Productosyservicios model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Productosyservicios, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Productosyservicios) filter?: Filter<Productosyservicios>,
  ): Promise<Productosyservicios[]> {
    return this.productosyserviciosRepository.find(filter);
  }

  @patch('/productosyservicios')
  @response(200, {
    description: 'Productosyservicios PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productosyservicios, {partial: true}),
        },
      },
    })
    productosyservicios: Productosyservicios,
    @param.where(Productosyservicios) where?: Where<Productosyservicios>,
  ): Promise<Count> {
    return this.productosyserviciosRepository.updateAll(productosyservicios, where);
  }

  @get('/productosyservicios/{id}')
  @response(200, {
    description: 'Productosyservicios model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Productosyservicios, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Productosyservicios, {exclude: 'where'}) filter?: FilterExcludingWhere<Productosyservicios>
  ): Promise<Productosyservicios> {
    return this.productosyserviciosRepository.findById(id, filter);
  }

  @patch('/productosyservicios/{id}')
  @response(204, {
    description: 'Productosyservicios PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productosyservicios, {partial: true}),
        },
      },
    })
    productosyservicios: Productosyservicios,
  ): Promise<void> {
    await this.productosyserviciosRepository.updateById(id, productosyservicios);
  }

  @put('/productosyservicios/{id}')
  @response(204, {
    description: 'Productosyservicios PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() productosyservicios: Productosyservicios,
  ): Promise<void> {
    await this.productosyserviciosRepository.replaceById(id, productosyservicios);
  }

  @del('/productosyservicios/{id}')
  @response(204, {
    description: 'Productosyservicios DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.productosyserviciosRepository.deleteById(id);
  }
}
