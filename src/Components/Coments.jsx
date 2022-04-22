import React from 'react'
import { Element } from 'react-scroll'

export default function Coments(props) {
    return (
        <Element id='coments-element' name='send-destination'>
            <h2>Témoignages</h2>
            <div id="coment-conatiner">
                <div id='coments'>
                    <div className="coment-image">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="coments-block">
                        <div className='text'>
                            <h3>Jalil Safaa</h3>
                            <p>J’ai contacté le centre en début d’année du bac pour mon petit frère. Nous avons été ravis par leur accueil. Nous avons pu débuter les cours avant la rentrée avec un très bon enseignant, et surtout un très bon coach. Tout se passe à merveille pour ce premier trimestre. Mon frère se sent de plus en plus confiant et dit avoir une idée plus de ce qu’il aimerait faire comme études supérieures. Nous recommandons le centre. </p>
                        </div>
                        <div className='text'>
                            <h3>Yahya Hadi</h3>
                            <p>Un grand merci à vous et à tous les professeurs et la team. La preuve, si besoin en était, que l’aide que vous m’avez apportée a été bénéfique, c’est que je suis en médecine maintenant ! Grâce à vous ! </p>
                        </div>
                        <div className='text'>
                            <h3>Ikraam Duha</h3>
                            <p>Je vous remercie pour votre disponibilité et votre souplesse, surtout vous, Prof Youssef ! Ma fille X a eu son bac avec 18 en SVT et mention très bien ! On est les plus fiers et les plus ravies d’avoir choisi votre centre. Je recommande à 1000%  </p>
                        </div>
                    </div>
                </div>
            </div>

        </Element>

    )
}
