import React from 'react';
import { Camera, Instagram, Mail, Twitter } from 'lucide-react';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section with Slider */}
      <section className="relative h-screen">
        <ImageSlider />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-10" />
        <div className="relative h-full flex items-center justify-center z-20">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Live and Let Sleep</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Capturing moments in time, one frame at a time
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <Camera className="w-12 h-12 mx-auto mb-8 text-purple-500" />
          <h2 className="text-3xl font-bold mb-6">About My Photography</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
          Welcome to Live & Let Sleep—where every snapshot whispers a story. Through my lens, I capture the art of stillness, the poetry of light, and the beauty hidden in the everyday. From moody landscapes to dreamy aesthetics, my gallery is a visual escape—calm, raw, and effortlessly timeless.
          See the world through my eyes, where every frame invites you to pause, breathe, and just let life flow. 🌿📸✨
          </p>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      <Footer />
    </div>
  );
}

export default App