import { Link } from "react-router-dom"

const Categories = () => {
    return (
        <nav className="bot">
            <div>
                <Link to={'/Categoria/Accesorios'}>ACCESORIOS</Link>
            </div>
            <div>
                <Link to={'/Categoria/Altavoces'}>ALTAVOCES</Link>
            </div>
            <div>
                <Link to={'/Categoria/Amplificadores'}>AMPLIFICADORES</Link>
            </div>
            <div>
                <Link to={'/Categoria/Auriculares'}>AURICULARES</Link>
            </div>
            <div>
                <Link to={'/Categoria/Camaras'}>CAMARAS</Link>
            </div>
            <div>
                <Link to={'/Categoria/Home'}>HOME</Link>
            </div>
            <div>
                <Link to={'/Categoria/Objetivos'}>OBJETIVOS</Link>
            </div>
            <div>
                <Link to={'/Categoria/PlayStation®'}>PLAYSTATION®</Link>
            </div>
            <div>
                <Link to={'/Categoria/Reproductores'}>REPRODUCTORES</Link>
            </div>
        </nav>
    )
}

export default Categories