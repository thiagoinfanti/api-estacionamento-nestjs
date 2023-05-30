import { Module } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { VeiculosController } from './veiculos.controller';
import { VeiculosModel } from './entities/veiculo.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VeiculoGatewayTypeorm } from './gateways/veiculo-gateway-typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VeiculosModel])],
  controllers: [VeiculosController],
  providers: [
    VeiculosService,
    VeiculoGatewayTypeorm,
    {
      provide: 'VeiculoGatewayInterface',
      useExisting: VeiculoGatewayTypeorm
    }
  ],
  exports: [VeiculosService]
})
export class VeiculosModule {}
