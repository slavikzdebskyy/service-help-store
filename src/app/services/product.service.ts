import { ApolloQueryResult } from 'apollo-client';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { GQL_QUERY_LAPTOP_LIST } from '../shared/types/qraphql/queries/products/laptop-list.query';
import { IProductResponse } from '@service-help/interfaces';
import { Laptop } from '@service-help/models';

interface ILaptopsQueryResponse {
  getAllLaptops: IProductResponse[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private apollo: Apollo) { }

  public getAllLaptops(): Observable<Laptop[]> {
    return this.apollo.watchQuery<ILaptopsQueryResponse>({
      query: GQL_QUERY_LAPTOP_LIST,
    })
      .valueChanges
      .pipe(
        map(
          ({ data }: ApolloQueryResult<ILaptopsQueryResponse>) =>
            data.getAllLaptops.map((laptop:IProductResponse) => new Laptop(laptop)),
          ),
      );
  }
}
