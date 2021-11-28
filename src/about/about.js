import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'

const About = () => {
    return(
        <div className="about">
            <div className="about-about"><h1 className="about--title">Par mums</h1></div>
            <div className="about__paragraph">
                <div className="about__paragraph-1">
                    <h2 className="about__heading">Kas mēs esam?</h2>
                    <p className="about__text">Mēs esam Jelgavā bāzēts IT uzņēmums, kas nodarbojas ar dažādu pakalpojumu nodrošināšanu.</p>
                </div>
                <div className="about__paragraph-2">
                    <h2 className="about__heading">Ko mēs piedāvājam?</h2>
                    <p className="about__text">Mēs piedāvājam dažāda veida mājaslapu izveidi, to uzturēšanu, datubāžu integrāciju un attīstību, kā arī serveru uzstādi un konfigurāciju.</p>
                </div>
                <div className="about__paragraph-3">
                    <h2 className="about__heading">Kā mēs šo panākam?</h2>
                    <p className="about__text">Mēs izmantojam pasaulē izplatītākās un pieprasītākās tehnoloģijas, lai izgatavotu kvalitatīvāko projektu, kā React.js un SCSS priekš vizuālās daļas, Node.js un Linux priekš serveriem, un MySQL un MongoDB priekš datubāzēm.</p>
                </div>
            </div>
            <div className="about__images">
                <img src={img1} className="image--about"></img>
                <img src={img2} className="image--about image--active"></img>
                <img src={img3} className="image--about"></img>
            </div>
        </div>
    )
}
export default About