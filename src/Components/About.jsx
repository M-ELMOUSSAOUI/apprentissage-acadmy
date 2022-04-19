import React from 'react'
import { Element } from 'react-scroll'

export default function About(props) {
    return (
        <Element id='about' name='send-destination'>
        <div id='about'>
            <div className="about-image">
                <img src={props.image} alt="" />
            </div>
            <div className="about-text">
                <h2> {props.title} </h2>
                <p> Le centre Apprentissage Academy dispense des cours de soutien scolaire réguliers et intensifs, des cours de langues, du coaching scolaire/ préparations des concours depuis 2017.</p>
                <p>
                    La réussite scolaire et l’épanouissement personnel de nos élèves est notre plus grande fierté, les témoignages que nous recevons jour après jour, et le développement constant que nous remarquons après chaque séance, est ce qui nous alimente pour toujours aller de l’avant, et faire de notre mieux pour garantir le meilleur soutien scolaire.
                </p>
                <p>
                Des mathématiques, aux sciences en passant par l'anglais. Les étudiants ont souvent besoin de cours dans plusieurs matières, c’est pour ça qu’Apprentissage Academy a développé toute une gamme de solutions d’accompagnement scolaire avec une équipe spécialisée, chacun dans sa matière respective, pour aider votre enfant dans la réussite de sa scolarité, et activer son potentiel éducationnel et personnel ! Oui, personnel aussi ! 
                </p>
                <p>
                Car à Apprentissage Academy, on n’est pas que dans une perspective élève – enseignant, mais on est des coachs aussi, des grands frères et sœurs, qui comprennent les soucis auxquels les élèves/ étudiants font face tous les jours. Notre ambiance est unique, on combine entre professionnalisme et sympathie, les cours de soutien scolaire n’ont jamais été plus fun ! Vous voulez en savoir plus ? Consultez notre rubriques activités parascolaires ! 
                </p>
                <p>
                (Il va falloir ajouter une rubriques « Activités parascolaires » qui contient les événements/voyages/sorties organisé par Apprentissage avec 2 petites phrases et une photo pour chaque activité).
                </p>
            </div>
        </div>
        </Element>

    )
}
