import React, { useState } from 'react';
import { Shuffle, RotateCcw, Star } from 'lucide-react';

const TarotStudyApp = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studiedCards, setStudiedCards] = useState(new Set());
  const [showAll, setShowAll] = useState(false);

  // Base de datos de cartas del tarot
  const tarotCards = [
    // Arcanos Mayores
    {
      name: "El Loco",
      suit: "Arcanos Mayores",
      number: 0,
      image: "/images/tarot/00-el-loco.jpg",
      meaning: "Nuevos comienzos, espontaneidad, fe en el futuro, aventura sin miedo. Representa la inocencia y el potencial infinito."
    },
    {
      name: "El Mago",
      suit: "Arcanos Mayores",
      number: 1,
      image: "/images/tarot/01-el-mago.jpg",
      meaning: "Manifestación, recursos disponibles, poder de la voluntad, habilidades. Capacidad de transformar ideas en realidad."
    },
    {
      name: "La Sacerdotisa",
      suit: "Arcanos Mayores", 
      number: 2,
      image: "/images/tarot/02-la-sacerdotisa.jpg",
      meaning: "Intuición, sabiduría interior, misterios ocultos, subconsciente. Representa el conocimiento esotérico y la feminidad sagrada."
    },
    {
      name: "La Emperatriz",
      suit: "Arcanos Mayores",
      number: 3,
      image: "/images/tarot/03-la-emperatriz.jpg",
      meaning: "Fertilidad, creatividad, abundancia, naturaleza maternal. Representa la creación y el cuidado amoroso."
    },
    {
      name: "El Emperador",
      suit: "Arcanos Mayores",
      number: 4,
      image: "/images/tarot/04-el-emperador.jpg",
      meaning: "Autoridad, estructura, control, liderazgo paternal. Representa el poder terrenal y la estabilidad."
    },
    {
      name: "El Hierofante",
      suit: "Arcanos Mayores",
      number: 5,
      image: "/images/tarot/05-el-hierofante.jpg",
      meaning: "Tradición, conformidad, moralidad, instituciones. Representa la sabiduría convencional y la guía espiritual."
    },
    {
      name: "Los Enamorados",
      suit: "Arcanos Mayores",
      number: 6,
      image: "/images/tarot/06-los-enamorados.jpg",
      meaning: "Amor, relaciones, elecciones importantes, valores personales. Representa las decisiones del corazón."
    },
    {
      name: "El Carro",
      suit: "Arcanos Mayores",
      number: 7,
      image: "/images/tarot/07-el-carro.jpg",
      meaning: "Determinación, control, willpower, éxito. Representa el triunfo a través del esfuerzo y la disciplina."
    },
    {
      name: "La Justicia",
      suit: "Arcanos Mayores",
      number: 8,
      image: "/images/tarot/08-la-justicia.jpg",
      meaning: "Justicia, equilibrio, causa y efecto, responsabilidad. Representa la equidad y las consecuencias de las acciones."
    },
    {
      name: "El Ermitaño",
      suit: "Arcanos Mayores",
      number: 9,
      image: "/images/tarot/09-el-ermitano.jpg",
      meaning: "Búsqueda interior, introspección, guía interior, soledad necesaria. Representa la sabiduría que viene de adentro."
    },
    {
      name: "La Rueda de la Fortuna",
      suit: "Arcanos Mayores",
      number: 10,
      image: "/images/tarot/10-la-rueda-de-la-fortuna.jpg",
      meaning: "Destino, cambio, ciclos, suerte. Representa los altibajos de la vida y el karma."
    },
    {
      name: "La Fuerza",
      suit: "Arcanos Mayores",
      number: 11,
      image: "/images/tarot/11-la-fuerza.jpg",
      meaning: "Fuerza interior, valor, compasión, control suave. Representa el poder de la gentileza y la paciencia."
    },
    {
      name: "El Colgado",
      suit: "Arcanos Mayores",
      number: 12,
      image: "/images/tarot/12-el-colgado.jpg",
      meaning: "Suspensión, entrega, nueva perspectiva, sacrificio. Representa la pausa necesaria y cambio de visión."
    },
    {
      name: "La Muerte",
      suit: "Arcanos Mayores",
      number: 13,
      image: "/images/tarot/13-la-muerte.jpg",
      meaning: "Transformación, finales, renacimiento, transición. Representa cambios profundos y regeneración."
    },
    {
      name: "La Templanza",
      suit: "Arcanos Mayores",
      number: 14,
      image: "/images/tarot/14-la-templanza.jpg",
      meaning: "Equilibrio, moderación, paciencia, armonía. Representa la síntesis y la curación gradual."
    },
    {
      name: "El Diablo",
      suit: "Arcanos Mayores",
      number: 15,
      image: "/images/tarot/15-el-diablo.jpg",
      meaning: "Tentación, adicción, materialismo, cadenas autoimpuestas. Representa las limitaciones que nos ponemos."
    },
    {
      name: "La Torre",
      suit: "Arcanos Mayores",
      number: 16,
      image: "/images/tarot/16-la-torre.jpg",
      meaning: "Revelación súbita, cambio disruptivo, liberación, despertar. Representa la destrucción de ilusiones."
    },
    {
      name: "La Estrella",
      suit: "Arcanos Mayores",
      number: 17,
      image: "/images/tarot/17-la-estrella.jpg",
      meaning: "Esperanza, inspiración, guía espiritual, renovación. Representa la fe y la conexión cósmica."
    },
    {
      name: "La Luna",
      suit: "Arcanos Mayores",
      number: 18,
      image: "/images/tarot/18-la-luna.jpg",
      meaning: "Ilusión, intuición, sueños, subconsciente. Representa los miedos ocultos y la confusión."
    },
    {
      name: "El Sol",
      suit: "Arcanos Mayores",
      number: 19,
      image: "/images/tarot/19-el-sol.jpg",
      meaning: "Alegría, éxito, vitalidad, optimismo. Representa la felicidad pura y el logro."
    },
    {
      name: "El Juicio",
      suit: "Arcanos Mayores",
      number: 20,
      image: "/images/tarot/20-el-juicio.jpg",
      meaning: "Renacimiento, perdón, evaluación interior, llamado superior. Representa el despertar espiritual."
    },
    {
      name: "El Mundo",
      suit: "Arcanos Mayores",
      number: 21,
      image: "/images/tarot/21-el-mundo.jpg",
      meaning: "Cumplimiento, logro, realización, completitud. Representa el final exitoso de un ciclo."
    },
    
    // Copas (algunos ejemplos - puedes agregar más)
    {
      name: "As de Copas",
      suit: "Copas",
      number: 1,
      image: "/images/tarot/as-de-copas.jpg",
      meaning: "Nuevas emociones, amor, intuición, espiritualidad. Representa el potencial emocional y conexiones profundas."
    },
    {
      name: "Dos de Copas",
      suit: "Copas", 
      number: 2,
      image: "/images/tarot/dos-de-copas.jpg",
      meaning: "Conexión, asociación, atracción mutua, armonía. Representa relaciones equilibradas y comprensión mutua."
    },
    {
      name: "Tres de Copas",
      suit: "Copas",
      number: 3,
      image: "/images/tarot/tres-de-copas.jpg",
      meaning: "Celebración, amistad, comunidad, creatividad grupal. Representa la alegría compartida y el apoyo social."
    },
    
    // Espadas (algunos ejemplos)
    {
      name: "As de Espadas",
      suit: "Espadas",
      number: 1,
      image: "/images/tarot/as-de-espadas.jpg",
      meaning: "Claridad mental, nuevas ideas, comunicación, verdad. Representa el poder del intelecto y la comunicación clara."
    },
    {
      name: "Dos de Espadas",
      suit: "Espadas",
      number: 2,
      image: "/images/tarot/dos-de-espadas.jpg",
      meaning: "Decisión difícil, equilibrio, información oculta, dilema. Representa la necesidad de elegir entre opciones."
    },
    
    // Bastos (algunos ejemplos)
    {
      name: "As de Bastos",
      suit: "Bastos",
      number: 1,
      image: "/images/tarot/as-de-bastos.jpg",
      meaning: "Inspiración, potencial creativo, nuevos proyectos, crecimiento. Representa energía creativa y nuevos comienzos."
    },
    {
      name: "Dos de Bastos",
      suit: "Bastos",
      number: 2,
      image: "/images/tarot/dos-de-bastos.jpg",
      meaning: "Planificación, decisiones futuras, progreso personal, ambición. Representa la planificación de objetivos a largo plazo."
    },
    
    // Pentáculos (algunos ejemplos)
    {
      name: "As de Pentáculos",
      suit: "Pentáculos",
      number: 1,
      image: "/images/tarot/as-de-pentaculos.jpg",
      meaning: "Oportunidad material, prosperidad, manifestación, abundancia. Representa nuevas oportunidades financieras."
    },
    {
      name: "Dos de Pentáculos",
      suit: "Pentáculos",
      number: 2,
      image: "/images/tarot/dos-de-pentaculos.jpg",
      meaning: "Balance, adaptabilidad, prioridades, gestión del tiempo. Representa malabarismo con responsabilidades."
    }
  ];

  const shuffleCards = () => {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    setCurrentCard(randomIndex);
    setIsFlipped(false);
  };

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % tarotCards.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + tarotCards.length) % tarotCards.length);
    setIsFlipped(false);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setStudiedCards(prev => new Set([...prev, currentCard]));
    }
  };

  const resetProgress = () => {
    setStudiedCards(new Set());
    setCurrentCard(0);
    setIsFlipped(false);
  };

  const card = tarotCards[currentCard];
  const progressPercentage = (studiedCards.size / tarotCards.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-clip-text text-transparent">
            Estudio de Tarot
          </h1>
          <p className="text-lg text-gray-300">
            Aprende el significado de las cartas del tarot de forma interactiva
          </p>
        </header>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-300">Progreso de estudio</span>
            <span className="text-sm font-medium text-gray-300">{studiedCards.size}/{tarotCards.length} cartas</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-300 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-center mt-1 text-gray-400">
            {Math.round(progressPercentage)}% completado
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={shuffleCards}
            className="flex items-center gap-2 bg-navy-800 hover:bg-navy-700 px-6 py-3 rounded-lg transition-colors border border-blue-600"
            style={{ backgroundColor: '#1e3a5f', borderColor: '#3b82f6' }}
          >
            <Shuffle size={18} />
            Carta Aleatoria
          </button>
          <button
            onClick={resetProgress}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors border border-gray-600"
          >
            <RotateCcw size={18} />
            Reiniciar Progreso
          </button>
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors border border-blue-500"
          >
            <Star size={18} />
            {showAll ? 'Vista Carta' : 'Ver Todas'}
          </button>
        </div>

        {!showAll ? (
          /* Single Card View */
          <div className="max-w-md mx-auto">
            {/* Card Navigation */}
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={prevCard}
                className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors border border-gray-600"
              >
                ← Anterior
              </button>
              <span className="text-lg font-semibold text-gray-200">
                {currentCard + 1} / {tarotCards.length}
              </span>
              <button
                onClick={nextCard}
                className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors border border-gray-600"
              >
                Siguiente →
              </button>
            </div>

            {/* Flip Card */}
            <div 
              className="relative w-full h-[500px] cursor-pointer"
              onClick={flipCard}
              style={{ perspective: '1000px' }}
            >
              <div 
                className={`relative w-full h-full transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card - Imagen */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl shadow-2xl border-2 border-blue-400 h-full flex flex-col items-center justify-center p-6 relative">
                    <div className="flex-1 flex items-center justify-center mb-4">
                      <img 
                        src={card.image} 
                        alt={card.name}
                        className="max-w-full max-h-80 object-contain rounded-lg shadow-lg"
                        onError={(e) => {
                          e.target.src = '/images/tarot/card-back.jpg';
                        }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2 text-white">{card.name}</h3>
                    <p className="text-blue-300 text-center text-sm mb-4">{card.suit}</p>
                    <div className="text-center text-sm text-gray-300 mb-2">
                      {studiedCards.has(currentCard) && <span className="inline-block">⭐ Estudiada</span>}
                    </div>
                    <div className="absolute bottom-4 text-xs text-gray-400">
                      Toca para ver el significado
                    </div>
                  </div>
                </div>

                {/* Back of card - Significado */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="relative rounded-xl shadow-2xl border-2 border-blue-400 h-full overflow-hidden">
                    {/* Imagen de fondo blurreada */}
                    <div 
                      className="absolute inset-0 w-full h-full"
                      style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(8px) brightness(0.2)',
                        transform: 'scale(1.1)' // Para evitar bordes blancos del blur
                      }}
                    ></div>
                    
                    {/* Overlay para mejorar legibilidad */}
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                    
                    {/* Contenido */}
                    <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
                      <h3 className="text-2xl font-bold text-center mb-6 text-blue-300 drop-shadow-lg">
                        {card.name}
                      </h3>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="bg-black bg-opacity-60 rounded-lg p-4 backdrop-blur-sm border border-blue-400/30">
                          <p className="text-center text-base leading-relaxed max-w-sm text-white">
                            {card.meaning}
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-4 text-xs text-blue-200">
                        Toca para ver la carta
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center mt-4 text-sm text-gray-400">
              Haz clic en la carta para voltearla y ver su significado
            </p>
          </div>
        ) : (
          /* All Cards Grid View */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {tarotCards.map((card, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg p-4 text-center border-2 transition-all hover:scale-105 cursor-pointer ${
                  studiedCards.has(index) 
                    ? 'border-blue-400 shadow-lg shadow-blue-400/20' 
                    : 'border-gray-600'
                }`}
                onClick={() => {
                  setCurrentCard(index);
                  setShowAll(false);
                  setIsFlipped(false);
                }}
              >
                <div className="mb-2">
                  <img 
                    src={card.image} 
                    alt={card.name}
                    className="w-20 h-28 mx-auto rounded-lg object-cover shadow-md"
                    onError={(e) => {
                      e.target.src = '/images/tarot/card-back.jpg';
                    }}
                  />
                </div>
                <h4 className="font-semibold text-sm mb-1 text-white">{card.name}</h4>
                <p className="text-xs text-gray-400">{card.suit}</p>
                {studiedCards.has(index) && (
                  <div className="mt-2">
                    <Star size={16} className="mx-auto text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default TarotStudyApp;