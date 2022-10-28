import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DatasourcemascotafelizDataSource} from '../datasources';
import {Plan, PlanRelations, Mascotas} from '../models';
import {MascotasRepository} from './mascotas.repository';

export class PlanRepository extends DefaultCrudRepository<
  Plan,
  typeof Plan.prototype.id,
  PlanRelations
> {

  public readonly mascotas: BelongsToAccessor<Mascotas, typeof Plan.prototype.id>;

  constructor(
    @inject('datasources.datasourcemascotafeliz') dataSource: DatasourcemascotafelizDataSource, @repository.getter('MascotasRepository') protected mascotasRepositoryGetter: Getter<MascotasRepository>,
  ) {
    super(Plan, dataSource);
    this.mascotas = this.createBelongsToAccessorFor('mascotas', mascotasRepositoryGetter,);
    this.registerInclusionResolver('mascotas', this.mascotas.inclusionResolver);
  }
}
