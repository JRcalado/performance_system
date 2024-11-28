import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsInt,
  IsPositive,
} from 'class-validator';

export class CreateColaboradoresDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  nivel: number;
}

export class UpdateColaboradoresDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsNumber()
  @IsNotEmpty()
  nivel?: number;
}
export class FindColaboradoresDto {
  @IsString()
  @IsOptional()
  nome?: string; // Buscar Colaboradoreses pelo nome (opcional)

  @IsNumber()
  @IsNotEmpty()
  nivel?: number;
}

export class ColaboradoresResponseDto {
  id: number; // ID do Colaboradores
  nome: string; // Nome do Colaboradores
  nivel: number;
}

export class DeleteColaboradoresDto {
  @IsNumber()
  id: number; // ID do Colaboradores a ser deletado
}

export class FindColaboradoresParamsDto {
  @IsInt()
  @IsPositive()
  id: number; // O ID deve ser um número inteiro positivo
}
