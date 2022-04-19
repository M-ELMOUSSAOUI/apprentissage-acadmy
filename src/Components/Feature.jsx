import React from 'react'
import FeaturBox from './FeaturBox';
import featureImg1 from '../images/user.png'
import { Element } from 'react-scroll';

export default function Feature() {
    return (
        <Element id='team' name='send-destination'>
        <div id='features' >
            <h1> Notre equipe </h1>
            <div className='a-container'>
                <FeaturBox image={featureImg1} title='Le nom'/>
                <FeaturBox image={featureImg1} title='Le nom'/>
                <FeaturBox image={featureImg1} title='Le nom'/>
                <FeaturBox image={featureImg1} title='Le nom'/>
            </div>
        </div>
        </Element>

    )
}
