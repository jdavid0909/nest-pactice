import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ) { }

  @Get()
  getAllCars() {
    return this.carsService.findAll()
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {

    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() body: CarDto) {
    return this.carsService.create(body);
  }

  @Patch(':id')
  updateCar(
    @Param('id') id: string,
    @Body() body: UpdateCarDto) {


    return this.carsService.updateCar(id,body);
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string) {
   

    return this.carsService.deleteCar(id);

  }


}
