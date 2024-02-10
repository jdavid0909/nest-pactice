import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { BrandsModule } from 'src/brands/brands.module';
import { CarsModule } from 'src/cars/cars.module';

@Module({
  controllers: [SeedController],
  imports:[
    BrandsModule,
    CarsModule
  ],
  providers: [SeedService]
})
export class SeedModule {}
