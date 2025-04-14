import {
  Body,
  Controller,
  ForbiddenException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CrearUserService } from '../application/crear-user.service';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { CrearUserDto } from 'src/shared/dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly createUserService: CrearUserService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async createUser(@Body() createUserDto: CrearUserDto, @Request() req) {
    if (req.user.role !== 'ADMIN') {
      throw new ForbiddenException(
        'Solo administradores pueden crear usuarios',
      );
    }

    const user = await this.createUserService.execute(createUserDto);
    if (!user) {
      throw new ForbiddenException('Error al crear el usuario');
    }
    return {
      statusCode: 201,
      success: true,
      message: 'Usuario creado exitosamente',
      data: user,
    };
  }
}
