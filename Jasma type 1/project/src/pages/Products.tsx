import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Filter, SlidersHorizontal } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';

const Products: React.FC = () => {
  const { category } = useParams();
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const [filters, setFilters] = useState({
    priceRange: [0, 100],
    skinType: '',
    concerns: '',
    sortBy: 'popular'
  });
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'visage', name: 'Soins Visage', description: 'Nettoyants, sérums, crèmes pour le visage' },
    { id: 'corps', name: 'Soins Corps', description: 'Crèmes, huiles, gommages pour le corps' },
    { id: 'bien-etre', name: 'Bien-être', description: 'Huiles essentielles, aromathérapie' },
    { id: 'coffrets', name: 'Coffrets Cadeaux', description: 'Sélections et coffrets découverte' }
  ];

  const products = [
    {
      id: 1,
      name: 'Sérum Éclat Vitamine C',
      category: 'visage',
      price: 45,
      originalPrice: 60,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 124,
      skinType: 'Tous types',
      concerns: ['Éclat', 'Anti-âge'],
      isNew: true,
      description: 'Sérum concentré en vitamine C pour un teint lumineux et uniforme.'
    },
    {
      id: 2,
      name: 'Crème Hydratante Aloe Vera',
      category: 'corps',
      price: 28,
      image: 'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 89,
      skinType: 'Sensible',
      concerns: ['Hydratation', 'Apaisement'],
      isBestSeller: true,
      description: 'Crème ultra-hydratante à l\'aloe vera pour peaux sensibles.'
    },
    {
      id: 3,
      name: 'Huile Essentielle Lavande',
      category: 'bien-etre',
      price: 22,
      image: 'https://images.pexels.com/photos/4465820/pexels-photo-4465820.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 156,
      skinType: 'Tous types',
      concerns: ['Relaxation', 'Sommeil'],
      description: 'Huile essentielle pure de lavande pour la détente et le bien-être.'
    },
    {
      id: 4,
      name: 'Coffret Rituel Détox',
      category: 'coffrets',
      price: 89,
      originalPrice: 120,
      image: 'https://images.pexels.com/photos/4465835/pexels-photo-4465835.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5.0,
      reviews: 67,
      skinType: 'Tous types',
      concerns: ['Détox', 'Purification'],
      isPromo: true,
      description: 'Coffret complet pour un rituel détox en profondeur.'
    },
    {
      id: 5,
      name: 'Nettoyant Doux Camomille',
      category: 'visage',
      price: 24,
      image: 'https://images.pexels.com/photos/4465825/pexels-photo-4465825.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 98,
      skinType: 'Sensible',
      concerns: ['Nettoyage', 'Douceur'],
      description: 'Gel nettoyant ultra-doux à la camomille pour tous types de peaux.'
    },
    {
      id: 6,
      name: 'Masque Purifiant Argile Verte',
      category: 'visage',
      price: 32,
      image: 'https://images.pexels.com/photos/4465834/pexels-photo-4465834.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 112,
      skinType: 'Mixte à grasse',
      concerns: ['Purification', 'Pores'],
      description: 'Masque à l\'argile verte pour purifier et resserrer les pores.'
    },
    {
      id: 7,
      name: 'Huile Corps Nourrissante',
      category: 'corps',
      price: 35,
      image: 'https://images.pexels.com/photos/4465830/pexels-photo-4465830.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 143,
      skinType: 'Sèche',
      concerns: ['Nutrition', 'Réparation'],
      description: 'Huile corps aux huiles précieuses pour nourrir intensément la peau.'
    },
    {
      id: 8,
      name: 'Coffret Découverte Visage',
      category: 'coffrets',
      price: 65,
      originalPrice: 85,
      image: 'https://images.pexels.com/photos/4465833/pexels-photo-4465833.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 78,
      skinType: 'Tous types',
      concerns: ['Découverte', 'Routine'],
      isPromo: true,
      description: 'Coffret découverte avec une routine complète pour le visage.'
    }
  ];

  const currentCategory = categories.find(cat => cat.id === category);
  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  const skinTypes = ['Tous types', 'Sensible', 'Sèche', 'Mixte à grasse'];
  const concerns = ['Hydratation', 'Anti-âge', 'Éclat', 'Purification', 'Apaisement', 'Nutrition'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {currentCategory ? currentCategory.name : 'Nos Produits'}
            </h1>
            <p className="text-gray-600">
              {currentCategory ? currentCategory.description : 'Découvrez notre gamme complète de cosmétiques naturels'}
            </p>
          </div>
        </div>
      </div>

      {/* Catégories */}
      {!category && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/produits/${cat.id}`}
                  className="group bg-green-50 rounded-2xl p-8 hover:bg-green-100 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                    {cat.name}
                  </h3>
                  <p className="text-gray-600">{cat.description}</p>
                  <div className="mt-4 text-green-600 font-medium">
                    Découvrir →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filtres et Produits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filtres */}
          <div className="lg:w-64">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h3 className="text-lg font-semibold">Filtres</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="text-green-600"
                >
                  <SlidersHorizontal className="h-5 w-5" />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Prix</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">Moins de 25€</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">25€ - 50€</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">Plus de 50€</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Type de peau</h4>
                  <div className="space-y-2">
                    {skinTypes.map((type) => (
                      <label key={type} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm text-gray-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Préoccupations</h4>
                  <div className="space-y-2">
                    {concerns.map((concern) => (
                      <label key={concern} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm text-gray-600">{concern}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des produits */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
              </p>
              <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
                <option value="popular">Plus populaires</option>
                <option value="price-low">Prix croissant</option>
                <option value="price-high">Prix décroissant</option>
                <option value="rating">Mieux notés</option>
                <option value="newest">Plus récents</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
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
                    <div className="text-sm text-green-600 mb-2">{product.skinType}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to={`/produit/${product.id}`}
                        className="flex-1 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors text-sm text-center"
                      >
                        Voir détails
                      </Link>
                      <button
                        onClick={() => addToCart(product)}
                        className="px-4 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors text-sm"
                      >
                        Ajouter
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;