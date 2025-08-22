import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Truck, Shield, Heart, ArrowRight, Hand } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

const Home: React.FC = () => {
  const { formatPrice } = useCurrency();

  const featuredProducts = [
    {
      id: 1,
      name: 'Sérum Éclat Vitamine C',
      category: 'Visage',
      price: 45,
      originalPrice: 60,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      name: 'Crème Hydratante Aloe Vera',
      category: 'Corps',
      price: 28,
      image: 'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      isBestSeller: true
    },
    {
      id: 3,
      name: 'Huile Essentielle Lavande',
      category: 'Bien-être',
      price: 22,
      image: 'https://images.pexels.com/photos/4465820/pexels-photo-4465820.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Coffret Rituel Détox',
      category: 'Coffrets',
      price: 89,
      originalPrice: 120,
      image: 'https://images.pexels.com/photos/4465835/pexels-photo-4465835.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5.0,
      isPromo: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/90 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <div className="relative flex items-center justify-center w-6 h-6">
                  {/* Feuille principale */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-full transform rotate-45"></div>
                  <div className="absolute inset-0.5 bg-gradient-to-tr from-green-400 to-green-600 rounded-full transform -rotate-12"></div>
                  {/* Centre avec J */}
                  <div className="relative z-10 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold text-xs">J</span>
                  </div>
                  {/* Petites feuilles/gouttes */}
                  <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-green-700">Tradition Tunisienne & Bio</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Découvrez la beauté
                <span className="text-green-600 block">naturelle authentique</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Découvrez notre gamme de cosmétiques naturels aux huiles précieuses, 
                inspirée du savoir-faire traditionnel pour tous types de peaux.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/produits"
                  className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors inline-flex items-center justify-center group"
                >
                  Découvrir nos produits
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/marque"
                  className="border border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-50 transition-colors inline-flex items-center justify-center"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4465548/pexels-photo-4465548.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Cosmétiques naturels"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">+10,000</p>
                    <p className="text-sm text-gray-600">Clientes satisfaites</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Livraison gratuite</h3>
              <p className="text-gray-600">Dès 50€ d'achat, partout en France</p>
            </div>
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Garantie qualité</h3>
              <p className="text-gray-600">Produits certifiés bio et naturels</p>
            </div>
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Satisfaction garantie</h3>
              <p className="text-gray-600">Retours gratuits sous 30 jours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produits vedettes */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos produits vedettes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection de soins naturels aux huiles actives, 
              plébiscités par nos clientes pour leur efficacité.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">Nouveau</span>
                    )}
                    {product.isBestSeller && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">Best-seller</span>
                    )}
                    {product.isPromo && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Promo</span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-green-600 mb-2">{product.category}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                    <Link
                      to={`/produit/${product.id}`}
                      className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors text-sm"
                    >
                      Voir
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/produits"
              className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors inline-flex items-center group"
            >
              Voir tous nos produits
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre savoir-faire traditionnel pour votre beauté naturelle
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Chez Jasma, nous perpétuons les traditions de beauté naturelle. 
                C'est pourquoi nous avons développé une gamme complète de cosmétiques 
                aux huiles précieuses, respectueuse de votre peau et de notre savoir-faire.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Huiles précieuses traditionnelles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Savoir-faire traditionnel certifié</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Formules traditionnelles adaptées</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Artisanat authentique</span>
                </div>
              </div>
              <Link
                to="/marque"
                className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors inline-flex items-center group"
              >
                Découvrir notre histoire
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4465822/pexels-photo-4465822.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Ingrédients naturels"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce que disent nos clientes</h2>
            <p className="text-lg text-gray-600">Découvrez leurs expériences avec nos produits</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marie L.",
                rating: 5,
                comment: "Des produits exceptionnels ! Ma peau n'a jamais été aussi douce et éclatante. Je recommande vivement le sérum vitamine C.",
                product: "Sérum Éclat Vitamine C"
              },
              {
                name: "Sophie M.",
                rating: 5,
                comment: "Enfin des cosmétiques qui respectent ma peau sensible. L'huile de lavande m'aide énormément à me détendre le soir.",
                product: "Huile Essentielle Lavande"
              },
              {
                name: "Julie R.",
                rating: 5,
                comment: "Le coffret détox est parfait ! Tous les produits sont de qualité et l'emballage est magnifique. Parfait pour un cadeau.",
                product: "Coffret Rituel Détox"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-green-600">{testimonial.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;