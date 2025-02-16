export class Songs {
  id: number;
  name: string;
  artist: string;
  image: string;
  audio?: string;
  duration?: string;

  constructor(id: number, name: string, audio: string, duration: string, artist: string, image: string ) { 
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.image = image;
    this.audio = audio;
    this.duration = duration;
  }
}