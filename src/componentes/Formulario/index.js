import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Formulário foi submetido' , nome, cargo, imagem);
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo" 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}  
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Times" 
                itens={times} />
                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>

    )
}
export default Formulario