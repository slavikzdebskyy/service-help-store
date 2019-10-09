import { ApolloQueryResult } from 'apollo-client';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { GQL_QUERY_LAPTOP_LIST } from '../shared/types/qraphql/queries/products/laptop-list.query';
import { IProductResponse, IImage } from '@service-help/interfaces';
import { Laptop } from '@service-help/models';
import { environment } from 'src/environments/environment';

interface ILaptopsQueryResponse {
  getAllLaptops: IProductResponse[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private apollo: Apollo) { }

  private updateImagePath(images: IImage[]): IImage[] {
    return images.map((image: IImage) => {
      return {
        path: `${environment.apiURL}${image.path}`,
        id: image.id,
        name: image.name,
      };
    });
  }

  public getAllLaptops(): Observable<Laptop[]> {
    return this.apollo.watchQuery<ILaptopsQueryResponse>({
      query: GQL_QUERY_LAPTOP_LIST,
    })
      .valueChanges
      .pipe(
        map(
          ({ data }: ApolloQueryResult<ILaptopsQueryResponse>) =>
            data.getAllLaptops.map((laptop:IProductResponse) => {
              laptop.imageHead.path = `${environment.apiURL}${laptop.imageHead.path}`;
              if (laptop.images && laptop.images.length) {
                laptop.images = this.updateImagePath(laptop.images);
              }
              return new Laptop(laptop);
            }),
          ),
      );
  }

}
