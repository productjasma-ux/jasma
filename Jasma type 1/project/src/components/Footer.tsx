import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Hand } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 text-2xl font-bold text-green-700 mb-4">
              <div className="relative flex items-center justify-center w-8 h-8">
                {/* Feuille principale */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-full transform rotate-45"></div>
                <div className="absolute inset-1 bg-gradient-to-tr from-green-400 to-green-600 rounded-full transform -rotate-12"></div>
                {/* Centre avec J */}
                <div className="relative z-10 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-xs">J</span>
                </div>
                {/* Petites feuilles/gouttes */}
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-green-300 rounded-full"></div>
              </div>
              <span>Jasma</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Des cosmétiques naturels aux huiles actives traditionnelles. 
              Beauté authentique et savoir-faire ancestral.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-600 hover:text-green-700">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-600 hover:text-green-700">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-600 hover:text-green-700">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-green-600">Accueil</Link></li>
              <li><Link to="/marque" className="text-gray-600 hover:text-green-600">La Marque</Link></li>
              <li><Link to="/produits" className="text-gray-600 hover:text-green-600">Nos Produits</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-green-600">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-green-600">Contact</Link></li>
            </ul>
          </div>

          {/* Produits */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Produits</h3>
            <ul className="space-y-2">
              <li><Link to="/produits/visage" className="text-gray-600 hover:text-green-600">Soins Visage</Link></li>
              <li><Link to="/produits/corps" className="text-gray-600 hover:text-green-600">Soins Corps</Link></li>
              <li><Link to="/produits/bien-etre" className="text-gray-600 hover:text-green-600">Bien-être</Link></li>
              <li><Link to="/produits/coffrets" className="text-gray-600 hover:text-green-600">Coffrets</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>contact@jasma.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-green-100 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Newsletter</h3>
            <p className="text-gray-600 mb-4">Recevez nos conseils beauté et nos offres exclusives</p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 border border-green-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-r-md hover:bg-green-700 transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-green-100 pt-8 mb-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span>Certifié Bio</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <span>100% Vegan</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span>Naturel</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span>Cruelty Free</span>
            </div>
          </div>
        </div>

        {/* Mentions légales */}
        <div className="border-t border-green-100 pt-8 flex flex-wrap justify-between items-center text-sm text-gray-600">
          <div className="space-x-4">
            <Link to="/mentions-legales" className="hover:text-green-600">Mentions légales</Link>
            <Link to="/confidentialite" className="hover:text-green-600">Confidentialité</Link>
            <Link to="/cgv" className="hover:text-green-600">CGV</Link>
            <Link to="/faq" className="hover:text-green-600">FAQ</Link>
          </div>
          <p>&copy; 2025 Natura Pure. Tous droits réservés.</p>
          <p>&copy; 2025 Jasma. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;