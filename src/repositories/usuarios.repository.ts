import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DatasourcemascotafelizDataSource} from '../datasources';
import {Usuarios, UsuariosRelations, Mascotas} from '../models';
import {MascotasRepository} from './mascotas.repository';

export class UsuariosRepository extends DefaultCrudRepository<
  Usuarios,
  typeof Usuarios.prototype.numerodecontacto,
  UsuariosRelations
> {

  public readonly mascotas: HasManyRepositoryFactory<Mascotas, typeof Usuarios.prototype.numerodecontacto>;

  constructor(
    @inject('datasources.datasourcemascotafeliz') dataSource: DatasourcemascotafelizDataSource, @repository.getter('MascotasRepository') protected mascotasRepositoryGetter: Getter<MascotasRepository>,
  ) {
    super(Usuarios, dataSource);
    this.mascotas = this.createHasManyRepositoryFactoryFor('mascotas', mascotasRepositoryGetter,);
    this.registerInclusionResolver('mascotas', this.mascotas.inclusionResolver);
  }
}
