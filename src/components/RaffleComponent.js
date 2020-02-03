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
                            <h2>Розыгрыш призов</h2>
                            <p>Розыгрыш состоится 07.02.2020. Мы подведем итоги и узнаем имена счастливых обладателей главных призов. </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}