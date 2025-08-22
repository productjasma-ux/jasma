import React, { useState } from 'react';
import { User, Package, MapPin, Heart, Settings, LogOut, Edit, Plus } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const { formatPrice } = useCurrency();

  const tabs = [
    { id: 'profile', name: 'Mon Profil', icon: User },
    { id: 'orders', name: 'Mes Commandes', icon: Package },
    { id: 'addresses', name: 'Adresses', icon: MapPin },
    { id: 'wishlist', name: 'Ma Liste', icon: Heart },
    { id: 'settings', name: 'Paramètres', icon: Settings }
  ];

  const orders = [
    {
      id: 'CMD-2025-001',
      date: '15 janvier 2025',
      status: 'Livrée',
      total: 67.5,
      items: [
        { name: 'Sérum Éclat Vitamine C', quantity: 1, price: 45 },
        { name: 'Crème Hydratante Aloe Vera', quantity: 1, price: 28 }
      ]
    },
    {
      id: 'CMD-2025-002',
      date: '8 janvier 2025',
      status: 'En cours',
      total: 89,
      items: [
        { name: 'Coffret Rituel Détox', quantity: 1, price: 89 }
      ]
    }
  ];

  const addresses = [
    {
      id: 1,
      type: 'Domicile',
      name: 'Marie Dupont',
      address: '123 Rue des Fleurs',
      city: '75001 Paris',
      country: 'France',
      isDefault: true
    },
    {
      id: 2,
      type: 'Bureau',
      name: 'Marie Dupont',
      address: '456 Avenue des Cosmétiques',
      city: '75008 Paris',
      country: 'France',
      isDefault: false
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Masque Purifiant Argile Verte',
      price: 32,
      image: 'https://images.pexels.com/photos/4465834/pexels-photo-4465834.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true
    },
    {
      id: 2,
      name: 'Huile Corps Nourrissante',
      price: 35,
      image: 'https://images.pexels.com/photos/4465830/pexels-photo-4465830.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Mon Compte</h1>
              <p className="text-gray-600">Gérez votre profil et vos commandes</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-semibold text-gray-900">Marie Dupont</p>
                <p className="text-sm text-gray-600">membre depuis janvier 2024</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-green-50 text-green-600 border border-green-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
                <hr className="my-4" />
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50">
                  <LogOut className="h-5 w-5" />
                  <span>Déconnexion</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Contenu */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Mon Profil</h2>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center space-x-2 text-green-600 hover:text-green-700"
                  >
                    <Edit className="h-4 w-4" />
                    <span>{isEditing ? 'Annuler' : 'Modifier'}</span>
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                      <input
                        type="text"
                        value="Marie"
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 disabled:bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                      <input
                        type="text"
                        value="Dupont"
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 disabled:bg-gray-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value="marie.dupont@email.com"
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 disabled:bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      value="+33 6 12 34 56 78"
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 disabled:bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date de naissance</label>
                    <input
                      type="date"
                      value="1990-05-15"
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 disabled:bg-gray-50"
                    />
                  </div>

                  {isEditing && (
                    <div className="flex space-x-4">
                      <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                        Enregistrer
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Annuler
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes Commandes</h2>
                  
                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-900">Commande {order.id}</h3>
                            <p className="text-gray-600">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                              order.status === 'Livrée' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>{item.name} x{item.quantity}</span>
                              <span>{formatPrice(item.price)}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="font-semibold">Total: {formatPrice(order.total)}</span>
                          <div className="space-x-2">
                            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                              Voir détails
                            </button>
                            {order.status === 'Livrée' && (
                              <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                                Racheter
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Mes Adresses</h2>
                  <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    <Plus className="h-4 w-4" />
                    <span>Ajouter</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {addresses.map((address) => (
                    <div key={address.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">{address.type}</h3>
                        {address.isDefault && (
                          <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                            Par défaut
                          </span>
                        )}
                      </div>
                      <div className="text-gray-600 space-y-1">
                        <p>{address.name}</p>
                        <p>{address.address}</p>
                        <p>{address.city}</p>
                        <p>{address.country}</p>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                          Modifier
                        </button>
                        <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                          Supprimer
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ma Liste d'Envies</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-6 flex space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-lg font-bold text-gray-900 mb-2">{formatPrice(item.price)}</p>
                        <div className="flex space-x-2">
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                            Ajouter au panier
                          </button>
                          <button className="text-red-600 hover:text-red-700 text-sm">
                            Retirer
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Paramètres</h2>
                
                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" defaultChecked />
                        <span className="text-gray-700">Recevoir les promotions par email</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" defaultChecked />
                        <span className="text-gray-700">Notifications de suivi de commande</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                        <span className="text-gray-700">Newsletter conseils beauté</span>
                      </label>
                    </div>
                  </div>

                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Confidentialité</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                        <span className="text-gray-700">Partager mes données pour améliorer l'expérience</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                        <span className="text-gray-700">Cookies de personnalisation</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Mot de passe</h3>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                      Changer le mot de passe
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;