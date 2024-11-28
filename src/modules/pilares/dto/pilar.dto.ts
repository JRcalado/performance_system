import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsInt,
  IsPositive,
} from 'class-validator';

export class CreatePilarDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}

export class UpdatePilarDto {
  @IsString()
  @IsOptional()
  nome?: string;
}
export class FindPilarDto {
  @IsString()
  @IsOptional()
  nome?: string; // Buscar pilares pelo nome (opcional)
}

export class PilarResponseDto {
  id: number; // ID do pilar
  nome: string; // Nome do pilar
}

export class DeletePilarDto {
  @IsNumber()
  id: number; // ID do pilar a ser deletado
}

export class FindPilarParamsDto {
  @IsInt()
  @IsPositive()
  id: number; // O ID deve ser um número inteiro positivo
}
