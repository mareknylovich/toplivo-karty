import SignImage from '../../assets/images/painting.png'
import DirectorImage from '../../assets/images/director.jpeg'

function AboutSection() {
    return (
        <section className="About section">
            <div className="About__inner container">
                <div className="About__content">
                    <div className="About__info">
                        <p className="About__text">
                            Мы всегда верим, что Газпром - прежде всего забота о клиентах. Вот и в честь нашего дня рождения хотим исполнить небольшие мечты наших покупателей. Конечно, к сожалению, мы не можем предоставить эту возможность всем людям, но первым 1000 участникам даем гарантию на свои слова.
                        </p>
                        <div className="About__info-footer">
                            <div className="About__info-sign">
                                <img src={SignImage} alt=""/>
                            </div>
                            <div className="About__info-sign-name">
                                <span>Алексей Борисович Миллер</span> <br/>
                                <small>Председатель правления ПАО «Газпром»</small>
                            </div>
                        </div>
                    </div>
                    <div className="About__image">
                        <img src={DirectorImage} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
