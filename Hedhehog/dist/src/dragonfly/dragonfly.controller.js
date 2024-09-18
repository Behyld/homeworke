"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonflyController = void 0;
const common_1 = require("@nestjs/common");
const dragonfly_service_1 = require("./dragonfly.service");
let DragonflyController = class DragonflyController {
    constructor(DragonflyService) {
        this.DragonflyService = DragonflyService;
    }
    async createParrot(data) {
        return this.DragonflyService.createDragonfly(data);
    }
    async getDragonfly() {
        return this.DragonflyService.getDragonfly();
    }
};
exports.DragonflyController = DragonflyController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DragonflyController.prototype, "createParrot", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DragonflyController.prototype, "getDragonfly", null);
exports.DragonflyController = DragonflyController = __decorate([
    (0, common_1.Controller)('Dragonfly'),
    __metadata("design:paramtypes", [dragonfly_service_1.DragonflyService])
], DragonflyController);
//# sourceMappingURL=dragonfly.controller.js.map