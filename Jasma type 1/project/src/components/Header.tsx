import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search, Hand } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const { cartItems } = useCart();
  const { currentCurrency, currencies, changeCurrency } = useCurrency();
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', path: '/' },
    { name: 'La Marque', path: '/marque' },
    { name: 'Nos Produits', path: '/produits', submenu: [
      { name: 'Visage', path: '/produits/visage' },
      { name: 'Corps', path: '/produits/corps' },
      { name: 'Bien-être', path: '/produits/bien-etre' },
      { name: 'Coffrets', path: '/produits/coffrets' }
    ]},
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Bandeau promotionnel */}
      <div className="bg-green-50 py-2 text-center text-sm text-green-800">
        <p>✨ Livraison gratuite dès 50€ • Retours gratuits • Produits 100% naturels</p>
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 text-2xl font-bold text-green-700">
              <div className="relative flex items-center justify-center w-10 h-10">
                {/* Feuille principale */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-full transform rotate-45"></div>
                <div className="absolute inset-1 bg-gradient-to-tr from-green-400 to-green-600 rounded-full transform -rotate-12"></div>
                {/* Centre avec J */}
                <div className="relative z-10 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-sm">J</span>
                </div>
                {/* Petites feuilles/gouttes */}
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-green-300 rounded-full"></div>
              </div>
              <span>Jasma</span>
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`text-gray-700 hover:text-green-600 transition-colors duration-200 px-3 py-2 text-sm font-medium ${
                      location.pathname === item.path ? 'text-green-600 border-b-2 border-green-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Sélecteur de devise */}
              <div className="relative">
                <button
                  onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-green-600 text-sm font-medium"
                >
                  <span>{currentCurrency.code}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isCurrencyOpen && (
                  <div className="absolute top-full right-0 mt-1 w-20 bg-white rounded-md shadow-lg z-50">
                    <div className="py-1">
                      {currencies.map((currency) => (
                        <button
                          key={currency.code}
                          onClick={() => {
                            changeCurrency(currency.code);
                            setIsCurrencyOpen(false);
                          }}
                          className={`block w-full text-left px-3 py-2 text-sm hover:bg-green-50 ${
                            currentCurrency.code === currency.code ? 'text-green-600 bg-green-50' : 'text-gray-700'
                          }`}
                        >
                          {currency.code}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button className="text-gray-400 hover:text-gray-500">
                <Search className="h-6 w-6" />
              </button>
              <Link to="/compte" className="text-gray-400 hover:text-gray-500">
                <User className="h-6 w-6" />
              </Link>
              <Link to="/panier" className="relative text-gray-400 hover:text-gray-500">
                <ShoppingBag className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Menu mobile */}
              <button
                className="md:hidden text-gray-400 hover:text-gray-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.path}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;