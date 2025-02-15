import React, { useEffect, useState } from 'react'
import { Songs } from '../model/Songs';
import { songsArray } from '../server/songs';

const ArtistSongs:React.FC<{ artistName: string}> = ({ artistName }) => {
  const [songs, setSongs ] = useState<Songs[]>([]);

  useEffect( () => {
    const filteredSongs = songsArray.filter((song) => song.artist === artistName); 
    setSongs(filteredSongs.slice(0, 10));
  }, 
  [artistName]);

  return (
    <div className="flex flex-col items-center justify-end">
      <div className="w-full mt-6">
        {songs.length === 0 ? (
          <p className="text-white">Nenhuma música encontrada para este artista.</p>
        ) : (
          <div className="space-y-6">
            {songs.map((song, index) => (
              <div key={song.id} className="flex items-center space-x-4">
                <span className="text-white text-lg">{index + 1}</span>
                <img
                  src={song.image}
                  alt={song.name}
                  className="w-12 h-12 rounded-lg"
                />
                <div className="flex-1 flex justify-between items-center">
                  <div className="flex flex-col">
                    <h4 className="text-white">{song.name}</h4>
                  </div>
                  <p className="text-gray-400">{song.duration}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );  
}  

export default ArtistSongs
