import logo from '../../images/favicon.png';
import React from 'react';
import loading from "../../images/icons/loading.svg"
/// navs 
import meroute from '../../images/icons/person.svg'
import projectroute from '../../images/icons/project.svg'
import blogroute from '../../images/icons/blog.svg'
import contactroute from '../../images/icons/contact.svg'
const logos = {
 logo, loading
}


const navIcons = {
    meroute,
    blogroute,
    projectroute,
    contactroute
}


/// used emojis
const HeartEmoji = <span role="img" aria-label="heart" >❤️</span>

const BrainEmoji = <span role="img" aria-label="brain" >🧠</span>
const CoffeeEmoji = <span role="img"  aria-label="coffee-cup" >☕</span>
const SadFaceEmoji = <span role="img"  aria-label="sad-face" >🥺</span>
const emojis = {
    HeartEmoji,
    BrainEmoji,
    CoffeeEmoji,
    SadFaceEmoji,
}
export {
    logos , 
    navIcons,
    emojis
}