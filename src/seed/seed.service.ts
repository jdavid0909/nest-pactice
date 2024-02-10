import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brans.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  

  constructor(
    private carsServices:CarsService,
    private brandsServices:BrandsService
    ){

  }

  populateDb(){


    // CARS_SEED
    // BRANDS_SEED

    this.carsServices.fillCatsWithSeedData(CARS_SEED);
    
    this.brandsServices.fillCatsWithSeedData(BRANDS_SEED);

    return 'Seed ExecuteD'

  }


}
