export class Artist { 
  id: number;
  image: string;
  name: string;
  description: string;
  isRoundImage: boolean;
  banner: string;

  constructor(id: number, image: string, name: string, banner: string, description: string, isRoundImage: boolean) { 
    this.id = id;
    this.image = image;
    this.name = name;
    this.isRoundImage = isRoundImage;
    this.banner = banner;
    this.description = description
  }
}