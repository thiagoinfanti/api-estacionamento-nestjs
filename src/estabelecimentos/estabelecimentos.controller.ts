import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { EstabelecimentosService } from './estabelecimentos.service';
import { CreateEstabelecimentoDto } from './dto/create-estabelecimento.dto';
import { UpdateEstabelecimentoDto } from './dto/update-estabelecimento.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
 
@ApiTags("estabelecimentos")
@ApiBearerAuth()
@Controller('estabelecimentos')
export class EstabelecimentosController {
  constructor(private readonly estabelecimentosService: EstabelecimentosService) {}

  @Post()
  async create(@Body() createEstabelecimentoDto: CreateEstabelecimentoDto) {
    return await this.estabelecimentosService.create(createEstabelecimentoDto);
  }

  @Get()
  async findAll() {
    return await this.estabelecimentosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.estabelecimentosService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateEstabelecimentoDto: UpdateEstabelecimentoDto) {
    return await this.estabelecimentosService.update(id, updateEstabelecimentoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number) {
    await this.estabelecimentosService.remove(id);
  }
}
