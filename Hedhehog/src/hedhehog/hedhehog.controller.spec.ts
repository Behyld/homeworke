import { Test, TestingModule } from '@nestjs/testing';
import { HedhehogController } from './hedhehog.controller';

describe('HedhehogController', () => {
  let controller: HedhehogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HedhehogController],
    }).compile();

    controller = module.get<HedhehogController>(HedhehogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
