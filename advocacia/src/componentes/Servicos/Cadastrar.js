import { useState } from "react"
import api from "../../api";
import "./index.css";

export default function Cadastrar(){

    const[nome, setNome] = useState();
    const[descricao, setDescricao] = useState();
    const[imagem, setImagem] = useState();

    const cadastrarServico = async(e) =>{
        e.preventDefault();//evitar novos envios de dados

        if(!nome && !descricao && !imagem){
            console.log("Campos Obrigatórios");
            return; 
        }
        if (nome.trim() === "" || descricao.trim() === "" || imagem.trim() === "") {
            console.log("Existe um campo vazio");
            return;
        }
        
        console.log(nome, descricao, imagem);

          try {
            const resposta = await api.post("/servico",
                {nome, descricao, imagem}
            );
             
            console.log("Sucesso");
            //setServicos(resposta.data);
        } catch (error) {
            console.log("Erro ao buscar serviços: ", error.message);
        }
    }

    return(
        <>
            <form onSubmit={cadastrarServico}>
                <label>Serviço: </label>
                <input type="text" 
                    value={nome}
                    onChange={(e)=>setNome(e.target.value)}
                 />
                <label>Descrição</label>
                <textarea
                    value={descricao}
                    onChange={(e)=>setDescricao(e.target.value)}
                ></textarea>
                <input type="text"
                    value={imagem}
                    onChange={(e)=>setImagem(e.target.value)}
                />
                <button type="submit">Cadastrar Serviço</button>
            </form>    
        </>
    )

}