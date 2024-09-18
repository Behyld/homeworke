import { Dragonfly } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
export declare class DragonflyService {
    private prisma;
    constructor(prisma: PrismaService);
    createDragonfly(data: {
        name: string;
        age: number;
        color: string;
    }): Promise<Dragonfly>;
    getDragonfly(): Promise<Dragonfly[]>;
}
