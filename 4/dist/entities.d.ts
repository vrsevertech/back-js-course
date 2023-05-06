export declare class People {
    id: number;
    name: string;
    birthYear: string;
    eyeColor: string;
    gender: string;
    hairColor: string;
    height: string;
    mass: string;
    skinColor: string;
    homeworld: string;
    films: Film[];
    species: Specie[];
    starships: Starship[];
    vehicles: Vehicle[];
}
export declare class Film {
    id: number;
    title: string;
    episodeId: number;
    openingCrawl: string;
    director: string;
    producer: string;
    releaseDate: string;
    species: Specie[];
    starships: Starship[];
    vehicles: Vehicle[];
    characters: People[];
    planets: Planet[];
}
export declare class Starship {
    id: number;
    name: string;
    model: string;
    starshipClass: string;
    manufacturer: string;
    costInCredits: string;
    length: string;
    crew: string;
    passengers: string;
    maxAtmospheringSpeed: string;
    hyperdriveRating: string;
    MGLT: string;
    cargoCapacity: string;
    consumables: string;
    films: Film[];
    pilots: People[];
}
export declare class Vehicle {
    id: number;
    name: string;
    model: string;
    vehicleClass: string;
    manufacturer: string;
    length: string;
    costInCredits: string;
    crew: string;
    passengers: string;
    maxAtmospheringSpeed: string;
    cargoCapacity: string;
    consumables: string;
    films: Film[];
    pilots: People[];
}
export declare class Specie {
    id: number;
    name: string;
    classification: string;
    designation: string;
    averageHeight: string;
    averageLifespan: string;
    eyeColors: string;
    hairColors: string;
    skinColors: string;
    language: string;
    homeworld: string;
    people: People[];
    films: Film[];
}
export declare class Planet {
    id: number;
    name: string;
    diameter: string;
    rotationPeriod: string;
    orbitalPeriod: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surfaceWater: string;
    residents: People[];
    films: Film[];
}
