import { Rabbit, Menu, PlayCircle, Check, Radar, Coffee } from 'lucide-react';
import './App.css';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="text-slate-900 antialiased">
      {/* Navbar */}
      <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/80 border-b border-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white">
                <Rabbit className="w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight">Hoppr</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#how" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">How it works</a>
              <a href="#why" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Why Hoppr</a>
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Sign in</a>
              <a href="#" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors">Get protected</a>
            </div>

            <div className="md:hidden">
              <button className="p-2 text-slate-600">
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="max-w-2xl relative z-10">
              <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-xs font-bold text-brand-600 mb-6 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                  Now boarding: 2025
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
                Space travel happens. <br />
                <span className="text-slate-400">We orbit the chaos.</span>
              </h1>

              <p className="text-xl text-slate-500 mb-8 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
                Rockets delay. Asteroids interfere. Luggage lands on Europa. <br />
                Hoppr is the AI-powered protection that pays you at light speed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
                <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  Launch coverage →
                </button>
                <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group">
                  <PlayCircle className="w-5 h-5" />
                  Mission briefing
                </button>
              </div>
            </div>

            {/* Hero Images Collage */}
            <div className="relative h-[600px] w-full hidden lg:block animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
              {/* Image 1: Main Portrait - Mars Rover */}
              <div className="absolute right-0 top-0 w-80 h-96 rounded-3xl overflow-hidden shadow-2xl image-card z-10">
                <img src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=80" alt="Mars landscape" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium opacity-90">Protected Mission</p>
                  <p className="font-bold text-lg">Olympus Mons, Mars</p>
                </div>
              </div>

              {/* Image 2: Landscape/Context - Space/Earth view */}
              <div className="absolute right-64 top-40 w-72 h-72 rounded-3xl overflow-hidden shadow-xl image-card border-4 border-white z-0">
                <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&auto=format&fit=crop&q=80" alt="Space view" className="w-full h-full object-cover opacity-90" />
              </div>

              {/* Image 3: Detail/Lifestyle - Claim card */}
              <div className="absolute right-40 bottom-20 w-64 h-48 rounded-2xl overflow-hidden shadow-xl image-card border-4 border-white z-20 bg-gradient-to-br from-purple-50 to-blue-50 p-4">
                <div className="flex items-center gap-3 mb-3 border-b border-purple-100 pb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Claim Approved</div>
                    <div className="font-bold text-sm">$4,500.00 Sent</div>
                  </div>
                </div>
                <div className="text-xs text-slate-400">Just now • Instant payout to Galactic Credit ending 8472</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="py-10 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-400 font-semibold uppercase tracking-widest mb-6">Trusted by travellers from</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SpaceX_logo_black.svg/2560px-SpaceX_logo_black.svg.png" className="h-6 object-contain" alt="SpaceX" />
            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Blue_Origin_new_logo.svg" className="h-8 object-contain" alt="Blue Origin" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" className="h-12 object-contain" alt="NASA" />
            <div className="bg-slate-900 px-4 py-2 rounded">
              <img src="https://www.virgingalactic.com/_nuxt/logo.d501acba.svg" className="h-7 object-contain" alt="Virgin Galactic" />
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="py-24 bg-white" id="how">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Works at warp speed. Almost literally.</h2>
            <p className="text-xl text-slate-500">From Earth to orbit in three steps. No rocket science required.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30">
                  <span className="text-2xl font-bold text-white">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Launch your trip details</h3>
                <p className="text-slate-600 leading-relaxed">
                  Forward your booking. Email, screenshot, or telepathic transmission (coming soon). Our AI reads faster than a SpaceX launch countdown.
                </p>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-500 to-brand-300 -z-10"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30">
                  <span className="text-2xl font-bold text-white">🛸</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Mission Control mode activated</h3>
                <p className="text-slate-600 leading-relaxed">
                  We monitor everything. Flights, delays, gate changes, solar flares, Mercury retrograde. If it affects your trip, we're on it.
                </p>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-300 to-brand-200 -z-10"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/30">
                  <span className="text-2xl font-bold text-white">💸</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Funds arrive at light speed</h3>
                <p className="text-slate-600 leading-relaxed">
                  Flight delayed? Money beams into your account faster than NASA can say "Houston." No forms. No waiting. Just intergalactic efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Visual callout */}
          <div className="mt-20 bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl p-12 text-center border border-brand-200">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Average payout time: 47 seconds</h3>
              <p className="text-slate-600 text-lg mb-6">
                That's 0.00001% of the time it takes to reach Mars. Faster than a rocket launch sequence. Quicker than a satellite orbiting Earth.
              </p>
              <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Ready for liftoff →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (Visual Bento Grid) */}
      <section className="py-24 bg-slate-50" id="why">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Coverage across the cosmos.</h2>
            <p className="text-xl text-slate-500">From Earth orbit to the outer planets. Protection that travels at the speed of light.</p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
            
            {/* Card 1: Large Visual (Mars) */}
            <div className="col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&auto=format&fit=crop&q=80" alt="Mars surface" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="w-12 h-12 bg-red-500/30 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-red-400/30">
                  <Radar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Mars Mission Coverage</h3>
                <p className="text-red-100 text-sm leading-relaxed max-w-sm">
                  Dust storms, solar flares, or just missing the launch window? We've got you covered across 140 million miles of space.
                </p>
              </div>
            </div>

            {/* Card 2: Light UI (Space Station Lounge) */}
            <div className="col-span-1 md:col-span-1 row-span-1 bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-3xl shadow-sm border border-blue-100 flex flex-col justify-between group hover:border-brand-200 transition-colors">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-600">
                  <Coffee className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">ISS Lounge Pass</h4>
                <p className="text-xs text-slate-500">Zero-gravity coffee bar access included.</p>
              </div>
            </div>

            {/* Card 3: Dark/Bold (Universal Coverage) */}
            <div className="col-span-1 md:col-span-1 row-span-1 bg-gradient-to-br from-purple-950 to-slate-900 text-white p-6 rounded-3xl shadow-lg flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-[60px] opacity-40"></div>
              <div className="absolute -bottom-4 -left-4 text-6xl opacity-20">🌌</div>
              <h4 className="text-3xl font-bold mb-1">∞</h4>
              <p className="text-purple-200 text-sm mb-4">Light-years of coverage</p>
              <div className="h-1 w-full bg-purple-900 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </div>
            </div>

            {/* Card 4: Visual (Venus/Space Exploration) */}
            <div className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl shadow-sm">
              <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&auto=format&fit=crop&q=80" alt="Space nebula" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-blue-900/60 group-hover:from-purple-900/70 group-hover:to-blue-900/70 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-1">Deep Space Ready</h3>
                  <p className="text-white/90 text-sm">Coverage for asteroid mining, nebula tours & wormhole travel</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Travelers love the new way.</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-slate-50 p-6 rounded-2xl flex gap-4 items-start">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/440px-Elon_Musk_Royal_Society_%28crop2%29.jpg" className="w-12 h-12 rounded-full object-cover" alt="User" />
              <div>
                <p className="text-sm text-slate-600 font-medium mb-2">"Used Hoppr for our Mars missions. Rocket delays happen. Hoppr had my crew compensated before we even left the launch pad. Makes SpaceX look slow."</p>
                <p className="text-xs font-bold text-slate-900">Elon M. • Boca Chica, Mars</p>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl flex gap-4 items-start">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/300px-NASA_logo.svg.png" className="w-12 h-12 rounded-full object-cover bg-slate-900 p-2" alt="User" />
              <div>
                <p className="text-sm text-slate-600 font-medium mb-2">"We've protected every mission from Apollo Oops to Artemis Uh-Oh. When our lunar lander got delayed 6 months, Hoppr paid out in 6 seconds. Houston, we have a solution."</p>
                <p className="text-xs font-bold text-slate-900">Dr. Buzz McKraken • NASA Mission Control</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Background texture" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Ready to go?</h2>
          <p className="text-xl text-slate-300 mb-10">Join 50,000+ travellers moving faster than ever.</p>
          <a href="#" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl hover:scale-105 transform duration-200">
            Get started with Hoppr
          </a>
          <p className="mt-6 text-sm text-slate-500">Starting at just $5/trip</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Rabbit className="w-5 h-5 text-black" />
            <span className="font-bold text-black">Hoppr</span>
          </div>
          <div>
            &copy; 2025 Hoppr Inc.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
