type CharacterLocation = {
  name: string;
  url: string;
};

export type Character = {
  created: string;
  episode: string[];
  gender: "unknown" | "Female" | "Male" | "Genderless";
  id: number;
  image: string;
  location: CharacterLocation;
  name: string;
  origin: CharacterLocation;
  species: string;
  status: "Dead" | "Alive" | "unknown";
  type: string;
  url: string;
};
