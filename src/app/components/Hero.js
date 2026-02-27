import React from 'react'

const Hero = () => {
  return (
    <section id="hero">
        <div className="heroImg">
            <picture>
                <source media="(max-width: 450px)" srcSet="/src/images/invader.webp" /> 
                {/* <!--Ради теста другое изображение--> */}
                <source media="(max-width: 900px)" srcSet="/src/images/heroImg.webp" />
                <img src="/src/images/heroImg.png" alt="Builder" width='740' height="832"/>
            </picture>
        </div>

        <div className="container">
            <div className="heroTxt">
                <div className="quote">
                    <h2>Get the Sun to Power Your Home</h2>
            
                    <p className="slogan">Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
            
                    <button className="requestBtn formBtn" tabIndex="0">
                        <span>request a quote</span>
                        <img src="/src/images/arrow.svg" alt="Arrow" />
                    </button>
                </div>
            
                <div className="comment">
                    <p>“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”</p>
                    <div className="user">
                        <img src="/src/images/userThumb.webp" alt=""/>
                        <div className="userTxt">
                            <p>Rwanda Melflor</p>
                            <p className="userId">zerowaste.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
