import { Injectable } from '@nestjs/common';
import { Car } from './car.model';
import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class CarsService {
  carRepository: any;
  constructor(
    @InjectModel(Car)
    private CarsCreation: typeof Car,
  ) {}

}