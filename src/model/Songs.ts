export class Songs { 
  id: number;
  image: string; 
  name: string; 
  duration: string; 
  artist: string; 
  audio: string; 

  constructor(id: number, image: string, name: string, duration: string, artist: string, audio: string) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.duration = duration;
    this.artist = artist;
    this.audio = audio;
  }
}