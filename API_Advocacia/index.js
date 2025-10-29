const express = require("express"); //simplicfica o desenvolvimento de API
const sequelize = require("./dataBase");//permite a conexão com o banco de dados 
const Servicos = require("./modelos/Servicos"); //modelo para criação de tabela "Servico"
const cors = require("cors"); //permite conexão de paginas WEB

const app = express();

app.use('/uploads', express.static('uploads')); //------ ALTERADA ------------

app.use(cors())
app.use(express.json());

const port = 5000; //------ ALTERADA ------------

sequelize.sync().then(() => {
    console.log("Base de Dados conectado com sucesso!!!");
})

app.get("/", (req, res) => {
    res.status(200).json(
        {
            "mensagem": "Rota Principal"
        }
    )
})

app.post("/servico", async (req, res) => {
    const { nome, descricao, imagem } = req.body;

    if (!nome || !descricao || !imagem) {
        return res.status(400).json({
            erro: "Todos os campos (nome, descricao, imagem) são obrigatórios."
        });
    }

    if (nome.trim() === "" || descricao.trim() === "" || imagem.trim() === "") {
        return res.status(400).json({
            erro: "Os campos não podem estar vazios ou conter apenas espaços."
        });
    }

    try {
        const servico = await Servicos.create({ nome, descricao, imagem });
        return res.status(201).json({
            servico,
            mensagem: "Serviço cadastrado com sucesso!"
        });
    } catch (error) {
        console.error("Erro ao inserir o serviço:", error);
        return res.status(500).json({
            erro: "Erro interno ao tentar inserir o registro."
        });
    }
})

app.get("/servicos", async (req, res) => {
    try {
        const servicos = await Servicos.findAll();
        if (servicos.length > 0) {
            res.status(200).json(servicos)
        } else {
            res.status(204).json({ "message": "Não há registros cadastrados!!!" })
        }
    } catch {
        res.status(500).json({
            erro: "Erro ao buscar o registro"
        })
    }
})
app.get("/servico/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id)){ return res.status(400).json({"mensagem":"O id deve ser numérico!!!"}) }
    if(id < 0) { return res.status(400).json({"mensagem":"O id deve ser maior que zero!!!"}) }

    try{
        const resposta = await Servicos.findByPk(id);
    
        if (resposta.length === 0) {
            return res.status(200).json({
                "mensagem": "Serviço não encontrado"
            });
        } 
            res.status(200).json(resposta);
      
    }catch(error){
        res.status(500).json({"erro":error.message});
    }
})
app.delete("/servico/:id", async (req, res) => {
    const id = req.params.id;

    if(isNaN(id)){ 
        return res.status(400).json({"mensagem":"O id deve ser numérico!!!"}) 
    }
    if(id < 0) {
        return res.status(400).json({"mensagem":"O id deve ser maior que zero!!!"}) 
    }

    try {
        const servico = await Servicos.findByPk(id);

        if (!servico) {
            return res.status(404).json({ mensagem: "Serviço não encontrado." });
        }

        await servico.destroy();

        return res.status(200).json({ mensagem: "Serviço excluído com sucesso!" });
    } catch (error) {
        console.error("Erro ao excluir serviço:", error);
        return res.status(500).json({ mensagem: "Erro interno ao excluir o serviço." });
    }


})

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
});