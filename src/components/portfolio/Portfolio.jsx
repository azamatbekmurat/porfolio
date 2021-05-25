import React from 'react'
import "./portfolio.scss"

function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Design</li>
                <li>Branding</li>
            </ul>

            <div className="container">
                <div className="item">
                    <img src="https://www.tdbank.com/exc/img/eg-banking/SmBiz-MoBank-Banner-Image.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.tdbank.com/exc/img/eg-banking/SmBiz-MoBank-Banner-Image.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.tdbank.com/exc/img/eg-banking/SmBiz-MoBank-Banner-Image.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.tdbank.com/exc/img/eg-banking/SmBiz-MoBank-Banner-Image.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.tdbank.com/exc/img/eg-banking/SmBiz-MoBank-Banner-Image.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.tdbank.com/exc/img/eg-banking/SmBiz-MoBank-Banner-Image.png" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>

        </div>
    )
}

export default Portfolio
