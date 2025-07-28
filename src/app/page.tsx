'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Vše pro stavby s.r.o. | Moderní stavební práce";

    const faviconUrl = "https://via.placeholder.com/32x32/F97316/FFFFFF?text=VS";
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      // @ts-ignore
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    // @ts-ignore
    link.href = faviconUrl;
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "O nás", href: "#o-nas" },
    { name: "Služby", href: "#sluzby" },
    { name: "Partneři", href: "#partneri" },
    { name: "Galerie", href: "#galerie" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  const services = [
    { name: 'Zemní a výkopové práce', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/building-excavator.svg' },
    { name: 'Základové desky a základy', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/ruler-measure.svg' },
    { name: 'Hrubé stavby', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/wall.svg' },
    { name: 'Zateplování budov', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/layers-subtract.svg' },
    { name: 'Rekonstrukce bytů a domů', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/paint.svg' },
    { name: 'Obklady a dlažby', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/layout-grid.svg' },
    { name: 'Sádrokartony', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/tool.svg' },
    { name: 'Stavby plotů a zídek', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/fence.svg' },
    { name: 'Pokládka zámkové dlažby', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/bricks.svg' },
    { name: 'Terénní úpravy', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/shovel.svg' },
    { name: 'Autodoprava', icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/truck-delivery.svg' },
  ];

  const galleryImages = [
    '/images/gallery-7.jpg',
    '/images/gallery-8.jpg',
    '/images/gallery-10.jpg',
    '/images/gallery-12.jpg',
    '/images/gallery-15.jpg',
    '/images/gallery-17.jpg',
    '/images/gallery-23.jpg',
    '/images/gallery-25.jpg',
    '/images/gallery-28.jpg',
    '/images/gallery-29.jpg',
    '/images/gallery-31.jpg',
    '/images/gallery-32.jpg',
  ];
  
  const partnerLogos = [
      { src: '/images/logo-1.jpg', alt: 'Partner Logo 1'},
      { src: '/images/logo-6.jpg', alt: 'Partner Logo 6'},
      { src: '/images/content-2.jpg', alt: 'Partner Logo 3'},
      { src: '/images/content-3.jpg', alt: 'Partner Logo 4'},
  ];

  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="text-2xl font-bold text-orange-600">Vše pro stavby</a>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">{link.name}</a>
              ))}
            </nav>
            <a href="#kontakt" className="hidden md:inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700">
              Poptat služby
            </a>
            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label="Otevřít menu">
                <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg" alt="Menu" className="w-7 h-7 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex justify-between items-center p-4 border-b">
           <a href="#home" onClick={toggleMenu} className="text-2xl font-bold text-orange-600">Vše pro stavby</a>
           <button onClick={toggleMenu} aria-label="Zavřít menu">
              <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg" alt="Zavřít" className="w-7 h-7 text-gray-800" />
            </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={toggleMenu} className="text-2xl font-medium text-gray-700 hover:text-orange-600 transition-colors">{link.name}</a>
          ))}
           <a href="#kontakt" onClick={toggleMenu} className="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700">
              Poptat služby
            </a>
        </nav>
      </div>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0">
            <Image src="/images/gallery-10.jpg" alt="Stavební práce" layout="fill" objectFit="cover" className="grayscale-[30%] opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900">
              Stavební práce od A do Z
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
              Komplexní služby v oboru stavebnictví a autodopravy. Realizujeme stavby po celé České republice.
            </p>
            <div className="mt-10">
              <a href="#sluzby" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 shadow-lg">
                Prohlédnout služby
              </a>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="o-nas" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">O naší firmě</h2>
                <p className="mt-6 text-lg text-gray-600">
                  Jsme prověřená stavební firma s dlouholetou praxí. Naším sídlem je Moravskoslezský kraj, ale naše působnost zahrnuje celou Českou republiku. Specializujeme se na široké spektrum stavebních prací, od základů až po finální úpravy.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Naším hlavním cílem je spokojený zákazník, čehož dosahujeme individuálním a profesionálním přístupem ke každé zakázce. Kvalita, spolehlivost a dodržování termínů jsou pro nás klíčové.
                </p>
              </div>
              <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/content-4.jpg" alt="Tým v práci" width={600} height={450} objectFit="cover" className="w-full"/>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Naše služby</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Poskytujeme veškeré druhy stavebních prací s důrazem na preciznost a kvalitu.</p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-600">
                    <img src={service.icon} alt={service.name} className="w-7 h-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">{service.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partneri" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Obchodní partneři</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Spolupracujeme s prověřenými dodavateli materiálů a technologií.</p>
                </div>
                <div className="mt-10 flow-root">
                    <div className="-mt-4 -ml-8 flex flex-wrap justify-center lg:-ml-4">
                        {partnerLogos.map((logo, index) => (
                            <div key={index} className="mt-4 ml-8 flex flex-grow flex-shrink-0 items-center justify-center lg:ml-4 lg:flex-grow-0">
                              <Image src={logo.src} alt={logo.alt} width={158} height={48} className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>


        {/* Gallery Section */}
        <section id="galerie" className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Ukázky naší práce</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Prohlédněte si výběr našich realizovaných projektů.</p>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {galleryImages.map((src, index) => (
                <div key={index} className="group relative aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image src={src} alt={`Realizace ${index + 1}`} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300"/>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Kontaktujte nás</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Máte dotaz nebo zájem o naše služby? Neváhejte se nám ozvat.</p>
            </div>
            <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-600">
                    <img src="https://heroicons.com/24/solid/phone.svg" alt="Telefon" className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Telefon</h3>
                  <p className="mt-1 text-base text-gray-600"><a href="tel:+420735996611" className="hover:text-orange-600">+420 735 996 611</a></p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-600">
                    <img src="https://heroicons.com/24/solid/envelope.svg" alt="Email" className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-base text-gray-600"><a href="mailto:info@vseprostavby.cz" className="hover:text-orange-600">info@vseprostavby.cz</a></p>
                </div>
              </div>
              <div className="flex items-start md:col-span-2 md:justify-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-600">
                    <img src="https://heroicons.com/24/solid/map-pin.svg" alt="Adresa" className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Sídlo firmy</h3>
                  <p className="mt-1 text-base text-gray-600"><a href="https://www.google.com/maps/search/?api=1&query=Bohumínská+188/80,+712+00+Ostrava+-+Muglinov" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">Bohumínská 188/80, 712 00 Ostrava - Muglinov</a></p>
                </div>
              </div>
               <div className="md:col-span-2 border-t pt-8 mt-4">
                  <p className="text-center text-sm text-gray-500">Vše pro stavby s.r.o. | IČO: 09440621 | DIČ: CZ09440621</p>
                  <p className="text-center text-sm text-gray-500 mt-1">Společnost je plátcem DPH.</p>
               </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Vše pro stavby s.r.o. Všechna práva vyhrazena.</p>
          <p className="mt-2 text-gray-400"> Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="font-semibold text-orange-400 hover:text-orange-300">DigitalFusion</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
