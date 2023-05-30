import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { VeiculosModule } from './veiculos/veiculos.module';
import { EstabelecimentosModule } from './estabelecimentos/estabelecimentos.module';
import { AuthModule } from './auth/auth.module';
import { EstacionamentosModule } from './estacionamentos/estacionamentos.module';




@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPE_DB,
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [__dirname + '/**/entities/*.model{.js,.ts}'],
      synchronize: true,
    } as TypeOrmModuleOptions),
    VeiculosModule,
    EstabelecimentosModule,
    AuthModule, EstacionamentosModule
  ],
  
})
export class AppModule {}
