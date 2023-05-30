import { Module } from '@nestjs/common';
import { EstacionamentosService } from './estacionamentos.service';
import { EstacionamentosController } from './estacionamentos.controller';
import { EstacionamentosModel } from './entities/estacionamento.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstacionamentoGatewayTypeorm } from './gateways/estacionamento-gateway-typeorm';
import { VeiculosModule } from 'src/veiculos/veiculos.module';
import { EstabelecimentosModule } from 'src/estabelecimentos/estabelecimentos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([EstacionamentosModel]),
    VeiculosModule,
    EstabelecimentosModule
  ],
  controllers: [EstacionamentosController],
  providers: [
    EstacionamentosService,
    EstacionamentoGatewayTypeorm,
    {
      provide: 'EstacionamentoGatewayInterface',
      useExisting: EstacionamentoGatewayTypeorm
    }
  ]
})
export class EstacionamentosModule {}
