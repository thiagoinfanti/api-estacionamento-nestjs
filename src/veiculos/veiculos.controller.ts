import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags("veículos")
@ApiBearerAuth()
@Controller('veiculos')

export class VeiculosController {
  constructor(private readonly veiculosService: VeiculosService) {}

  @Post()
  async create(@Body() createVeiculoDto: CreateVeiculoDto) {
    return await this.veiculosService.create(createVeiculoDto);
  }

  @Get()
  async findAll() {
    return await this.veiculosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.veiculosService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateVeiculoDto: UpdateVeiculoDto) {
    return await this.veiculosService.update(id, updateVeiculoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number) {
    await this.veiculosService.remove(id);
  }
}
