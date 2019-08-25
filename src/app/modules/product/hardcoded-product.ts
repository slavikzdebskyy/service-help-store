import { IProductResponse } from '@service-help/interfaces';
import { BuyStatus, PayStatus, ProductType } from '@service-help/enums';

export const PRODUCT_HARD: IProductResponse = {
  barCode: 'qaswedfrt5454ff',
  brand: 'Samsung',
  color: 'red',
  condition: 'used',
  guarantee: 12,
  monitorSize: 15.6,
  monitorResolution: 'fullHD',
  monitorCoverType: 'type',
  monitorType: 'string',
  processor: 'Intel',
  coreAmount: 4,
  memoryRamType: 'DDR',
  memoryRamAmount: 12,
  videoType: 'integrated',
  videoMemoryAmount: 2,
  driveType: 'SSD',
  driveMemoryAmount: 512,
  description: 'loremwdofjkhsjkfwjfjksfkskfd',
  images: [
    {
      name: 'qq',
      id: 'qw12',
      path: 'https://i1.rozetka.ua/goods/12531254/95236360_images_12531254734.jpg',
    },
    {
      name: 'qq',
      id: 'qw12',
      path: 'https://i1.rozetka.ua/goods/12531253/95236360_images_12531253312.jpg',
    },
    {
      name: 'qq',
      id: 'qw12',
      path: 'https://i1.rozetka.ua/goods/12531253/95236360_images_12531253852.jpg',
    },
    {
      name: 'qq',
      id: 'qw12',
      path: 'https://i1.rozetka.ua/goods/12531252/95236360_images_12531252592.jpg',
    },
    {
      name: 'qq',
      id: 'qw12',
      path: 'https://i1.rozetka.ua/goods/12531251/95236360_images_12531251944.jpg',
    },
    {
      name: 'qq',
      id: 'qw12',
      path: 'https://i2.rozetka.ua/goods/10442253/lenovo_81d600jyra_images_10442253836.jpg',
    },
    {
      name: 'qq',
      id: 'qw12',
      path: 'https://i2.rozetka.ua/goods/10442255/lenovo_81d600jyra_images_10442255948.jpg',
    },
    {
      name: 'qq',
      id: 'qw12',
      path: 'https://i2.rozetka.ua/goods/10442255/lenovo_81d600jyra_images_10442255072.jpg',
    },
  ],
  buyStatus: BuyStatus.ACTIVE,
  payStatus: PayStatus.NOT_PAID,
  productType: ProductType.LAPTOP,
  createdAt: '08-08-2019',
  price: 450,
  isInStock: true,
  discount: 20,
  quantity: 3,
};
