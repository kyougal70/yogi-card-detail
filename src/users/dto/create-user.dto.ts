import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  cvv?: string;
  @IsString()
  expiryDate?: string;
  @IsNumber()
  cardNumber?: number;
  @IsString()
  cardHolderName?: string;
  @IsString()
  address?: string;
  @IsString()
  zipCode?: string;
  @IsString()
  email?: string;
}
