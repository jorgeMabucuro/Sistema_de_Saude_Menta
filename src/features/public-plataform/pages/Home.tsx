import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaChartBar, FaLightbulb, FaHandsHelping, FaLock, FaSearch, FaHeart, FaExclamationTriangle } from "react-icons/fa";

export function Home(){
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [showHow, setShowHow] = useState(false);

    return(
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                    <div className="flex items-center gap-2">
                        <FaHeart className="text-3xl text-yellow-400" />
                        <h1 className="text-xl font-bold text-yellow-400">Saúde Mental</h1>
                    </div>
                    
                    {/* Menu Desktop */}
                    <nav className="hidden md:flex gap-8">
                        <Link to="/" className="text-gray-700 hover:text-yellow-600 transition">Início</Link>
                        <Link to="/situacao" className="text-gray-700 hover:text-yellow-600 transition">Situação</Link>
                        <Link to="/ajudaUrgente" className="text-gray-700 hover:text-yellow-600 transition">Ajuda Urgente</Link>
                    </nav>

                    {/* Menu Mobile */}
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-2xl text-gray-700"
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <nav className="md:hidden bg-gray-50 border-t">
                        <div className="px-6 py-4 flex flex-col gap-4">
                            <Link to="/" className="text-gray-700 hover:text-yellow-500">Início</Link>
                            <Link to="/situacao" className="text-gray-700 hover:text-yellow-500">Situação</Link>
                            <Link to="/ajudaUrgente" className="text-gray-700 hover:text-yellow-500">Ajuda Urgente</Link>
                        </div>
                    </nav>
                )}
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <section className="px-6 py-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Você não está sozinho.
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Encontre apoio emocional e psicológico gratuito ou acessível em Moçambique.
                    </p>

                    {/* Illustration placeholder */}
                    {/* <div className="bg-yellow-100 rounded-lg py-16 mb-8 flex items-center justify-center">
                        <span className="text-8xl"></span>
                    </div> */}
                </section>

                {/* Action Buttons */}
                <section className="px-6 pb-8 space-y-4">
                    <button
                        onClick={() => navigate('/situacao')}
                        className="w-full bg-yellow-400 text-white py-4 rounded-lg font-semibold hover:bg-yellow-600 transition flex items-center justify-center gap-2"
                    >
                        <FaSearch className="text-xl" />
                        Encontrar ajuda
                    </button>

                    <button
                        onClick={() => navigate('/ajudaUrgente')}
                        className="w-full bg-white border-2 border-yellow-500 text-gray-900 py-4 rounded-lg font-semibold hover:bg-yellow-50 transition flex items-center justify-center gap-2"
                    >
                        <FaExclamationTriangle className="text-xl text-yellow-500" />
                        Preciso de ajuda urgente
                    </button>
                </section>

                {/* Como Funciona Section */}
                <section className="px-6 pb-8">
                    <button
                        onClick={() => setShowHow(!showHow)}
                        className="w-full flex justify-between items-center text-left font-semibold text-gray-900 py-4 hover:text-yellow-600 transition"
                    >
                        <span>Como funciona?</span>
                        <span className={`transition-transform ${showHow ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    
                    {showHow && (
                        <div className="bg-gray-50 rounded-lg p-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="flex gap-4">
                                <FaChartBar className="text-2xl text-yellow-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">1. Avalie sua situação</h4>
                                    <p className="text-gray-600">Responda a algumas perguntas simples sobre como você está se sentindo.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <FaLightbulb className="text-2xl text-yellow-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">2. Receba recomendações</h4>
                                    <p className="text-gray-600">Obtenha orientações personalizadas e recursos relevantes.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <FaHandsHelping className="text-2xl text-yellow-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">3. Acesse apoio</h4>
                                    <p className="text-gray-600">Conecte-se com profissionais e comunidades de apoio.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* Security Section */}
                <section className="px-6 pb-12">
                    <div className="bg-purple-50 shadow-md border-d200 rounded-lg p-6">
                        <div className="flex gap-4">
                            <FaLock className="text-3xl text-yellow-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-bold text-black-400 mb-2">Privado e seguro</h3>
                                <p className="text-gray-700">Você pode navegar de forma totalmente anónimo. Seus dados estão protegidos com criptografia de ponta.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home;