import {registerDecorator,ValidationOptions,ValidationArguments,} from 'class-validator';
import { VeiculoTipoEnum } from 'src/veiculos/dto/veiculo-tipo.dto';

export function IsValidVehicleType(validationOptions?: ValidationOptions){
    return function (object: object, propertyName: string) {
        registerDecorator({
          name: 'IsValidVehicleType',
          target: object.constructor,
          propertyName: propertyName,
          options: validationOptions,
          validator: {
            validate(value: any, args: ValidationArguments) {
              if (typeof value !== 'string') {
                return false;
              }
    
              return Object.values(VeiculoTipoEnum).includes(
                value as VeiculoTipoEnum,
              );
            },
            defaultMessage(args: ValidationArguments) {
              return `${args.property} must be a of type "${VeiculoTipoEnum.carro}" or "${VeiculoTipoEnum.moto}".`;
            },
          },
        });
      };
}