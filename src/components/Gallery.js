import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PeopleDeetz from './PeopleDeets.js';
import './Home.css';
import pink from './images/pink_swatch.jpg';
import green from './images/green_swatch.jpg';
import purple from './images/purple_swatch.jpg';
import yellow from './images/yellow_swatch.jpg';
import amber from '../class-pics/amber.png';
import arthur from '../class-pics/arthur.png';
import ben from '../class-pics/ben.png';
import dan from '../class-pics/dan.png';
import dylan from '../class-pics/dylan.png';
import jeremy from '../class-pics/jeremy.png';
import jesie from '../class-pics/jesie.png';
import kelsey from '../class-pics/kelsey.png';
import laura from '../class-pics/laura.png';
import lindsay from '../class-pics/lindsay.png';
import marc from '../class-pics/mark.png';
import mike from '../class-pics/mike.png';
import meg from '../class-pics/meg.png';
import melissa from '../class-pics/melissa.png';
import million from '../class-pics/million.png';
import phonetip from '../class-pics/phonthip.png';
import ryan from '../class-pics/ryan.png';
import sam from '../class-pics/sam.png';
import taylor from '../class-pics/taylor.png';

import sillyamber from '../class-pics/sillyamber.png';
import sillyarthur from '../class-pics/sillyarthur.png';
import sillyben from '../class-pics/sillyben.png';
import sillydan from '../class-pics/sillydan.png';
import sillydylan from '../class-pics/sillydylan.png';
import sillyjeremy from '../class-pics/sillyjeremy.png';
import sillyjesie from '../class-pics/sillyjesie.png';
import sillykelsey from '../class-pics/sillykelsey.png';
import sillylaura from '../class-pics/sillylaura.png';
import sillylindsay from '../class-pics/sillylindsay.png';
import sillymarc from '../class-pics/sillymark.png';
import sillymike from '../class-pics/mikesilly.png';
import sillymeg from '../class-pics/sillymeg.png';
import sillymelissa from '../class-pics/sillymelissa.png';
import sillymillion from '../class-pics/sillymillion.png';
import sillyphonethip from '../class-pics/sillyphonthip.png';
import sillyryan from '../class-pics/seriousryan.png';
import sillysam from '../class-pics/sillysam.png';
import sillytaylor from '../class-pics/sillytaylor.png';








let classList = [
     {
        name: "Amber",
        pic: amber,
        silly: sillyamber,
        link: "/amber",
        github_url: "https://github.com/amberjsharpe",
        linkedin_url: "https://www.linkedin.com/in/amber-sharpe/",
        email: "amberjsharpe@gmail.com",
        site_url: "",
        bio: "",
        quote: "It's all happening" 

    },
    {
        name: "Arthur",
        pic: arthur,
        silly: sillyarthur,
        link: "/arthur",
        github_url: "https://github.com/ArthurRankin",
        linkedin_url: "https://www.linkedin.com/in/arthur-smith-2281b5156/",
        email: "arthurrankin1992@gmail.com",
        site_url: "https://arthurrankin.github.io/Portfolio/",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Ben",
        pic: ben,
        silly: sillyben,
        link: "/ben",
        github_url: "https://github.com/Batkins44",
        linkedin_url: "https://www.linkedin.com/in/batkins44",
        email: "benjatkins13@gmail.com",
        site_url: "https://batkins44.github.io/",
        bio: "Gamer turned coder. I am a Nashville native and I very much enjoy creating the functionality within applications. I now dream in Javascript and still can't get enough of it.",
        quote: "Keep your friends close, but your enemy's toaster"
    },
    {
        name: "Dan",
        pic: dan,
        silly: sillydan,
        link: "/dan",
        github_url: "https://github.com/danwatson00",
        linkedin_url: "https://www.linkedin.com/in/danwatson00/",
        email: "dan@danwatson.us",
        site_url: "http://danwatson.us",
        bio: "",
        quote: ""
    },
    {
        name: "Dylan",
        pic: dylan,
        silly: sillydylan,
        link: "/dylan",
        github_url: "https://github.com/Dylan21B",
        linkedin_url: "https://www.linkedin.com/in/david-dylan-butzler-2191b5156/",
        email: "giglett21@gmail.com",
        site_url: "",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "Just push it."
    },
    {
        name: "Jeremy",
        pic: jeremy,
        silly: sillyjeremy,
        link: "/jeremy",
        github_url: "https://github.com/jeremylukebennett",
        linkedin_url: "https://www.linkedin.com/in/jlukebennett",
        email: "jeremylukebennett@comcast.net",
        site_url: "",
        bio: "Inspired by the power of generative electronic music, I was quickly drawn into the world of programming. I’ve since found so much to engage with as a developer/designer, but mostly I value the process of programming itself, which allows me to continuously flex my curiosity and learn new skills constantly.",
        quote: "They moved to the night cohort."
    },
    {
        name: "Jesie",
        pic: jesie,
        silly: sillyjesie,
        link: "/jesie",
        github_url: "github.com/jesieOldenburg",
        linkedin_url: "linkedin.com/in/jesieoldenburg",
        email: "kitglo46@gmail.com",
        site_url: "jesieOldenburg.github.io",
        bio: "",
        quote: "More than one way to code a cat"
    },
    {
        name: "Kelsey",
        pic: kelsey,
        silly: sillykelsey,
        link: "/kelsey",
        github_url: "https://github.com/KelseyPintens",
        linkedin_url: "https://www.linkedin.com/in/kelsey-pintens-a778a4a5/",
        email: "ksepintens@gmail.com",
        site_url: "kelseypintens.com",
        bio: "As a new Nashville transplant, I was looking to further expand upon my industrial design career and decided to branch into user experience design. After attending a Nashville UX meetup, I was excited to learn about and apply to Nashville Software School. I cannot wait to continue my passion for design and develop both hardware and software products.",
        quote: "Don't make me say html tag"
    },
    {
        name: "Laura",
        pic: laura,
        silly: sillylaura,
        link: "/laura",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Lindsay",
        pic: lindsay,
        silly: sillylindsay,
        link: "/lindsay",
        github_url: "https://github.com/mulhollen",
        linkedin_url: "https://www.linkedin.com/in/mulhollen/",
        email: "lindsaymulhollen@gmail.com",
        site_url: "http://lindsaymulhollen.com",
        bio: "Inspired to get a start in development after encountering interactive museum exhibits, I'm excited to bring my unique background to the development world where I plan to make my mark with innovative thinking and motivation to tackle even the most unthinkable projects.",
        quote: "cool. coolcoolcoolcoolcool."
    },
    {
        name: "Marc",
        pic: marc,
        silly: sillymarc,
        link: "/marc",
        github_url: "https://github.com/marcdledda",
        linkedin_url: "https://www.linkedin.com/in/marcledda/",
        email: "marcdl636@gmail.com",
        site_url: "https://marcdledda.github.io/portfolio/",
        bio: "I have always been curious on how technology worked, so it was not a surprised when I transitioned my focus from becoming a nurse to becoming a developer and designer. Following my curiosity, I enrolled at Nashville Software School, where I fell in love with development and design.",
        quote: "¯\_(ツ)_/¯"
    },
    {
        name: "Mike",
        pic: mike,
        silly: sillymike,
        link: "/mike",
        github_url: "",
        linkedin_url: "",
        email: "",
        site_url: "",
        bio: "",
        quote: ""
    },
    {
        name: "Meg",
        pic: meg,
        silly: sillymeg,
        link: "/meg",
        github_url: "https://github.com/megscholl",
        linkedin_url: "https://www.linkedin.com/in/megscholl",
        email: "meghan.e.scholl@gmail.com",
        site_url: "",
        bio: "",
        quote: "yahfurshure"
    },
    {
        name: "Melissa",
        pic: melissa,
        silly: sillymelissa,
        link: "/melissa",
        github_url: "https://github.com/melissawheatley",
        linkedin_url: "https://www.linkedin.com/in/melissawheatley/",
        email: "melissa.c.wheatley@gmail.com",
        site_url: "melissawheatley.com",
        bio: "",
        quote: "merh. I don't think this will be that hard"
    },
    {
        name: "Million",
        pic: million,
        silly: sillymillion,
        link: "/million",
        github_url: "https://github.com/MillionInfinity",
        linkedin_url: "https://www.linkedin.com/in/millionasseghegn/",
        email: "milly7989@gmail.com",
        site_url: "",        
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
    {
        name: "Phonethip",
        pic: phonetip,
        silly: sillyphonethip,
        link: "/phonethip",
        github_url: "https://github.com/PhonethipLiu",
        linkedin_url: "www.linkedin.com/in/phonethip-liu-hobson",
        email: "phonethip.liu@gmail.com",
        site_url: "https://phonethipliu.github.io/",
        bio: "Former news page designer passionate about learning new technology and expanding my skill sets to learn responsive design to become a UX/ UI front-end web developer.",
        quote: "Git it. Got it. Good."
    },
    {
        name: "Ryan",
        pic: ryan,
        silly: sillyryan,
        link: "/ryan",
        github_url: "https://github.com/palindrome88",
        linkedin_url: "https://www.linkedin.com/in/ryan-brisentine-175600a1/",
        email: "brisentine.ryan@gmail.com",
        site_url: "",
        bio: "",
        quote: ""
    },
    {
        name: "Sam",
        pic: sam,
        silly: sillysam,
        link: "/sam",
        github_url: "https://github.com/sjkimball",
        linkedin_url: "www.linkedin.com/in/sjkimball",
        email: "s.j.kimball@icloud.com",
        site_url: "sjkimball.github.io",
        bio: "I’ve lived in 9 different states. I’ve studied art, design, audio engineering, mechanical/electrical engineering, and web development. I’ve been a ditch digger, cook, bartender, tech educator, and tech support. I am a rolling stone.",
        quote: "Buy the ticket, take the ride."
    },
    {
        name: "Taylor",
        pic: taylor,
        silly: sillytaylor,
        link: "/taylor",
        github_url: "github.com/Taylor-Bailey",
        linkedin_url: "www.linkedin.com/in/taylor-bailey-ux",
        email: "taylorbailey@protonmail.com",
        site_url: "taylor-ux.com",
        bio: "Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development.",
        quote: "First, software ate the world, then the web ate software, now Javascript ate the web"
    },
];












let Gallery = () => {
    let gallery = classList.map((item, index) => 
        <div key={index} className="p-2" style={{width: 10 + 'rem', height: 12 + 'rem'}}>
            <Link to={{ pathname: item.link, state: { pic: item.pic, silly: item.silly, link: item.link, name: item.name, bio: item.bio, quote: item.quote, git: item.github_url, linkedIn: item.linkedin_url, email: item.email, site: item.site_url} }}><img className="img-thumbnail" alt="" src={item.pic}/></Link>
        </div>
    )
        return(
            <div id="gallery">
                <div className="d-flex flex-row flex-wrap container justify-content-around align-items-center">
                    {gallery}
                </div>
            </div>
        )
}

export default Gallery;