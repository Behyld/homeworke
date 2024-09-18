import { Test, TestingModule } from '@nestjs/testing';
import { HedhehogService } from './hedhehog.service';

describe('HedhehogService', () => {
  let service: HedhehogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HedhehogService],
    }).compile();

    service = module.get<HedhehogService>(HedhehogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
