import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Work.css";
import '../App.css';
import doLogo from "./images/doLogo.png";
import wyfyLogo from "./images/wyfyLogo.png";
import crimeCheckerLogo from "./images/crimeCheckerLogo.png";

class Work extends Component {
    render(){
        return(
            <div id='work' className="workjs">
                <div className="pb-5">
                    <div className="col text-center">
                    <h2 className="light-text">Our Work</h2>
                        <div className="perfectPitch pt-5">PERFECT PITCH 2018</div>
                        <div className="head2 pb-4">NASHVILLE OPEN DATA GROUP PROJECTS</div>
                    </div>

                    <div className="row justify-content-center pb-5">
                        <div className="col-4-sm">
                            <a href="https://github.com/nss-day-cohort-24/do" target="_blank" rel="noopener noreferrer">
                                <img src={doLogo} alt="Filler" height="276" width="286"/>
                                <div className="head2 text-center">DO.</div>
                            </a>
                        </div>
                        <div className="col-4-sm text-center mx-3">
                            <a href="https://github.com/nss-day-cohort-24/wyfy" target="_blank" rel="noopener noreferrer">
                                <img src={wyfyLogo} alt="Filler" height="276" width="286"/>
                                <div className="head2 text-center">WYFY</div>
                            </a>
                        </div>
                        <div className="col-4-sm text-center">
                            <a href="https://github.com/nss-day-cohort-24/uix-crime-checker" target="_blank" rel="noopener noreferrer">
                                <img src={crimeCheckerLogo} alt="Filler" height="276" width="286"/>
                                <div className="head2 text-center">CRIME CHECKER</div>                        
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work;