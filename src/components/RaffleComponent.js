import React from 'react'
import mandarinRaffle from '../img/mandarin-raffle.svg'
import {Mandarin} from './Mandarin'

export default class RaffleComponent extends React.Component {
    render() {
        return (
            <section className="raffle oranged">
                <div className="container">
                    <div className="content-raffle flexing">
                       <Mandarin />
                        <div className="info">
                            <h2>Результаты розыгрыша</h2>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/8bRBO9I9e6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}