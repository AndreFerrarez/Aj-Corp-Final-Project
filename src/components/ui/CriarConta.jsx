import { Link } from "react-router-dom";

export default function CriarConta() {
    return (
        <div className="criarConta">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p align="center"><b>Not a member?</b></p>
                            <p align="center">
                                <Link to={"/criarConta"}>Register here</Link>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="end">
                                ....Partner with Us for a Brighter Future.....
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}