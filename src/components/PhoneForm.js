import React from 'react'
import { Field, reduxForm, SubmissionError, change, stopSubmit } from "redux-form";
import { RenderField } from "./RenderField";
import $ from 'jquery'



class PhoneForm extends React.Component {
   
    onHandleSubmit = values => {
        if (!values.userPhone) {
            throw new SubmissionError({ userPhone: 'Укажите корректный номер', _error: 'Login failed!' })
        }
        // if (this.props.codeSent && !values.userCode) {
        //     throw new SubmissionError({ userCode: 'Введите полученный код', _error: 'Login failed!' })
        // }
        if (!this.props.codeSent || !values.userCode)
            this.props.handleSendCode('+7' + values.userPhone)
        else
            this.props.handleCheckCode('+7' + values.userPhone, values.userCode)
    }
    makeSmth = (e) => {
        e.preventDefault()
        console.log(123)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const { verifyCodeError, dispatch } = this.props
        if (verifyCodeError != prevProps.verifyCodeError)
            dispatch(stopSubmit('phone', {
                userCode: 'Ошибка отправки кода'
            }))
    }

    render() {
        const { handleSubmit, submitting, codeSent, sendError } = this.props
        return (
            <>
            <form onSubmit={handleSubmit(this.onHandleSubmit)}>
                <div className="cancelBut"></div>
                <h2>Введите номер телефона</h2>
                <Field name="userPhone" component={RenderField} type="tel" placeholder='9990000000' index='1' pattern="[0-9]{10}"/>
                {codeSent && <p className="formCodeEnt">Введите код</p>}
                {codeSent && <Field name='userCode' component={RenderField} placeholder=" " />}
                {codeSent && <button type='submit' disabled={submitting} className="formCodeAgain">Отправить код повторно </button>}
                {sendError && <div className='error'>{sendError}</div>}
                <div className="centerBut">
                    <button type="submit" disabled={submitting}>{!codeSent ? 'Отправить код' : 'Подтвердить код'}</button>
                </div>
            </form>
            </>
        )
    }
}

export default PhoneForm = reduxForm({
    form: 'phone'
})(PhoneForm)
