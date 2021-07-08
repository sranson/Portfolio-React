import React from 'react';
import Food from '../Assets/Images/food.jpg';
import recipesScreenshot from '../Assets/Images/Screenshots/recipes.png'
import cohootsScreenshot from '../Assets/Images/Screenshots/CoHoots.png'
import developerBlogScreenshot from '../Assets/Images/Screenshots/DeveloperBlog.png'
import CoHoots from '../Assets/Images/CoHootsStock.jpg';
import Blog from '../Assets/Images/blogPhoto.jpg';
import searchTool from '../Assets/Images/searchTool.jpg';
import searchToolSS from '../Assets/Images/Screenshots/searchTool.png';
import '../Assets/Styles/Projects.css';


const Projects = () => {
    return(
        <div>
            <main className="container">
                <body className="projectCenterContent">
                    <section className="row customColor customSpacing" id="MyWork">
                         <header>
                            <h1 style={{textAlign: "center"}} >Recent Projects</h1>
                        </header>

                    <section className="col-md-4 col-lg-4 d-flex justify-content-center zoom">
                        <div className="card cardSize">
                            <a href="https://sranson.github.io/recipe-finder/" target="_blank" rel="noreferrer"><img className="card-img-top" src={Food} alt="photo of pasta" /></a>
                            <div className="card-body">
                                <h5 className="card-title">Recipe Finder</h5>
                                <p className="card-text"><a href="https://github.com/sranson/recipe-finder" target="_blank" rel="noreferrer">Github Repository</a></p>
                                <p className="card-text"><a href="https://sranson.github.io/recipe-finder/" target="_blank" rel="noreferrer">Deployed Application</a></p>
                                <p><a href={recipesScreenshot} target="_blank" rel="noreferrer">Screenshots</a></p>
                            </div>    
                        </div>
                    </section>


                    <section className="col-md-4 col-lg-4 d-flex justify-content-center zoom">
                        <div className="card cardSize">
                            <a href="https://cohoots.herokuapp.com/" target="_blank" rel="noreferrer"><img className="card-img" src={CoHoots} alt="photo of pasta" style={{height: "250px" }} /></a>
                            <div className="card-body">
                                <h5 className="card-title">CoHoots</h5>
                                <p className="card-text"><a href="https://github.com/klucas72/CoHoots" target="_blank" rel="noreferrer">Github Repository</a></p>
                                <p className="card-text"><a href="https://cohoots.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a></p>
                                <p><a href={cohootsScreenshot} target="_blank" rel="noreferrer">Screenshots</a></p>
                            </div>    
                        </div>
                    </section>


                    <section className="col-md-4 col-lg-4 d-flex justify-content-center zoom">
                        <div className="card cardSize">
                            <a href="https://developer-blog-app.herokuapp.com/" target="_blank" rel="noreferrer"><img className="card-img-top" src={Blog} alt="photo of pasta" style={{height: "250px" }} /></a>
                            <div className="card-body">
                                <h5 className="card-title">Developer Blog App</h5>
                                <p className="card-text"><a href="https://github.com/sranson/Developer-Blog-App" target="_blank" rel="noreferrer">Github Repository</a></p>
                                <p className="card-text"><a href="https://developer-blog-app.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a></p>
                                <p><a href={developerBlogScreenshot} target="_blank" rel="noreferrer">Screenshots</a></p>
                            </div>    
                        </div>
                    </section>


                    <section className="col-md-4 col-lg-4 d-flex justify-content-center zoom">
                        <div className="card cardSize">
                            <a href="https://sranson.github.io/Search-tool/" target="_blank" rel="noreferrer"><img className="card-img-top" src={searchTool} alt="photo of pasta" style={{height: "250px" }} /></a>
                            <div className="card-body">
                                <h5 className="card-title">Image Search Tool</h5>
                                <p className="card-text"><a href="https://github.com/sranson/Search-tool" target="_blank" rel="noreferrer">Github Repository</a></p>
                                <p className="card-text"><a href="https://sranson.github.io/Search-tool/" target="_blank" rel="noreferrer">Deployed Application</a></p>
                                <p><a href={searchToolSS} target="_blank" rel="noreferrer">Screenshots</a></p>
                            </div>    
                        </div>
                    </section>
{/* 
                    <section className="col-md-4 col-lg-4 d-flex justify-content-center zoom">
                        <div className="card cardSize">
                            <a href="https://developer-blog-app.herokuapp.com/" target="_blank" rel="noreferrer"><img className="card-img-top" src={Blog} alt="photo of pasta" style={{height: "250px" }} /></a>
                            <div className="card-body">
                                <h5 className="card-title">Developer Blog App</h5>
                                <p className="card-text"><a href="https://github.com/sranson/Developer-Blog-App" target="_blank" rel="noreferrer">Github Repository</a></p>
                                <p className="card-text"><a href="https://developer-blog-app.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a></p>
                                <p><a href={developerBlogScreenshot} target="_blank" rel="noreferrer">Screenshots</a></p>
                            </div>    
                        </div>
                    </section>


                    <section className="col-md-4 col-lg-4 d-flex justify-content-center zoom">
                        <div className="card cardSize">
                            <a href="https://developer-blog-app.herokuapp.com/" target="_blank" rel="noreferrer"><img className="card-img-top" src={Blog} alt="photo of pasta" style={{height: "250px" }} /></a>
                            <div className="card-body">
                                <h5 className="card-title">Developer Blog App</h5>
                                <p className="card-text"><a href="https://github.com/sranson/Developer-Blog-App" target="_blank" rel="noreferrer">Github Repository</a></p>
                                <p className="card-text"><a href="https://developer-blog-app.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Application</a></p>
                                <p><a href={developerBlogScreenshot} target="_blank" rel="noreferrer">Screenshots</a></p>
                            </div>    
                        </div>
                    </section> */}

                    </section>
                </body>
            </main>
        </div>
    ) 
}


export default Projects;
