import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from "uuid";

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createAtr: new Date().getTime()
    // }

  ]


  create(createBrandDto: CreateBrandDto) {

    const { name } = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createAtr: new Date().getTime()

    }

    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);

    if (!brand) {
      throw new NotFoundException(`no se encontro el ${id}`)
    }

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {

    let brandDB: Brand = this.findOne(id);
    

    this.brands = this.brands.map(brand => {
      if (brand.id === id) {

        brandDB.updatedAt = new Date().getTime()
        brandDB = { ...brandDB, ...updateBrandDto, id }

        console.log(1,brandDB);
        
        return brandDB;
      }

      console.log(2,brandDB);
      return brand;

    });

    return updateBrandDto;

  }

  remove(id: string) {
    const brand:Brand = this.findOne(id);

    this.brands = this.brands.filter(car => car.id !== id);

    return brand;
  }

  fillCatsWithSeedData (brands: Brand[]){

    this.brands = brands
}
}
