import React from 'react'

function Contact() {
  return (
    <>
    <div className="contact">
        <div className="contact-main">
        <div className="contact-icon">
            <img className="contact-icon"src="public\Frame 1261157133.png" alt="" />
              <div className="contact-icon-image">
                <img src="public\ri_facebook-fill (1).png" alt="" />
                <img src="public\mdi_twitter.png" alt="" />
                <img src="public\mdi_youtube.png" alt="" />
                <img src="public\ri_linkedin-fill.png" alt="" />
                <img src="public\iconoir_instagram.png" alt="" />

              </div>
        </div>
         <div className="contact-mails">
            <h3>Want to receive amazing updates on ideas and business plans?</h3>
            <input type="text" placeholder='Email ID' />
            <button>Subscribe</button>
         </div>

</div>

   <div className="contact-tags">
         <div className="links">
             <h3>Quick Links</h3>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Pricing</li>
                <li>Industries</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
         </div>
         <div className="company">
                <h3>Company</h3>
            <ul>
                <li>About Us</li>
                <li>Carrers</li>
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
               
            </ul>
         </div>
         <div className="ourservices">
                   <h3>Our Services</h3>
            <ul>
                <li>Market Research Reports</li>
                <li>Business Feasibility Studies</li>
                <li>Business Modelling</li>
                <li>Detailed Project Reports</li>
                <li>Investment Pitch Decks</li>
               
            </ul>
         </div>
   </div>
    </div>
    
    </>
  )
}

export default Contact