import React from 'react'
import {Element} from 'react-scroll'

export default function Contact() {
    return (
        <div id='contact' >
            <Element id='contact' name='send-destination'>
                <h3> Contacter-nous </h3>
            <div className="contact-input">
                <div className="info">
                    <p> +212 687996903 </p>
                    <p> New York, 23, 1000 </p>
                    <p> apprentissageAcademy@gmail.com </p>
                    <p> +212 587996903 </p>
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
