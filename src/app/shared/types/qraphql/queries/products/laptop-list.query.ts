import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

export const GQL_QUERY_LAPTOP_LIST: DocumentNode = gql`
  query getAllLaptops {
    getAllLaptops {
      barCode
      brand
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
      images
      buyStatus
      payStatus
      loacation
      seo
    }
  }
`;
