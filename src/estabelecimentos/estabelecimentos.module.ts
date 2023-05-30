import { Module } from '@nestjs/common';
import { EstabelecimentosService } from './estabelecimentos.service';
import { EstabelecimentosController } from './estabelecimentos.controller';
import { EstabelecimentosModel } from './entities/estabelecimento.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstabelecimentoGatewayTypeorm } from './gateways/estabelecimento-gateway-typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EstabelecimentosModel])],
  controllers: [EstabelecimentosController],
  providers: [
    EstabelecimentosService,
    EstabelecimentoGatewayTypeorm,
    {
      provide: 'EstabelecimentoGatewayInterface',
      useExisting: EstabelecimentoGatewayTypeorm
    }
  ],
  exports: [EstabelecimentosService]
})
export class EstabelecimentosModule {}
