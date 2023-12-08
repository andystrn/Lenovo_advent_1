import './style.css';
import lenovoGallery3 from './img/lenovo-tab-m10-plus-gen-3-feature-1.webp';
import lenovoGallery4 from './img/lenovo-tab-m10-plus-gen-3-feature-2.webp';
import lenovoGallery5 from './img/lenovo-tab-m10-plus-gen-3-feature-3.webp';
import lenovoGallery6 from './img/lenovo-tab-m10-plus-gen-3-feature-5.webp';
import lenovoGallery7 from './img/lenovo-tab-m10-plus-gen-3-feature-6.webp';
import lenovoGallery8 from './img/lenovo-tab-m10-plus-gen-3-feature-7.webp';
import lenovoGallery9 from './img/lenovo-tab-m10-plus-gen-3-feature-8.webp';
import { forwardRef } from 'react';

const ECardDetail = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="container d-flex flex-column text-white p-md-5">
            <div className='d-flex flex-column flex-md-row align-items-center my-5 '>
                <div className="col-md-6">
                    <h2 className="h2 text-info">Prvotřídní zábava</h2>
                    <div className='mt-4' style={{ width: "90%" }}>
                        <p className="body-text lh-lg">Užijte si ohromující 10,6" 2K displej s technologií IPS na Tab M10 Plus Gen 3. Koukejte na Netflix, Disney+ a další v rozlišení až 1080p, což je maximální rozlišení videa dostupné pro mobilní zařízení. A s certifikací TÜV Low Blue Light si můžete užívat dlouhé hodiny u obrazovky – navíc se čtyřmi reproduktory, které vás obklopí pohlcujícím zvukem.</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img src={lenovoGallery3} className='img-fluid' />
                </div>
            </div>
        
            <div className='d-flex flex-column flex-md-row align-items-centermy-5 gap-md-5'>
                <div className='col-md-6 d-none d-md-block'>
                    <img src={lenovoGallery4} className='img-fluid' />
                </div>
                <div className="col-md-6">
                    <h2 className="h2 text-info">Pracujte chytře — ne složitě</h2>
                    <div className='mt-4' style={{ width: "90%" }}>
                        <p className="body-text lh-lg">Lehký přenosný tablet, jako je Tab M10 Plus Gen 3, je také skvělý pro studentské výzkumy a projekty. Spolupracuje s aplikací Lenovo Instant Memo, díky níž je interakce s obrazovkou hračkou, od ručně psaných poznámek a náčrtů přes označování dokumentů až po přetahování textu. A pro maximální rychlost a pohodlí můžete přidat volitelný stylus Lenovo Precision Pen 2 (není součástí balení).</p>
                    </div>
                </div>
                <div className='col-md-6 d-md-none'>
                    <img src={lenovoGallery4} className='img-fluid' />
                </div>
            </div>

            <div className='d-flex flex-column flex-md-row align-items-center my-5'>
                <div className="col-md-6">
                    <h2 className="h2 text-info">Soustřeďte se s režimem čtení</h2>
                    <div className='mt-4' style={{ width: "90%" }}>
                        <p className="body-text lh-lg">Pohlcující režim čtení šetří vaše oči při dlouhém používání tabletu. Zlepšuje čitelnost tím, že simuluje barevnost stránek v tištěné knize, takže imituje čtení na papíře. Použijte ztlumené nastavení chromatiky nebo přepněte na mono/stupně šedi, abyste se mohli lépe soustředit a snížili námahu očí, ať už čtete e-knihu, upravujete dlouhý dokument, cokoliv jiného.</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img src={lenovoGallery5} className='img-fluid' />
                </div>
            </div>
        
            <div className='d-flex flex-column flex-md-row align-items-centermy-5 gap-md-5'>
                <div className='col-md-6 d-none d-md-block'>
                    <img src={lenovoGallery6} className='img-fluid' />
                </div>
                <div className="col-md-6">
                    <h2 className="h2 text-info">Vždy v obraze</h2>
                    <div className='mt-4' style={{ width: "90%" }}>
                        <p className="body-text lh-lg">Tablet Tab M10 Plus Gen 3 je poháněn operačním systémem Android™ 12. Získáte všechny nejnovější funkce systému Android™ 12 a užijete si skvělé zabezpečení a další vylepšení - s ještě novější verzí, Android™ 13, který je očekáván v roce 2023.</p>
                    </div>
                </div>
                <div className='col-md-6 d-md-none'>
                    <img src={lenovoGallery6} className='img-fluid' />
                </div>
            </div>

            <div className='d-flex flex-column flex-md-row align-items-center my-5'>
                <div className="col-md-6">
                    <h2 className="h2 text-info">Skvělý výkon a dlouhá výdrž baterie</h2>
                    <div className='mt-4' style={{ width: "90%" }}>
                        <p className="body-text lh-lg">Přehrávejte filmy, studujte a provádějte multitasking i bez připojení k zásuvce. Díky kvalitním osmijádrovým procesorům nabízí Tab M10 Plus Gen 3 skutečný výkon. A s celodenní výdrží baterie můžete vzít tablet s sebou kamkoliv.</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img src={lenovoGallery7} className='img-fluid' />
                </div>
            </div>

            <div className='d-flex flex-column flex-md-row align-items-centermy-5 gap-md-5'>
                <div className='col-md-6 d-none d-md-block'>
                    <img src={lenovoGallery8} className='img-fluid' />
                </div>
                <div className="col-md-6">
                    <h2 className="h2 text-info">Udělejte dojem</h2>
                    <div className='mt-4' style={{ width: "90%" }}>
                        <p className="body-text lh-lg">Tab M10 Plus Gen 3 disponuje odvážným a moderním designem se skvělými funkcemi. Je velmi tenký - pouze 7,45 mm - a jeho hmotnost začíná na 465 g. Díky hliníkovému šasi je lehký a zároveň odolný. A s možností dvou barevných provedení Storm Grey a Frost Blue vystoupíte z davu.</p>
                    </div>
                </div>
                <div className='col-md-6 d-md-none'>
                    <img src={lenovoGallery8} className='img-fluid' />
                </div>
            </div>

            <div className='d-flex flex-column flex-md-row align-items-center my-5'>
                <div className="col-md-6">
                    <h2 className="h2 text-info">Ideální i pro děti</h2>
                    <div className='mt-4' style={{ width: "90%" }}>
                        <p className="body-text lh-lg">Google Kids Space*—předinstalovaný na tabletech Lenovo—pomáhá dětem objevovat, tvořit a růst díky knihovně s kvalitním obsahem, který jim otvírá nové cesty, jak se vyvíjet. Pomocí rodičovské kontroly aplikace Family Link můžete spravovat dostupný obsah ze svého vlastního zařízení a nastavovat časové limity doby strávené u zařízení atd.</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img src={lenovoGallery9} className='img-fluid' />
                </div>
            </div>

            <div className='d-flex flex-column flex-md-row align-items-centermy-5 gap-md-5'>
                <div className='col-md-6 d-none d-md-block'>
                    <img src={lenovoGallery3} className='img-fluid' />
                </div>
                <div className="col-md-6">
                    <h2 className="h2 text-info">Ty nejužitečnější aplikace od Google</h2>
                    <div className='mt-4' style={{ width: "90%" }}>
                        <p className="body-text lh-lg">Máte rádi fotografie? Astronomii? Hledáte nové způsoby, jak být ve spojení s přáteli? Google Play nabízí aplikace pro všechno a ještě víc. Google Play Protect navíc udržuje vaše zařízení čisté a vaše data v bezpečí. Skenuje více než 100 milionů aplikací denně, dokonce i ty, které jste ještě nenainstalovali, abyste mohli zabezpečit svá data před všemi špatně fungujícími aplikacemi.</p>
                    </div>
                </div>
                <div className='col-md-6 d-md-none'>
                    <img src={lenovoGallery3} className='img-fluid' />
                </div>
            </div>
        </div>
    
    )
})

export default ECardDetail;