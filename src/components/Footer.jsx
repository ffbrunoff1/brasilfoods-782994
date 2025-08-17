import React from 'react';
import { Rss, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20 pt-10">
      <div className="container-center section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Descrição */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src="/logo.svg" alt="Logo BRASIL FOODS" className="h-16 mb-4" />
            <p className="text-gray-300 text-sm">
              BRASIL FOODS, excelência e sabor à sua mesa.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="text-lg font-bold text-primary-300 mb-4 text-center md:text-left">Navegação</h3>
            <ul className="text-gray-300 text-sm space-y-2 text-center md:text-left">
              <li><a href="/" className="hover:text-primary-500 transition-colors">Home</a></li>
              <li><a href="/sobre" className="hover:text-primary-500 transition-colors">Sobre Nós</a></li>
              <li><a href="/servicos" className="hover:text-primary-500 transition-colors">Serviços</a></li>
              <li><a href="/produtos" className="hover:text-primary-500 transition-colors">Produtos</a></li>
              <li><a href="/contato" className="hover:text-primary-500 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-lg font-bold text-primary-300 mb-4 text-center md:text-left">Contato</h3>
            <p className="text-gray-300 text-sm text-center md:text-left">
              Email: contato@brasilfoods.com.br
            </p>
            <p className="text-gray-300 text-sm mt-2 text-center md:text-left">
              Telefone: (XX) XXXX-XXXX
            </p>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold text-primary-300 mb-4 text-center md:text-left">Nossas Redes</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com/brasilfoods" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/brasilfoods" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/brasilfoods" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.twitter.com/brasilfoods" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://www.blog.brasilfoods.com.br/rss" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Rss size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} BRASIL FOODS. Todos os direitos reservados.</p>
          <p className="mt-2">
            Criado com <em className="italic font-semibold text-primary-500"><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="hover:underline">Papum</a></em>
          </p>
        </div>
      </div>
    </footer>
  );
}