import { Controller, Body, Post, Param, Get, Delete } from "@nestjs/common"
import { Car } from "./car.model";

@Controller('cars')
export class CarsController {

    @Post('create')
    async create(@Body() dto: Omit<Car, '_id'>) {

    }
     
    @Get(':id')
    async get(@Param('id') id: string) {

    }

    @Delete('id')
    async delete(@Param('id') id: string) {

    }
    
}