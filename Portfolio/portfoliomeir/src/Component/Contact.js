import React from 'react';
import emailjs from 'emailjs-com';
export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                'gmail',
                'template_9uGWMHqN',
                e.target,
                'user_5h4mM6eWcFRkkVmmxM2mW'
            )
            .then(
                (result) => {
                    alert('Votre message a été envoyé avec succès🙂');
                },
                (error) => {
                    alert("Échec de l'envoi du message 😢");
                }
            );
    }
    return (
        <div className='Contact'>
            <form
                className='contact-form form-contact white-font'
                onSubmit={sendEmail}>
                <div className='row blue-text'>
                    <h2>
                        <em>Me contacter</em>
                    </h2>
                </div>
                <br />
                <div className='row'>
                    <div className='input-field col s12 l12 green-text text-accent-4'>
                        <input
                            id='icon_prefix'
                            type='text'
                            className='validate blue-font'
                            name='from_name'
                            required
                        />
                        <label>Nom</label>
                    </div>
                    <div className='input-field col s12 l12 yellow-text text-accent-4'>
                        <input
                            id='icon_telephone'
                            type='tel'
                            className='validate green-font'
                            name='contact_number'
                            required/>

                        <label>Telephone</label>
                    </div>

                    <div className='input-field col s12 l12 materialize grey-text'>
                        <input
                            id='icon_email'
                            type='email'
                            className='validate white-font'
                            name='reply_to'
                            required
                        />
                        <label htmlFor='icon_email'>Email</label>
                    </div>

                    <div className='input-field col s12 l12 materialize blue-text'>
                        <textarea
                            id='message'
                            className='materialize-textarea textarea-height validate yellow-font'
                            name='message_html'
                            required
                        ></textarea>
                        <label>Message</label>
                    </div>
                </div>
                <div className='row'>
                    <button
                        class='waves-effect waves-light btn-large btn-large pulse'
                        type='submit'
                        name='action'>
                        <i>Envoyer</i>
                    </button>
                </div>
            </form>
        </div>
    );
}