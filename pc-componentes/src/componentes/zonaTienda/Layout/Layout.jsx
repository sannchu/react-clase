import './Layout.css'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'

function Layout(){
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {/*...componente Header .... */}
                    <Header />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    {/*...aqui se carga el contenido variable del layout en funcion de la ruta... */}
                    <p>Contenido variable del layout....</p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    {/*...componente Footer .... */}
                    <Footer />
                </div>
            </div>


        </div>
    )
}

export default Layout 