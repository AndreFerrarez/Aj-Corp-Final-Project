import { Link } from "react-router-dom";

export default function CriarConta() {
    return (
        <div className="criarConta">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p align="center"><b>Novo por aqui?</b></p>
                            <p align="center">
                            <Link to={"/criarConta"}>Clique para se registrar</Link>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center"><b>"Seja nosso parceiro em busca de um futuro promissor"</b></p>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}