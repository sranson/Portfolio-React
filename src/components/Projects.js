import React from 'react';
import { Link } from 'react-router-dom';
import Food from '../Assets/Images/food.jpg';
import CoHoots from '../Assets/Images/CoHootsStock.jpg';
import Blog from '../Assets/Images/blogPhoto.jpg';
import './Projects.css'




const Projects = () => {
    return(
        <div>
            <main className="container">
                <body>
                    <section className="row customColor customSpacing" id="MyWork">
                         <header>
                            <h1 style={{textAlign: "center"}} >Recent Projects</h1>
                        </header>

                    <section className="col-md-4 col-lg-4 d-flex justify-content-center zoom">
                        <div className="card cardSize">
                            <Link to="https://sranson.github.io/recipe-finder/" target="_blank"><img className="card-img-top" src={Food} alt="photo of pasta" style={{height: "200px", width: "200px"}}/></Link>
                            <div className="card-body">
                                <h5 className="card-title">Recipe Finder</h5>
                                <p className="card-text"><Link to="https://github.com/sranson/recipe-finder" target="_blank">Github Repository</Link></p>
                                <p className="card-text"><Link to="https://sranson.github.io/recipe-finder/" target="_blank">Deployed Application</Link></p>
                                <p><Link to="#" target="_blank">Screenshots</Link></p>
                            </div>    
                        </div>
                    </section>


                    <section className="col-md-4 col-lg-4 d-flex justify-content-center zoom">
                        <div className="card cardSize">
                            <Link to="https://cohoots.herokuapp.com/" target="_blank"><img className="card-img-top" src={CoHoots} alt="photo of pasta" style={{height: "200px", width: "200px"}} /></Link>
                            <div className="card-body">
                                <h5 className="card-title">CoHoots</h5>
                                <p className="card-text"><Link to="https://github.com/klucas72/CoHoots" target="_blank">Github Repository</Link></p>
                                <p className="card-text"><Link to="https://cohoots.herokuapp.com/" target="_blank">Deployed Application</Link></p>
                                <p><Link to="#" target="_blank">Screenshots</Link></p>
                            </div>    
                        </div>
                    </section>


                    <section className="col-md-4 col-lg-4 d-flex justify-content-center zoom">
                        <div className="card cardSize">
                            <Link to="https://developer-blog-app.herokuapp.com/" target="_blank"><img className="card-img-top" src={Blog} alt="photo of pasta" style={{height: "200px", width: "200px"}} /></Link>
                            <div className="card-body">
                                <h5 className="card-title">CoHoots</h5>
                                <p className="card-text"><Link to="https://github.com/sranson/Developer-Blog-App" target="_blank">Github Repository</Link></p>
                                <p className="card-text"><Link to="https://developer-blog-app.herokuapp.com/" target="_blank">Deployed Application</Link></p>
                                <p><Link to="#" target="_blank">Screenshots</Link></p>
                            </div>    
                        </div>
                    </section>

                    </section>
                </body>
            </main>
        </div>
    ) 
}


export default Projects;
