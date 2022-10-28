import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {DatasourcemascotafelizDataSource} from '../datasources';
import {Mascotas, MascotasRelations, Usuarios, Plan} from '../models';
import {UsuariosRepository} from './usuarios.repository';
import {PlanRepository} from './plan.repository';

export class MascotasRepository extends DefaultCrudRepository<
  Mascotas,
  typeof Mascotas.prototype.id,
  MascotasRelations
> {

  public readonly usuarios: BelongsToAccessor<Usuarios, typeof Mascotas.prototype.id>;

  public readonly plan: HasOneRepositoryFactory<Plan, typeof Mascotas.prototype.id>;

  constructor(
    @inject('datasources.datasourcemascotafeliz') dataSource: DatasourcemascotafelizDataSource, @repository.getter('UsuariosRepository') protected usuariosRepositoryGetter: Getter<UsuariosRepository>, @repository.getter('PlanRepository') protected planRepositoryGetter: Getter<PlanRepository>,
  ) {
    super(Mascotas, dataSource);
    this.plan = this.createHasOneRepositoryFactoryFor('plan', planRepositoryGetter);
    this.registerInclusionResolver('plan', this.plan.inclusionResolver);
    this.usuarios = this.createBelongsToAccessorFor('usuarios', usuariosRepositoryGetter,);
    this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
  }
}
