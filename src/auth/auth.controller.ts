import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { Public } from './decorators/public.decorator';
  import { ApiBearerAuth } from '@nestjs/swagger';
  import { ParamsAuthDto } from './dto/params-auth.dto';
  
  @ApiBearerAuth()
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post()
    /*
    signIn(@Body() signInDto: Record<string, any>) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
    */
    
    signIn(@Body() paramsAuthDto: ParamsAuthDto) {
      return this.authService.signIn(paramsAuthDto);
    }
    
  }
