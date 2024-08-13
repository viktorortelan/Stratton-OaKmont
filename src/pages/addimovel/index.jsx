import { Link } from 'react-router-dom';
import './index.scss';

export default function TelaAdd() {
    return (
      <div className="Tela-add">
        <div className="esquerda">
          <div className="intro">
            <img src="/assets/images/loganfeelgood.png" alt="logan" />
            <div className="texto">
              <h1> FEEL GOOD INC</h1>
              <p>ADMIN PAINEL</p>
            </div>
          </div>
          <div className="botoes">
            <Link to="/addimovel">ADICIONAR IMOVEL</Link>
            <Link to="/gestao">GESTÃO DE IMOVEIS</Link>
            <Link to="/">GESTÃO DE CLIENTE</Link>
          </div>
        </div>

        <div className="direita">
          <div className="cabecalho">
            <h1>Seja bem-vindo, viktor!</h1>
            <img src="/assets/images/semfoto.png" alt="" />
          </div>

          <div className="addimovel">

            <div className="add">
                <img src="/assets/images/addimovel.png" alt="addimovel" />
                <div className="botoes">
                    <button>ADICIONAR IMAGEM</button>
                    <button>EDITAR IMAGEM</button>
                </div>
            </div>
            
            <div className="infos">
                <h1>ADICIONAR IMOVEL</h1>
                <input type="text" placeholder='Nome do apartamento'  />
                <input type="text"  placeholder='Status'/>
                <input type="text"  placeholder='Localização'/>
                <input type="text"  placeholder='Vagas de garagem'/>
                <button>Cadastrar</button>
            </div>


          </div>
        </div>
      </div>
    );
}
