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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planet = exports.Specie = exports.Vehicle = exports.Starship = exports.Film = exports.People = void 0;
const typeorm_1 = require("typeorm");
let People = class People {
};
__decorate([
    (0, typeorm_1.Column)({ primary: true }),
    __metadata("design:type", Number)
], People.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], People.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'birth_year' }),
    __metadata("design:type", String)
], People.prototype, "birthYear", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'eye_color' }),
    __metadata("design:type", String)
], People.prototype, "eyeColor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], People.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hair_color' }),
    __metadata("design:type", String)
], People.prototype, "hairColor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], People.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], People.prototype, "mass", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'skin_color' }),
    __metadata("design:type", String)
], People.prototype, "skinColor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], People.prototype, "homeworld", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], People.prototype, "films", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], People.prototype, "species", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], People.prototype, "starships", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], People.prototype, "vehicles", void 0);
People = __decorate([
    (0, typeorm_1.Entity)('peoples')
], People);
exports.People = People;
let Film = class Film {
};
__decorate([
    (0, typeorm_1.Column)({ primary: true }),
    __metadata("design:type", Number)
], Film.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Film.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'episode_id' }),
    __metadata("design:type", Number)
], Film.prototype, "episodeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'opening_crawl' }),
    __metadata("design:type", String)
], Film.prototype, "openingCrawl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Film.prototype, "director", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Film.prototype, "producer", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'release_date' }),
    __metadata("design:type", String)
], Film.prototype, "releaseDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], Film.prototype, "species", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], Film.prototype, "starships", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], Film.prototype, "vehicles", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], Film.prototype, "characters", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], Film.prototype, "planets", void 0);
Film = __decorate([
    (0, typeorm_1.Entity)('films')
], Film);
exports.Film = Film;
let Starship = class Starship {
};
__decorate([
    (0, typeorm_1.Column)({ primary: true }),
    __metadata("design:type", Number)
], Starship.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Starship.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Starship.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'starship_class' }),
    __metadata("design:type", String)
], Starship.prototype, "starshipClass", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Starship.prototype, "manufacturer", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cost_in_credits' }),
    __metadata("design:type", String)
], Starship.prototype, "costInCredits", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Starship.prototype, "length", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Starship.prototype, "crew", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Starship.prototype, "passengers", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'max_atmosphering_speed' }),
    __metadata("design:type", String)
], Starship.prototype, "maxAtmospheringSpeed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hyperdrive_rating' }),
    __metadata("design:type", String)
], Starship.prototype, "hyperdriveRating", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Starship.prototype, "MGLT", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cargo_capacity' }),
    __metadata("design:type", String)
], Starship.prototype, "cargoCapacity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Starship.prototype, "consumables", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], Starship.prototype, "films", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], Starship.prototype, "pilots", void 0);
Starship = __decorate([
    (0, typeorm_1.Entity)('starships')
], Starship);
exports.Starship = Starship;
let Vehicle = class Vehicle {
};
__decorate([
    (0, typeorm_1.Column)({ primary: true }),
    __metadata("design:type", Number)
], Vehicle.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vehicle.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vehicle.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'vehicle_class' }),
    __metadata("design:type", String)
], Vehicle.prototype, "vehicleClass", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vehicle.prototype, "manufacturer", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vehicle.prototype, "length", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cost_in_credits' }),
    __metadata("design:type", String)
], Vehicle.prototype, "costInCredits", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vehicle.prototype, "crew", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vehicle.prototype, "passengers", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'max_atmosphering_speed' }),
    __metadata("design:type", String)
], Vehicle.prototype, "maxAtmospheringSpeed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cargo_capacity' }),
    __metadata("design:type", String)
], Vehicle.prototype, "cargoCapacity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vehicle.prototype, "consumables", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], Vehicle.prototype, "films", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], Vehicle.prototype, "pilots", void 0);
Vehicle = __decorate([
    (0, typeorm_1.Entity)('vehicles')
], Vehicle);
exports.Vehicle = Vehicle;
let Specie = class Specie {
};
__decorate([
    (0, typeorm_1.Column)({ primary: true }),
    __metadata("design:type", Number)
], Specie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Specie.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Specie.prototype, "classification", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Specie.prototype, "designation", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'average_height' }),
    __metadata("design:type", String)
], Specie.prototype, "averageHeight", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'average_lifespan' }),
    __metadata("design:type", String)
], Specie.prototype, "averageLifespan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'eye_colors' }),
    __metadata("design:type", String)
], Specie.prototype, "eyeColors", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hair_colors' }),
    __metadata("design:type", String)
], Specie.prototype, "hairColors", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'skin_colors' }),
    __metadata("design:type", String)
], Specie.prototype, "skinColors", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Specie.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Specie.prototype, "homeworld", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], Specie.prototype, "people", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], Specie.prototype, "films", void 0);
Specie = __decorate([
    (0, typeorm_1.Entity)('species')
], Specie);
exports.Specie = Specie;
let Planet = class Planet {
};
__decorate([
    (0, typeorm_1.Column)({ primary: true }),
    __metadata("design:type", Number)
], Planet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Planet.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Planet.prototype, "diameter", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rotation_period' }),
    __metadata("design:type", String)
], Planet.prototype, "rotationPeriod", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'orbital_period' }),
    __metadata("design:type", String)
], Planet.prototype, "orbitalPeriod", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Planet.prototype, "gravity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Planet.prototype, "population", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Planet.prototype, "climate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Planet.prototype, "terrain", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'surface_water' }),
    __metadata("design:type", String)
], Planet.prototype, "surfaceWater", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], Planet.prototype, "residents", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Array)
], Planet.prototype, "films", void 0);
Planet = __decorate([
    (0, typeorm_1.Entity)('planets')
], Planet);
exports.Planet = Planet;
//# sourceMappingURL=entities.js.map