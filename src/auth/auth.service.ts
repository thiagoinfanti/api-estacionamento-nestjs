import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { ParamsAuthDto } from './dto/params-auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
    ){
        ConfigModule.forRoot();
    }

    /*
    async signIn(username: string, pass: string) {
        if(username != process.env.JWT_USER || pass != process.env.JWT_PASSWORD){
            throw new UnauthorizedException('Username or password is invalid');
        }
        return {
            access_token: await this.jwtService.signAsync({username: username}),
        };
    }*/

    async signIn(paramsAuthDto: ParamsAuthDto) {
        if(paramsAuthDto.username != process.env.JWT_USER || paramsAuthDto.password != process.env.JWT_PASSWORD){
            throw new UnauthorizedException('Username or password is invalid');
        }
        return {
            access_token: await this.jwtService.signAsync({username: paramsAuthDto.username}),
        };
    }
}
