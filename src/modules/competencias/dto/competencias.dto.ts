import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsInt,
  IsPositive,
} from 'class-validator';

export class CreateCompetenciasDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  pilar: number;
}

export class UpdateCompetenciasDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsNumber()
  @IsNotEmpty()
  pilar?: number;
}
export class FindCompetenciasDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsNumber()
  @IsNotEmpty()
  pilar?: number;
}

export class CompetenciasResponseDto {
  id: number;
  nome: string;
  pilar: number;
}

export class DeleteCompetenciasDto {
  @IsNumber()
  id: number;
}

export class FindCompetenciasParamsDto {
  @IsInt()
  @IsPositive()
  id: number;
}
