import React from 'react';
import { Instagram } from 'lucide-react';

const Gallery = () => {
    const photos = [
  {
    url: "/img/liveandletsleepp-20250225-0001.jpg",
    title: "Golden Hour Bliss"
  },
  {
    url: "/img/liveandletsleepp-20250225-0002.jpg",
    title: "Wanderlust Dreams"
  },
  {
    url: "/img/liveandletsleepp-20250225-0003.jpg",
    title: "Drifting Through Clouds"
  },
  {
    url: "/img/liveandletsleepp-20250225-0004.jpg",
    title: "Electric Serenity"
  },
  {
    url: "/img/liveandletsleepp-20250225-0008.jpg",
    title: "Midnight Vibes"
  },
  {
    url: "/img/liveandletsleepp-20250225-0006 (1).jpg",
    title: "Whispers of the Peaks"
  }
];

  return (
    <section id="gallery" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Featured Works</h2>
          <a 
            href="https://www.instagram.com/liveandletsleepp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
          >
            <Instagram className="w-5 h-5" />
            <span>Follow on Instagram</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img 
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
