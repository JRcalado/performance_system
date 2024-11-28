import { Test, TestingModule } from '@nestjs/testing';
import { PilaresService } from './pilares.service';

describe('PilaresService', () => {
  let service: PilaresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PilaresService],
    }).compile();

    service = module.get<PilaresService>(PilaresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
