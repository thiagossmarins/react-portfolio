import React, { useState } from 'react';
import ButtonForm from '../Button/ButtonForm';
import ilutrationImg from '../../assets/ilutration/Innovation-amico.svg'
import './Form.css'
import emailjs from '@emailjs/browser';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            email: email,
            message: message,
        };

        emailjs.send('service_x98ekmi', 'template_f5v2a1z', templateParams, 'yDIyx1BNbCL7iGhQi')
            .then((response) => {
                console.log('Email enviado', response.status, response.text);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Erro ao enviar email:', error);
            });
    }

    return (
        <section id="contact">
            <div className="contact-content">
                <h2>Talk to me</h2>

                <form className="form" onSubmit={sendEmail}>
                    <label>Nome</label>
                    <input
                        required
                        className="input"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <label>Email</label>
                    <input
                        required
                        className="input"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <label>Mensagem</label>
                    <textarea
                        className="textarea"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />

                    <ButtonForm />
                </form>
            </div>

            <div>
                <img className='contact-ilustration-img' src={ilutrationImg} alt="" />
            </div>
        </section>
    );
};

export default Form;
