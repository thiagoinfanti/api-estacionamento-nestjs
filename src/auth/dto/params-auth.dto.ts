import { IsNotEmpty } from "class-validator";
export class ParamsAuthDto {
    /**
   * user to login
   * @example user
   */
    
    @IsNotEmpty()
    username: string

    /**
   * password to login
   * @example 123456
   */
    @IsNotEmpty()
    password: string
}