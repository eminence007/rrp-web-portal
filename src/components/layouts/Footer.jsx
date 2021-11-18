import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="social-icon">
                <div className="icon">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png" alt=""/>
                </div>
                <div className="icon">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Twitter_Logo_as_of_2021.svg/1024px-Twitter_Logo_as_of_2021.svg.png" alt=""/>
                </div>
                <div className="icon">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png" alt=""/>
                </div>
                <div className="icon">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png" alt=""/>
                </div>
            </div>
            <div className="section">
                Copyright © Right to Recall Party
            </div>
        </div>
    )
}

export default Footer