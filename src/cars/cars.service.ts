import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interface/car.interface';
import { v1 as uuid } from 'uuid'
import { CarDto } from './dto/car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Honda',
        //     model: 'Civic'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Jeep',
        //     model: 'Cherokee'
        // },
    ];


    findAll() {
        return this.cars;
    }

    findOneById(id: string) {

        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

        return car;
    }

    create(createCarDto: CarDto) {

        const car: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(car);

        return car;

    }


    updateCar(id: string, carDto: UpdateCarDto) {


        let carDB = this.findOneById(id);

        this.cars = this.cars.map(car => {


            if (car.id === id) {

                carDB = {
                    ...carDB,
                    ...carDto,

                    id
                }

                return carDB
            }



            return car;
        })

        return carDB;
    }

    deleteCar(id: string) {

        const car = this.findOneById(id);

       this.cars = this.cars.filter(car => car.id !==id );

       return car;

    }

    fillCatsWithSeedData (cars: Car[]){

        this.cars = cars
    }


}
