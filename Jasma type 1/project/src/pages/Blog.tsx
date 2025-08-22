import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  const featuredPost = {
    id: 1,
    title: 'Les 5 ingrédients naturels indispensables pour une peau éclatante',
    excerpt: 'Découvrez les secrets des ingrédients naturels les plus efficaces pour révéler la beauté naturelle de votre peau.',
    image: 'https://images.pexels.com/photos/4465548/pexels-photo-4465548.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Dr. Marie Dubois',
    date: '15 janvier 2025',
    readTime: '5 min',
    category: 'Conseils'
  };

  const posts = [
    {
      id: 2,
      title: 'Routine de soin naturelle pour peaux sensibles',
      excerpt: 'Une routine douce et efficace pour prendre soin des peaux les plus délicates.',
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sarah Martin',
      date: '12 janvier 2025',
      readTime: '7 min',
      category: 'Routine'
    },
    {
      id: 3,
      title: 'DIY : Masque purifiant à l\'argile verte',
      excerpt: 'Apprenez à réaliser votre masque purifiant maison avec des ingrédients naturels.',
      image: 'https://images.pexels.com/photos/4465834/pexels-photo-4465834.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Julie Durand',
      date: '10 janvier 2025',
      readTime: '4 min',
      category: 'DIY'
    },
    {
      id: 4,
      title: 'L\'importance de la vitamine C dans votre routine beauté',
      excerpt: 'Pourquoi et comment intégrer la vitamine C dans votre routine de soins quotidienne.',
      image: 'https://images.pexels.com/photos/4465825/pexels-photo-4465825.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Marie Dubois',
      date: '8 janvier 2025',
      readTime: '6 min',
      category: 'Conseils'
    },
    {
      id: 5,
      title: 'Aromathérapie : les bienfaits des huiles essentielles',
      excerpt: 'Découvrez comment utiliser les huiles essentielles pour votre bien-être quotidien.',
      image: 'https://images.pexels.com/photos/4465820/pexels-photo-4465820.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Thomas Laurent',
      date: '5 janvier 2025',
      readTime: '8 min',
      category: 'Bien-être'
    },
    {
      id: 6,
      title: 'Cosmétiques solides : pourquoi faire le choix du durable ?',
      excerpt: 'Les avantages écologiques et pratiques des cosmétiques solides.',
      image: 'https://images.pexels.com/photos/4465822/pexels-photo-4465822.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sarah Martin',
      date: '3 janvier 2025',
      readTime: '5 min',
      category: 'Écologie'
    },
    {
      id: 7,
      title: 'Préparer sa peau pour l\'hiver avec des soins naturels',
      excerpt: 'Comment adapter sa routine beauté aux changements de saison.',
      image: 'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Julie Durand',
      date: '1 janvier 2025',
      readTime: '6 min',
      category: 'Saison'
    }
  ];

  const categories = [
    { name: 'Tous', count: 7 },
    { name: 'Conseils', count: 2 },
    { name: 'Routine', count: 1 },
    { name: 'DIY', count: 1 },
    { name: 'Bien-être', count: 1 },
    { name: 'Écologie', count: 1 },
    { name: 'Saison', count: 1 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Conseils</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos conseils d'experts, astuces beauté et guides pour révéler 
              votre beauté naturelle avec nos produits.
            </p>
          </div>
        </div>
      </div>

      {/* Article vedette */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg mb-12">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Article vedette
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-green-600 font-medium text-sm">{featuredPost.category}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <User className="h-4 w-4 mr-2" />
                <span className="mr-4">{featuredPost.author}</span>
                <Calendar className="h-4 w-4 mr-2" />
                <span className="mr-4">{featuredPost.date}</span>
                <Clock className="h-4 w-4 mr-2" />
                <span>{featuredPost.readTime} de lecture</span>
              </div>
              <Link
                to={`/blog/${featuredPost.id}`}
                className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors inline-flex items-center group w-fit"
              >
                Lire l'article
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Filtres et articles */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Catégories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors flex items-center justify-between"
                  >
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-400">({category.count})</span>
                  </button>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-green-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Newsletter</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Recevez nos derniers conseils beauté directement dans votre boîte mail.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-3 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    S'abonner
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Articles */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span>{post.date}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-green-600 font-medium hover:text-green-700 inline-flex items-center group"
                    >
                      Lire la suite
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                  Précédent
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;