import { Link } from "react-router-dom";

export function Home(){
    return(
        <section>
            <div>
                <h1 className="color-red">Saúde Mental - logo</h1>
                {/* menu icon para esconder e mostrar o menu */}
                <menu> 
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/situacao">Situacao</Link></li>
                    <li><Link to="/ajudaUrgente">Ajuda Urgente</Link></li>
                </menu>
            </div>
            {/* texto de ajuda  */}
            <div>
                <h1>Você não está sozinho</h1>
                <p>Encontre apoio emocional e psicologico gratuito em Moçambique</p>
            </div>
            {/* botoes de acao para encontrar ajuda e ajuda urgente */}
            <div>
                <Link to="/situacao" className="btn btn-primary mb-8 color-red">
                    <button>
                        <span>icon de pesquisa</span> 
                        Encontra ajuda
                    </button>
                </Link>
                <Link to="/ajudaUrgente" className="btn btn-primary">
                    <span>icond e ajuda personalizada</span>
                    Preciso de ajuda urgente
                </Link>
                <button></button>
            </div>
            <div>
                <span>Icon de sentir confiante</span>
                <h3>Privado e seguro</h3>
                <p>voce pode navegar de forma totalmente anónimo</p>
            </div>
        </section>
    )
}

export default Home;