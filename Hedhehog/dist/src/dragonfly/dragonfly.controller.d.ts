import { DragonflyService } from './dragonfly.service';
import { Dragonfly } from '@prisma/client';
export declare class DragonflyController {
    private readonly DragonflyService;
    constructor(DragonflyService: DragonflyService);
    createParrot(data: {
        name: string;
        age: number;
        color: string;
    }): Promise<Dragonfly>;
    getDragonfly(): Promise<Dragonfly[]>;
}
