import React from 'react';
import { Leaf, Heart, Shield, Users, Award, Globe } from 'lucide-react';

const Brand: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Notre <span className="text-green-600">Histoire</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Depuis 2018, nous nous engageons à créer des cosmétiques naturels 
              d'exception, respectueux de votre peau et de notre planète.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Chez Jasma, nous croyons que la beauté authentique émane des traditions ancestrales. 
                Notre mission est de vous offrir des soins cosmétiques naturels d'exception, 
                formulés selon les recettes traditionnelles aux huiles précieuses, pour révéler 
                la beauté naturelle de votre peau selon l'art traditionnel.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Nous nous engageons à préserver les traditions ancestrales, à soutenir l'artisanat local 
                et à créer des produits authentiques et durables pour les générations futures.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">7</div>
                  <div className="text-sm text-gray-600">Années d'expertise</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Produits naturels</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Notre laboratoire"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des principes qui guident chacune de nos actions et décisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">100% Naturel</h3>
              <p className="text-gray-600">
                Tous nos produits sont formulés avec des ingrédients naturels et bio, 
                sans parabènes, sulfates ou conservateurs chimiques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Respect de la Peau</h3>
              <p className="text-gray-600">
                Nos formules sont testées dermatologiquement et adaptées à tous types de peaux, 
                même les plus sensibles et réactives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Éthique</h3>
              <p className="text-gray-600">
                Nous ne testons jamais nos produits sur les animaux et privilégions 
                des partenaires respectueux des droits humains et de l'environnement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Transparence</h3>
              <p className="text-gray-600">
                Nous croyons en la transparence totale : composition détaillée, 
                origine des ingrédients, processus de fabrication.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Qualité</h3>
              <p className="text-gray-600">
                Chaque produit est soumis à des contrôles qualité stricts pour garantir 
                efficacité, sécurité et satisfaction client.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Durabilité</h3>
              <p className="text-gray-600">
                Emballages recyclables, réduction des déchets, soutien à l'agriculture 
                biologique pour un impact positif sur l'environnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Processus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Processus de Création</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              De la sélection des ingrédients à la livraison, chaque étape est pensée pour vous offrir le meilleur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Sélection</h3>
              <p className="text-gray-600 text-sm">
                Choix rigoureux d'ingrédients naturels et bio auprès de producteurs certifiés
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Formulation</h3>
              <p className="text-gray-600 text-sm">
                Développement de formules uniques par nos experts cosmétiques
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Tests</h3>
              <p className="text-gray-600 text-sm">
                Tests dermatologiques et validation de l'efficacité et de la tolérance
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Production</h3>
              <p className="text-gray-600 text-sm">
                Fabrication artisanale dans notre laboratoire certifié bio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Certifications</h2>
            <p className="text-lg text-gray-600">Des garanties officielles de qualité et d'éthique</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
              </div>
              <h3 className="font-semibold">Certifié Bio</h3>
              <p className="text-sm text-gray-600">Ecocert Cosmos Organic</p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
              </div>
              <h3 className="font-semibold">100% Vegan</h3>
              <p className="text-sm text-gray-600">Vegan Society</p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
              </div>
              <h3 className="font-semibold">Cruelty Free</h3>
              <p className="text-sm text-gray-600">Leaping Bunny</p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
              </div>
              <h3 className="font-semibold">Eco-Responsable</h3>
              <p className="text-sm text-gray-600">Emballages recyclables</p>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-lg text-gray-600">Passionnés par la beauté naturelle et l'innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Sarah Martin"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Sarah Martin</h3>
              <p className="text-green-600 mb-2">Fondatrice & Directrice</p>
              <p className="text-gray-600 text-sm">
                Experte en cosmétique naturelle avec 15 ans d'expérience dans l'industrie de la beauté.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Dr. Marie Dubois"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Dr. Marie Dubois</h3>
              <p className="text-green-600 mb-2">Formulatrice en Chef</p>
              <p className="text-gray-600 text-sm">
                Docteure en chimie cosmétique, spécialisée dans les actifs naturels et les huiles essentielles.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Thomas Laurent"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Thomas Laurent</h3>
              <p className="text-green-600 mb-2">Responsable Qualité</p>
              <p className="text-gray-600 text-sm">
                Ingénieur chimiste, garant de la qualité et de la sécurité de nos produits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brand;