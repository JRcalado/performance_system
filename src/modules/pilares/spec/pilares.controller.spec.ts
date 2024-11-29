import { Test, TestingModule } from '@nestjs/testing';
import { PilarController } from '../controllers/pilares.controller';

describe('PilaresController', () => {
  let controller: PilarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PilarController],
    }).compile();

    controller = module.get<PilarController>(PilarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
