import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { EstacionamentosService } from './estacionamentos.service';
import { CreateEstacionamentoDto } from './dto/create-estacionamento.dto';
import { UpdateEstacionamentoDto } from './dto/update-estacionamento.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { get } from 'http';

@ApiTags("estacionamentos")
@ApiBearerAuth()
@Controller('estacionamentos')
export class EstacionamentosController {
  constructor(private readonly estacionamentosService: EstacionamentosService) {}

  @Get("entrada_saida")
  async entranceExit(){
    return await this.estacionamentosService.entranceExit();
  }

  @Get("entrada_saida_por_hora")
  async entranceExitByHour(){
    return await this.estacionamentosService.entranceExitByHour();
  }

  @Post()
  async create(@Body() createEstacionamentoDto: CreateEstacionamentoDto) {
    return await this.estacionamentosService.create(createEstacionamentoDto);
  }

  @Get()
  async findAll() {
    return await this.estacionamentosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.estacionamentosService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateEstacionamentoDto: UpdateEstacionamentoDto) {
    return await this.estacionamentosService.update(id, updateEstacionamentoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number) {
    await this.estacionamentosService.remove(id);
  }

}
