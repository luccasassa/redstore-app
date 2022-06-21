import { Link } from "react-router-dom"

const Categories = () => {
    return (
        <nav className="bot">
            <div>
                <Link to={'/Accesorios'}>ACCESORIOS</Link>
            </div>
            <div>
                <Link to={'/Altavoces'}>ALTAVOCES</Link>
            </div>
            <div>
                <Link to={'/Amplificadores'}>AMPLIFICADORES</Link>
            </div>
            <div>
                <Link to={'/Auriculares'}>AURICULARES</Link>
            </div>
            <div>
                <Link to={'/Camaras'}>CAMARAS</Link>
            </div>
            <div>
                <Link to={'/Home'}>HOME</Link>
            </div>
            <div>
                <Link to={'/Objetivos'}>OBJETIVOS</Link>
            </div>
            <div>
                <Link to={'/PlayStation®'}>PLAYSTATION®</Link>
            </div>
            <div>
                <Link to={'/Reproductores'}>REPRODUCTORES</Link>
            </div>
        </nav>
    )
}

export default Categories