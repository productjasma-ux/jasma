import React, { useState } from 'react';
import { ChevronDown, Search, Package, CreditCard, Truck, RotateCcw, Shield, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes', icon: HelpCircle },
    { id: 'commandes', name: 'Commandes', icon: Package },
    { id: 'livraison', name: 'Livraison', icon: Truck },
    { id: 'paiement', name: 'Paiement', icon: CreditCard },
    { id: 'retours', name: 'Retours', icon: RotateCcw },
    { id: 'produits', name: 'Produits', icon: Shield }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'commandes',
      question: 'Comment passer une commande ?',
      answer: 'Pour passer commande, ajoutez vos produits préférés au panier, puis cliquez sur "Finaliser la commande". Suivez ensuite les étapes : identification, adresse de livraison, mode de paiement et validation finale.'
    },
    {
      id: 2,
      category: 'commandes',
      question: 'Puis-je modifier ma commande après validation ?',
      answer: 'Une fois votre commande validée, il n\'est plus possible de la modifier. Cependant, vous pouvez nous contacter immédiatement après votre commande, nous ferons notre possible pour vous aider si elle n\'a pas encore été préparée.'
    },
    {
      id: 3,
      category: 'livraison',
      question: 'Quels sont les délais de livraison ?',
      answer: 'Les délais de livraison sont de 2 à 3 jours ouvrés en France métropolitaine. Pour les DOM-TOM et l\'international, comptez 5 à 10 jours ouvrés selon la destination.'
    },
    {
      id: 4,
      category: 'livraison',
      question: 'La livraison est-elle gratuite ?',
      answer: 'Oui ! La livraison est gratuite dès 50€ d\'achat en France métropolitaine. En dessous de ce montant, les frais de livraison sont de 4,90€.'
    },
    {
      id: 5,
      category: 'livraison',
      question: 'Comment suivre ma commande ?',
      answer: 'Une fois votre commande expédiée, vous recevrez un email avec un numéro de suivi. Vous pouvez également suivre votre commande depuis votre espace client.'
    },
    {
      id: 6,
      category: 'paiement',
      question: 'Quels moyens de paiement acceptez-vous ?',
      answer: 'Nous acceptons les cartes bancaires (Visa, Mastercard), PayPal, Apple Pay et Google Pay. Tous les paiements sont sécurisés via SSL.'
    },
    {
      id: 7,
      category: 'paiement',
      question: 'Le paiement est-il sécurisé ?',
      answer: 'Absolument ! Nos paiements sont entièrement sécurisés grâce au cryptage SSL et nos partenaires bancaires certifiés. Vos données ne sont jamais stockées sur nos serveurs.'
    },
    {
      id: 8,
      category: 'retours',
      question: 'Quelle est votre politique de retour ?',
      answer: 'Vous disposez de 30 jours pour retourner vos produits non utilisés dans leur emballage d\'origine. Les retours sont gratuits et le remboursement s\'effectue sous 7 jours après réception.'
    },
    {
      id: 9,
      category: 'retours',
      question: 'Comment retourner un produit ?',
      answer: 'Connectez-vous à votre espace client, sélectionnez la commande concernée et cliquez sur "Retourner un produit". Imprimez l\'étiquette de retour prépayée et déposez le colis en point relais.'
    },
    {
      id: 10,
      category: 'produits',
      question: 'Vos produits sont-ils vraiment naturels ?',
      answer: 'Oui, tous nos produits sont formulés avec des ingrédients naturels et biologiques. Nous sommes certifiés Ecocert Cosmos Organic et nos compositions sont transparentes.'
    },
    {
      id: 11,
      category: 'produits',
      question: 'Vos produits conviennent-ils aux peaux sensibles ?',
      answer: 'Absolument ! Nos formules sont spécialement conçues pour respecter tous types de peaux, même les plus sensibles. Tous nos produits sont testés dermatologiquement.'
    },
    {
      id: 12,
      category: 'produits',
      question: 'Testez-vous sur les animaux ?',
      answer: 'Non, jamais ! Nous sommes fermement opposés aux tests sur animaux. Tous nos produits sont certifiés Cruelty Free par Leaping Bunny.'
    },
    {
      id: 13,
      category: 'produits',
      question: 'Quelle est la durée de conservation de vos produits ?',
      answer: 'Nos produits ont une durée de conservation de 12 à 24 mois selon le produit (indiquée sur l\'emballage). Une fois ouverts, nous recommandons de les utiliser dans les 6 à 12 mois.'
    },
    {
      id: 14,
      category: 'commandes',
      question: 'Puis-je commander sans créer de compte ?',
      answer: 'Oui, vous pouvez commander en tant qu\'invité. Cependant, créer un compte vous permet de suivre vos commandes, gérer vos adresses et accéder à des offres exclusives.'
    },
    {
      id: 15,
      category: 'produits',
      question: 'Proposez-vous des échantillons ?',
      answer: 'Nous incluons souvent des échantillons gratuits dans vos commandes pour vous faire découvrir nos nouveautés. Vous pouvez également commander nos coffrets découverte à prix réduit.'
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredItems = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à toutes vos questions sur nos produits, 
              commandes et services.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Barre de recherche */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Rechercher une question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
          />
        </div>

        {/* Catégories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Questions/Réponses */}
        <div className="space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucune question trouvée pour votre recherche.</p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform flex-shrink-0 ${
                        openItems.includes(item.id) ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Contact pour plus d'aide */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Vous ne trouvez pas votre réponse ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre équipe de support client est là pour vous aider. 
            Contactez-nous et nous vous répondrons rapidement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors"
            >
              Nous contacter
            </a>
            <a
              href="tel:0123456789"
              className="border border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-50 transition-colors"
            >
              01 23 45 67 89
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;