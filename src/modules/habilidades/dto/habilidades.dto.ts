import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsInt,
  IsPositive,
} from 'class-validator';

export class CreateHabilidadesDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  nivel: number;

  @IsString()
  @IsNotEmpty()
  descricao: string;
}

export class UpdateHabilidadesDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsNumber()
  @IsNotEmpty()
  nivel?: number;

  @IsString()
  @IsNotEmpty()
  descricao?: string;
}
export class FindHabilidadesDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsNumber()
  @IsNotEmpty()
  nivel?: number;

  @IsString()
  @IsNotEmpty()
  descricao?: string;
}

export class HabilidadesResponseDto {
  id: number;
  nome: string;
  nivel: number;
  descricao: string;
}

export class DeleteHabilidadesDto {
  @IsNumber()
  id: number;
}

export class FindHabilidadesParamsDto {
  @IsInt()
  @IsPositive()
  id: number;
}
