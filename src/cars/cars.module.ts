import { Module } from '@nestjs/common';
import { CarsController } from "./cars.controller";
import { CarsService } from './cars.service';
import { Car } from './car.model';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
    controllers: [CarsController],
    providers: [CarsService],
    imports: [SequelizeModule.forFeature([Car])],
    exports: [SequelizeModule,
        CarsService,
    ]
})
export class CarsModule {}
