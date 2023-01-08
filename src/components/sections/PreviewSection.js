import PreviewImage from '../../assets/images/preview__image.jpg'
import Countdown from 'react-countdown';

const renderer = ({ hours, minutes, seconds }) => {

    hours = hours <= 9 && hours >= 0 ? `0${hours}` : hours
    minutes = minutes <= 9 && minutes >= 0 ? `0${minutes}` : minutes
    seconds = seconds <= 9 && seconds >= 0 ? `0${seconds}` : seconds

    return (
        <div className="Preview__timer-area">
            <div className="Preview__timer-item">
                <span className="Preview__timer-value">
                    {hours}
                </span>
                <span className="Preview__timer-label">
                    часов
                </span>
            </div>
            <div className="Preview__timer-item">
                <span className="Preview__timer-value">
                    {minutes}
                </span>
                <span className="Preview__timer-label">
                    минут
                </span>
            </div>
            <div className="Preview__timer-item">
                <span className="Preview__timer-value">
                    {seconds}
                </span>
                <span className="Preview__timer-label">
                    секунд
                </span>
            </div>
        </div>
    )
}

function PreviewSection() {

    function goToSection(query) {
        const element = document.querySelector(query)
        element.scrollIntoView({behavior: "smooth"});
    }

    return (
        <section className="Preview">
            <div className="Preview__inner container">
                <div className="Preview__content">
                    <div className="Preview__image">
                        <img src={PreviewImage} alt=""/>
                    </div>
                    <div className="Preview__info">
                        <h1 className="Preview__title title">
                            Скидка 50% на бензин ПАО "Газпром"!
                        </h1>
                        <p className="Preview__text">
                            Купите топливную карту с балансом за половину стоимости!
                        </p>
                        <div className="Preview__timer">
                            <div className="Preview__timer-title">
                                До конца акции осталось:
                            </div>
                            <Countdown
                                zeroPadDays={2}
                                date={Date.now() + 1000 * 60 * 60 * 18}
                                renderer={renderer}
                            />
                        </div>
                        <button className="Preview__more button" onClick={goToSection.bind(null, '#products')}>
                            Купить
                        </button>
                    </div>
                </div>
                <div className="Preview__progress">
                    <div className="Preview__progress-title">
                        Всего участвует <b>1000</b> <br/> топливных карт, осталось: <b>39</b>
                    </div>
                    <div className="Preview__progress-line progress">
                        <div className="progress__content">
                            <div className="progress__current">
                                39
                            </div>
                            <div className="progress__max">
                                100
                            </div>
                        </div>
                        <div className="progress__fill" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PreviewSection;
