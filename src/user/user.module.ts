import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UsersService } from './user.service';
import { UserController } from './user.controller';

@Module({
    controllers: [UserController],
    providers: [UsersService],
    imports: [SequelizeModule.forFeature([User])],
    exports: [SequelizeModule,
         UsersService,
    ]
})

export class UserModule {}
