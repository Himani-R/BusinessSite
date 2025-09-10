import React from 'react'

function News() {
  return (
    <>
    <div className="new">
        <h1>Latest News</h1>

        <div className="card-container">
            <div className="card">
              <img src="public\Rectangle 19533.png" alt="" />
                
                <div className="card-content">
                    <h4>INDONESIA-Business Opportunities and Market Analysis</h4>
                    <p>Our expert team has studied Indonesia based upon changing market trends, demand & supply of...</p>
                    <button>Read More</button>
                </div>
            </div>
            <div className="card">
              <img src="public\Rectangle 19533 (4).png" alt="" />
                
                <div className="card-content">
                    <h4>NEW YORK Startup Business Investment Opportunities</h4>
                    <p>Our expert team has studied Indonesia based upon changing market trends, demand & supply of...</p>
                    <button>Read More</button>
                </div>
            </div>
          <div className="card">
              <img src="public\Rectangle 19533.png" alt="" />
                
                <div className="card-content">
                    <h4>NEW JERSEY Business Investment Opportunities</h4>
                    <p>Market Research & Opportunity Analysis Report – New Jersey. Our expert team has studied New...</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default News