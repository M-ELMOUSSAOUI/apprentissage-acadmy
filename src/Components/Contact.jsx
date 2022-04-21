import React from 'react'
import {Element} from 'react-scroll'

export default function Contact() {
    return (
        <div id='contact' >
            <Element id='contact' name='send-destination'>
                <h3> Contacter-nous </h3>
            <div className="contact-input">
                <div className="info">
                    <p> contact@apprentissageacademy.ma </p>
                    <p> Groupe zaitoun 11,1er étage takadoum, rabat </p>
                    <p> +212 661-900940 </p>
                    <p> +212 699-279927 </p>
                </div>
                <div className="group-input">
                <input type='Nom' placeholder='Nom' />
                <input type='Prenom' placeholder='Prenom' />
                <input type='Email' placeholder='Email' />
                <input type='Telephone' placeholder='Telephone' />
                <textarea type='text' placeholder='Message' />
                <a href="/"> Contact </a>
                </div>

            </div>
            </Element>

        </div>
    )
}
