import './estiloHome.css';
import api from '../../api';

import fundoHome from './man-5806012_1920.jpg';

import { useEffect, useState } from 'react';
function Home() {
    const [servicos, setServicos] = useState([]);
    const buscarServico = async () => {
        try {
            const resposta = await api.get("/servicos");
            setServicos(resposta.data);
            //console.log(resposta.data)
        } catch (error) {
            console.log("Erro ao buscar serviços: ", error.message);
        }
    };
    useEffect(() => {
        buscarServico()
    }, []);

    return (
        <main className='container'>
            <section id="home"
                style={
                    {
                        backgroundImage: `url(${fundoHome})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }
                }>
                <p>Seja para sua empresa ou para questões específicas pessoais, nós daremos a direção que você precisa para alcançar a melhor solução possível.</p>
            </section>
            <section id="areaAtuacao">
                <h1>Página Área de Atuação</h1>
                <div className='listaAreaAtuacao'>
                    {
                        servicos.map(
                            (item, index) => (
                                <article key={index}>
                                    <img src={`http://localhost:5000/uploads/${item.imagem}`} 
                                    alt={item.nome} title={item.nome} width={300} />
                                    <h2>{item.nome}</h2>
                                    <p>{item.descricao}</p>
                                </article>
                            )
                        )
                    }
                </div>
            </section>
            <section id="contato">
                <h1>Página Contato</h1>
            </section>
        </main>
    )
}
export default Home;