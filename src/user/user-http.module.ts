import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { UserModule } from './user.module';

@Module({
    imports: [UserModule],
    providers: [UsersService],
    controllers: [UserController]
})
export class UserHttpModule {}
