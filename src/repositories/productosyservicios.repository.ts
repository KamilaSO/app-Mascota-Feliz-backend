import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourcemascotafelizDataSource} from '../datasources';
import {Productosyservicios, ProductosyserviciosRelations} from '../models';

export class ProductosyserviciosRepository extends DefaultCrudRepository<
  Productosyservicios,
  typeof Productosyservicios.prototype.id,
  ProductosyserviciosRelations
> {
  constructor(
    @inject('datasources.datasourcemascotafeliz') dataSource: DatasourcemascotafelizDataSource,
  ) {
    super(Productosyservicios, dataSource);
  }
}
