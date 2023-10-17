import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CarsModule } from './cars/cars.module';
import { UserController } from './user/user.controller';
import { UsersService } from './user/user.service';

@Module({
  controllers: [UserController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MSQL_HOST,
      port: Number(process.env.MSQL_PORT),
      username: process.env.MSQL_USER,
      password: process.env.MSQL_PASSWORD,
      database: process.env.MSQL_DB,
      models: [User],

    }),
    UserModule,
    AuthModule,
    CarsModule
  ],
})
export class AppModule {}
