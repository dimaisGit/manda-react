import React from 'react'
import { Field, reduxForm, SubmissionError, change, stopSubmit } from "redux-form";
import { RenderField } from "./RenderField";
import Countdown from 'react-countdown';






class PhoneForm extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            timer: true
        }
    }
    onHandleSubmit = values => {
        if (!values.userPhone) {
            throw new SubmissionError({ userPhone: 'Укажите корректный номер', _error: 'Login failed!' })
        }
       
        if (!this.props.codeSent || !values.userCode)
            this.props.handleSendCode('+7' + values.userPhone)
        else
            this.props.handleCheckCode('+7' + values.userPhone, values.userCode)
    }
    resetTimer = () => {
        this.setState({
            timer: false
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const { verifyCodeError, dispatch } = this.props
        if (verifyCodeError != prevProps.verifyCodeError)
            dispatch(stopSubmit('phone', {
                userCode: 'Ошибка отправки кода'
            }))
    }

    render() {
        const { handleSubmit, submitting, codeSent, sendError, state } = this.props
        const renderer = ({ hours, minutes, seconds, completed }) => {
            if (completed) {
              // Render a complete state
              return <Completionist/>;
            } else {
              // Render a countdown
              return (this.state.timer ? <span className="formCodeAgain">Код успешно отправлен.<br/>Повторная отправка возможна через {seconds} сек.</span> : 
              <span className="formCodeAgain">Код был отправлен повторно </span>)
            }
          };
        const Completionist = () => (
            <button type='submit' disabled={submitting} className="formCodeAgain" onClick={this.resetTimer}> Отправить код повторно </button>
            );
        
        return (
            <>
            <form onSubmit={handleSubmit(this.onHandleSubmit)}>
                <div className="cancelBut"></div>
                <h2>Введите номер телефона</h2>
                <Field name="userPhone" component={RenderField} type="tel" placeholder='9990000000' index='1' pattern="[0-9]{10}"/>
                {codeSent && <p className="formCodeEnt">Введите код из смс:</p>}
                {codeSent && <Field name='userCode' component={RenderField} placeholder=" " />}
                {codeSent && <Countdown date={Date.now() + 30000}  intervalDelay={1000} precision={.3} renderer={renderer}></Countdown>}
                {sendError && <div className='error'>{sendError}</div>}
                <div className="centerBut">
                    <button type="submit" disabled={submitting}>{!codeSent ? 'Получить код' : 'Подтвердить код'}</button>
                </div>
            </form>
            </>
        )
    }
}

export default PhoneForm = reduxForm({
    form: 'phone'
})(PhoneForm)
