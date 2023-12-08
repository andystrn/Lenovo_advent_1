import './style.css';
import lenovoHero from './img/lenovo-tab-m10-plus-gen-3-hero-up.png'
import lenovoGallery1 from './img/lenovo-tab-m10-plus-gen-3-gallery-5.webp'
import lenovoGalerry2 from './img/lenovo-tab-m10-plus-gen-3-gallery-8.webp'



const ECard = ({resultRef}) => {
    const handleClick = (e) => {
        e.preventDefault();
        resultRef.current.scrollIntoView({ behavior: "smooth" });
      };

    return (
        <div className="container d-flex flex-column flex-md-row align-items-center gap-5 border border-info border-opacity-75 rounded p-4 p-md-5">
            <div id="carouselExampleIndicators" className="carousel carousel-dark slide col-md-6 gap-3">
                <div className="carousel-indicators bg-transparent d-none">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={lenovoHero} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={lenovoGallery1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={lenovoGalerry2} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-transparent " aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-transparent" aria-hidden="true"></span>
                    <span className="visually-hidden ">Next</span>
                </button>
            </div>
            <div className="col-md-6">
                <h1 className="h1 mb-3">Lenovo Tab M10 Plus Gen 3</h1>
                <h4 className="h4 text-info">Bavte se déle. Studujte rychleji.</h4>
                <div className='my-5 d-none d-md-block' style={{ width: "90%" }}>
                    <p className="body-text">Přenosný tablet pro prvotřídní zábavu, který je také perfektní pro studenty</p>
                    <hr className='' />
                    <p className="body-text">Vynikající výkon s osmijádrovým procesorem a celodenní výdrží baterie</p>
                    <hr className='' />
                    <p className="body-text">Přehrávejte videa v rozlišení až 1080p na 10,6" displeji s rozlišením 2K a technologií IPS</p>
                    <hr className='' />
                    <p className="body-text">Speciální čtecí režim a certifikát Low Blue Light pro delší používání bez námahy očí</p>
                    <hr className='' />
                    <p className="body-text">Čtyři pohlcující reproduktory s technologií Dolby Atmos®</p>
                </div>
                <div className='d-flex flex-column flex-md-row gap-4 mt-5'>
                    <button type="button" className="btn btn-info btn-lg text-white">Koupit</button>
                    <button onClick={handleClick} type="button" className="btn btn-outline-info btn-lg">Dozvědět se více</button>
                </div>
            </div>
            
        </div>
    )
}

export default ECard;