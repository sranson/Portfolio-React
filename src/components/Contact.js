import React from 'react';



const Contact = () => {
    return(
        <div>
              <main className="container">
                    <body>
                        <section className="row customSpacing" id="contact">
                            <header>
                                <h1>Contact Details</h1>
                            </header>

                            <div className="column spacing">
                                <h5><i className="fa fa-phone"></i>  615-479-7224</h5> 
                                <h5><i className="fa fa-envelope-o"></i> salomeranson@gmail.com</h5>
                                <div className="row">
                                    <h5><i className="fa fa-github fa-1x"></i><a href="https://github.com/sranson" target="_blank" class="linkStyle"> sranson</a></h5>
                                </div>  
                                <h5><i class="fa fa-linkedin-square fa-1x"></i> <a href="https://linkedin.com/in/salome-ranson-2021" target="_blank" class="linkStyle">Salome Ranson</a></h5>
                                <h5><i class="fa fa-download"></i><a href="./resume.pdf" download> Download Resume</a></h5>
                            </div>
                        </section>
                    </body>
              </main>
        </div>
    ) 
}


export default Contact;
