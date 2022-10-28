import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourcemascotafelizDataSource} from '../datasources';
import {Sucursal, SucursalRelations} from '../models';

export class SucursalRepository extends DefaultCrudRepository<
  Sucursal,
  typeof Sucursal.prototype.id,
  SucursalRelations
> {
  constructor(
    @inject('datasources.datasourcemascotafeliz') dataSource: DatasourcemascotafelizDataSource,
  ) {
    super(Sucursal, dataSource);
  }
}
