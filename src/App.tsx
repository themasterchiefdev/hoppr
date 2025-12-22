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
                  Live for 2025
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
                Travel happens. <br />
                <span className="text-slate-400">We handle the rest.</span>
              </h1>

              <p className="text-xl text-slate-500 mb-8 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
                Trips change. Flights delay. Bags go missing. <br />
                Hoppr is the AI-powered protection that pays you instantly, without the paperwork.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
                <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  Get protected
                </button>
                <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group">
                  <PlayCircle className="w-5 h-5" />
                  See how it works
                </button>
              </div>
            </div>

            {/* Hero Images Collage */}
            <div className="relative h-[600px] w-full hidden lg:block animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
              {/* Image 1: Main Portrait */}
              <div className="absolute right-0 top-0 w-80 h-96 rounded-3xl overflow-hidden shadow-2xl image-card z-10">
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Traveler looking at map" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium opacity-90">Protected Trip</p>
                  <p className="font-bold text-lg">Kyoto, Japan</p>
                </div>
              </div>

              {/* Image 2: Landscape/Context */}
              <div className="absolute right-64 top-40 w-72 h-72 rounded-3xl overflow-hidden shadow-xl image-card border-4 border-white z-0">
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Airplane wing view" className="w-full h-full object-cover opacity-90" />
              </div>

              {/* Image 3: Detail/Lifestyle */}
              <div className="absolute right-40 bottom-20 w-64 h-48 rounded-2xl overflow-hidden shadow-xl image-card border-4 border-white z-20 bg-white p-4">
                <div className="flex items-center gap-3 mb-3 border-b border-slate-100 pb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Claim Approved</div>
                    <div className="font-bold text-sm">$450.00 Sent</div>
                  </div>
                </div>
                <div className="text-xs text-slate-400">Just now • Instant payout to Visa ending 4242</div>
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

      {/* Solution Section (Visual Bento Grid) */}
      <section className="py-24 bg-slate-50" id="why">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Protection that looks like this.</h2>
            <p className="text-xl text-slate-500">No more PDFs. No more phone queues. Just a modern app for modern travel.</p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
            
            {/* Card 1: Large Visual (Anticipate) */}
            <div className="col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Airport terminal" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/30">
                  <Radar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">We watch the skies</h3>
                <p className="text-slate-200 text-sm leading-relaxed max-w-sm">
                  Hoppr connects to global flight data. If your flight is delayed, we know instantly—often before the pilot announces it.
                </p>
              </div>
            </div>

            {/* Card 2: Light UI (Lounge Access) */}
            <div className="col-span-1 md:col-span-1 row-span-1 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-brand-200 transition-colors">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-600">
                  <Coffee className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Free Lounge Access</h4>
                <p className="text-xs text-slate-500">Sent automatically if delayed &gt;2 hrs.</p>
              </div>
            </div>

            {/* Card 3: Dark/Bold (Instant Pay) */}
            <div className="col-span-1 md:col-span-1 row-span-1 bg-slate-900 text-white p-6 rounded-3xl shadow-lg flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500 rounded-full blur-[60px] opacity-40"></div>
              <h4 className="text-3xl font-bold mb-1">$0</h4>
              <p className="text-slate-400 text-sm mb-4">Deductible on all plans</p>
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-full bg-brand-500"></div>
              </div>
            </div>

            {/* Card 4: Visual (Medical) */}
            <div className="col-span-1 md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl shadow-sm">
              <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=80" alt="Hiking adventure" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-1">Adventure Ready</h3>
                  <p className="text-white/80 text-sm">Cover for hiking, skiing & more</p>
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
