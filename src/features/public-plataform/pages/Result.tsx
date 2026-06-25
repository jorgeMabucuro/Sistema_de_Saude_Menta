import { Link } from "react-router-dom";


export function Result(){
    return (
        <section>
            <div>
                <h1>Resultados para ansiedade</h1>
                <button><span>icon</span>Filtrar</button>
            </div>
            <div>
                <h3>Centros encontrados</h3>
               <Link to="/detalhes">
                <div>
                    <div><span>icon</span></div>
                    <div>
                        <h2>Centro de Apoio psicologico</h2>
                        <h3>Maputo</h3>
                        <p>Apoio psicologico individuoale grupal</p>
                    </div>
                </div>
               </Link> 
                <div>
                    <div><span>icon</span></div>
                    <div>
                        <h2>Centro de Apoio psicologico</h2>
                        <h3>Maputo</h3>
                        <p>Apoio psicologico individuoale grupal</p>
                    </div>
                </div>
                <div>
                    <div><span>icon</span></div>
                    <div>
                        <h2>Centro de Apoio psicologico</h2>
                        <h3>Maputo</h3>
                        <p>Apoio psicologico individuoale grupal</p>
                    </div>
                </div>
            </div>
            <div>
                <button>ver no mapa</button>
            </div>
        </section>
    )
}

export default Result;