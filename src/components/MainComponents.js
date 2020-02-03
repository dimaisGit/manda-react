import React from 'react'

import tour from '../img/prices-main/tour.png'
import tel from '../img/prices-main/tel.png'
import card from '../img/prices-main/card.png'
import plane from '../img/prices-main/plane.png'
import mandarin from '../img/prices-main/mandarin.png'
import list from '../img/prices-main/list.png'

export default class MainComponent extends React.Component {
    render() {
        return (
            <section className="oranged main">
                <div className="container flexing">
                    <div className="col">
                        <a href="http://dixy.ru/" target="_blank" className="logo">
                            <div className="logo-inner"></div>
                        </a>
                        <span className="dating">с 16 декабря 2019 по 31 января 2020</span>
                        <h1>Мандарим в Дикси!</h1>
                        <div className="sales-block">
                            <div className="heading">скидки до 20%
                            </div>
                            <div className="additional">и суперпризы</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mandarin-img">
                            <img className="tour" src={tour} alt="" srcSet=""/>
                                <img className="tel" src={tel} alt="tel" srcSet=""/>
                                    <img className="card" src={card} alt="card" srcSet=""/>
                                        <img className="plane" src={plane} alt=""
                                             srcSet=""/>
                                            <img className="mandarin" src={mandarin} alt="mandarin"
                                                 srcSet=""/>
                                                <img className="list" src={list} alt="list"
                                                     srcSet=""/>
                        </div>
                        <div className="code">
                            <div className="btn register">
                                Войти на сайт
                            </div></div>
                    </div>
                </div>
                <div className="sky"></div>
            </section>
        )
    }
}