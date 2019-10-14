import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

export const GQL_QUERY_LAPTOP_LIST: DocumentNode = gql`
  query getAllLaptops {
    getAllLaptops {
      images {
        id
        name
        path
      }
      imageHead {
        id
        name
        path
      }
      id
      barCode
      brand
      name
      type
      color
      condition
      guarantee
      monitorSize
      monitorResolution
      monitorCoverType
      monitorType
      processor
      coreAmount
      memoryRamType
      memoryRamAmount
      videoType
      videoMemoryAmount
      video
      driveType
      driveMemoryAmount
      driveSecondMemoryAmount
      options
      description
      buyStatus
      payStatus
      loacation
      seo
      productType
      createdAt
      updatedAt
      price
      isInStock
      discount
      quantity
    }
  }
`;
