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
  nome?: string;

  @IsNumber()
  @IsNotEmpty()
  nivel?: number;
}

export class ColaboradoresResponseDto {
  id: number;
  nome: string;
  nivel: number;
}

export class DeleteColaboradoresDto {
  @IsNumber()
  id: number;
}

export class FindColaboradoresParamsDto {
  @IsInt()
  @IsPositive()
  id: number;
}
