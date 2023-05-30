import { EstabelecimentosService } from "../../src/estabelecimentos/estabelecimentos.service";
import { EstabelecimentoGatewayInMemory } from "../../src/estabelecimentos/gateways/estabelecimento-gateway-in-memory";
import { Estabelecimento } from "../../src/estabelecimentos/entities/estabelecimento.entity";
describe('Estabelecimentos', () => {
    

    let service: EstabelecimentosService;
    let estabelecimentoGateway: EstabelecimentoGatewayInMemory;
    let estabelecimento: Estabelecimento;

    beforeEach(async () => {
        estabelecimentoGateway = new EstabelecimentoGatewayInMemory();
        service = new EstabelecimentosService(estabelecimentoGateway);
        estabelecimento = await service.create({
            "nome": "aaa",
            "cnpj": "999",
            "endereco": "rua abc",
            "telefone": "11 99999999",
            "vagas_carros": 1,
            "vagas_motos": 1
        });
    });

    it('should be create estabelecimento', async () => {
        expect(estabelecimento.id).toBe(1)
    })

    it('should be find all estabelecimento', async () => {
        const estabelecimento = await service.findAll();
        expect(estabelecimento.length).toBeGreaterThan(0)
    })

    it('should be find one estabelecimento', async () => {
        const estabelecimento = await service.findOne(1)
        expect(estabelecimento.id).toBe(1)
    })

    it('should be update estabelecimento', async () => {
        const estabelecimento = await service.update(1,Object({"nome":"bbb"}))
        expect(estabelecimento.nome).toBe("bbb")
    })

    it('should be delete estabelecimento', async () => {
        await service.remove(1)
    })

})