import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingBag, Truck, Shield, ArrowLeft, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Simulation de données produit
  const product = {
    id: parseInt(id || '1'),
    name: 'Sérum Éclat Vitamine C',
    category: 'Soins Visage',
    price: 45,
    originalPrice: 60,
    rating: 4.8,
    reviews: 124,
    skinType: 'Tous types de peaux',
    concerns: ['Éclat du teint', 'Anti-âge', 'Taches pigmentaires'],
    inStock: true,
    description: 'Notre sérum concentré en vitamine C pure est formulé pour illuminer votre teint et atténuer les signes de vieillissement. Enrichi en antioxydants naturels, il protège votre peau des agressions extérieures tout en stimulant la production de collagène.',
    benefits: [
      'Illumine le teint instantanément',
      'Réduit les taches pigmentaires',
      'Stimule la production de collagène',
      'Protection antioxydante',
      'Texture légère non grasse'
    ],
    ingredients: 'Aqua, Magnesium Ascorbyl Phosphate (Vitamine C), Aloe Barbadensis Leaf Juice*, Glycerin, Sodium Hyaluronate, Tocopherol (Vitamine E), Rosa Canina Fruit Oil*, Calendula Officinalis Flower Extract*',
    usage: 'Appliquez quelques gouttes sur le visage et le cou, matin et soir, sur peau propre. Massez délicatement jusqu\'à absorption complète. Évitez le contour des yeux.',
    images: [
      'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4465825/pexels-photo-4465825.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    badges: ['Bio', 'Vegan', 'Cruelty Free']
  };

  const reviews = [
    {
      id: 1,
      name: 'Marie L.',
      rating: 5,
      date: '15 janvier 2025',
      comment: 'Produit exceptionnel ! Mon teint est plus lumineux après seulement une semaine d\'utilisation. Je recommande vivement.',
      verified: true
    },
    {
      id: 2,
      name: 'Sophie M.',
      rating: 5,
      date: '8 janvier 2025',
      comment: 'Parfait pour ma peau sensible, aucune irritation. La texture est parfaite et l\'odeur très agréable.',
      verified: true
    },
    {
      id: 3,
      name: 'Julie R.',
      rating: 4,
      date: '3 janvier 2025',
      comment: 'Très bon sérum, j\'ai vu une amélioration de mes taches après 3 semaines. Un peu cher mais efficace.',
      verified: true
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: 'Crème Hydratante Aloe Vera',
      price: 28,
      image: 'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9
    },
    {
      id: 5,
      name: 'Nettoyant Doux Camomille',
      price: 24,
      image: 'https://images.pexels.com/photos/4465825/pexels-photo-4465825.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6
    }
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-green-600">Accueil</Link>
          <span>/</span>
          <Link to="/produits" className="hover:text-green-600">Produits</Link>
          <span>/</span>
          <Link to="/produits/visage" className="hover:text-green-600">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.badges.map((badge, index) => (
                  <span key={index} className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex space-x-4 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-green-600' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Détails produit */}
          <div className="space-y-6">
            <div>
              <div className="text-sm text-green-600 mb-2">{product.category}</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.reviews} avis)</span>
                </div>
                <div className="text-sm text-green-600">✓ En stock</div>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-medium">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Type de peau :</h3>
                <p className="text-gray-600">{product.skinType}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Préoccupations :</h3>
                <div className="flex flex-wrap gap-2">
                  {product.concerns.map((concern, index) => (
                    <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {concern}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantité :</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Ajouter au panier - {formatPrice(product.price * quantity)}</span>
                </button>
                <button className="p-4 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="border-t pt-6 space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Truck className="h-5 w-5" />
                <span>Livraison gratuite dès 50€</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Shield className="h-5 w-5" />
                <span>Retours gratuits sous 30 jours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Onglets d'informations */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {[
                { id: 'description', name: 'Description' },
                { id: 'ingredients', name: 'Ingrédients' },
                { id: 'usage', name: 'Mode d\'emploi' },
                { id: 'reviews', name: `Avis (${product.reviews})` }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">{product.description}</p>
                <h4 className="text-lg font-semibold mb-4">Bienfaits :</h4>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="prose max-w-none">
                <h4 className="text-lg font-semibold mb-4">Composition INCI :</h4>
                <p className="text-gray-600 leading-relaxed">{product.ingredients}</p>
                <p className="text-sm text-gray-500 mt-4">* Ingrédients issus de l'agriculture biologique</p>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="prose max-w-none">
                <h4 className="text-lg font-semibold mb-4">Mode d'emploi :</h4>
                <p className="text-gray-600">{product.usage}</p>
                <div className="bg-yellow-50 p-4 rounded-lg mt-6">
                  <p className="text-sm text-yellow-800">
                    <strong>Conseil :</strong> Pour optimiser l'efficacité du sérum, utilisez une protection solaire le matin 
                    car la vitamine C peut augmenter la photosensibilité de la peau.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Avis clients</h4>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                    Écrire un avis
                  </button>
                </div>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{review.name}</span>
                            {review.verified && (
                              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                Achat vérifié
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating ? 'fill-current' : ''}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Produits recommandés */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Vous aimerez aussi</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="p-6 flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h4>
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(relatedProduct.rating) ? 'fill-current' : ''}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({relatedProduct.rating})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">{formatPrice(relatedProduct.price)}</span>
                      <Link
                        to={`/produit/${relatedProduct.id}`}
                        className="text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        Voir →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;