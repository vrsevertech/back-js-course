import { Entity, Column } from 'typeorm';

@Entity('peoples')
export class People {
  @Column({ primary: true }) id: number;
  @Column() name: string;
  @Column({ name: 'birth_year' }) birthYear: string;
  @Column({ name: 'eye_color' }) eyeColor: string;
  @Column() gender: string;
  @Column({ name: 'hair_color' }) hairColor: string;
  @Column() height: string;
  @Column() mass: string;
  @Column({ name: 'skin_color' }) skinColor: string;
  @Column() homeworld: string;

  @Column() films: Film[];
  @Column() species: Specie[];
  @Column() starships: Starship[];
  @Column() vehicles: Vehicle[];
}

@Entity('films')
export class Film {
  @Column({ primary: true }) id: number;
  @Column() title: string;
  @Column({ name: 'episode_id' }) episodeId: number; //integer
  @Column({ name: 'opening_crawl' }) openingCrawl: string;
  @Column() director: string;
  @Column() producer: string;
  @Column({ name: 'release_date' }) releaseDate: string; //date

  @Column() species: Specie[];
  @Column() starships: Starship[];
  @Column() vehicles: Vehicle[];
  @Column() characters: People[];
  @Column() planets: Planet[];
}

@Entity('starships')
export class Starship {
  @Column({ primary: true }) id: number;
  @Column() name: string;
  @Column() model: string;
  @Column({ name: 'starship_class' }) starshipClass: string;
  @Column() manufacturer: string;
  @Column({ name: 'cost_in_credits' }) costInCredits: string;
  @Column() length: string;
  @Column() crew: string;
  @Column() passengers: string;
  @Column({ name: 'max_atmosphering_speed' }) maxAtmospheringSpeed: string;
  @Column({ name: 'hyperdrive_rating' }) hyperdriveRating: string;
  @Column() MGLT: string;
  @Column({ name: 'cargo_capacity' }) cargoCapacity: string;
  @Column() consumables: string;

  @Column() films: Film[];
  @Column() pilots: People[];
}

@Entity('vehicles')
export class Vehicle {
  @Column({ primary: true }) id: number;
  @Column() name: string;
  @Column() model: string;
  @Column({ name: 'vehicle_class' }) vehicleClass: string;
  @Column() manufacturer: string;
  @Column() length: string;
  @Column({ name: 'cost_in_credits' }) costInCredits: string;
  @Column() crew: string;
  @Column() passengers: string;
  @Column({ name: 'max_atmosphering_speed' }) maxAtmospheringSpeed: string;
  @Column({ name: 'cargo_capacity' }) cargoCapacity: string;
  @Column() consumables: string;

  @Column() films: Film[];
  @Column() pilots: People[];
}

@Entity('species')
export class Specie {
  @Column({ primary: true }) id: number;
  @Column() name: string;
  @Column() classification: string;
  @Column() designation: string;
  @Column({ name: 'average_height' }) averageHeight: string;
  @Column({ name: 'average_lifespan' }) averageLifespan: string;
  @Column({ name: 'eye_colors' }) eyeColors: string;
  @Column({ name: 'hair_colors' }) hairColors: string;
  @Column({ name: 'skin_colors' }) skinColors: string;
  @Column() language: string;
  @Column() homeworld: string;

  @Column() people: People[];
  @Column() films: Film[];
}

@Entity('planets')
export class Planet {
  @Column({ primary: true }) id: number;
  @Column() name: string;
  @Column() diameter: string;
  @Column({ name: 'rotation_period' }) rotationPeriod: string;
  @Column({ name: 'orbital_period' }) orbitalPeriod: string;
  @Column() gravity: string;
  @Column() population: string;
  @Column() climate: string;
  @Column() terrain: string;
  @Column({ name: 'surface_water' }) surfaceWater: string;

  @Column() residents: People[];
  @Column() films: Film[];
}
