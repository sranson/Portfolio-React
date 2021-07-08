import React from 'react';
import '../Assets/Styles/Contact.css';



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
                                    <h5><i className="fa fa-github fa-1x"></i><a href="https://github.com/sranson" target="_blank" className="linkStyle"> sranson</a></h5>
                                </div>  
                                <h5><i className="fa fa-linkedin-square fa-1x"></i> <a href="https://linkedin.com/in/salome-ranson-2021" target="_blank" className="linkStyle">Salome Ranson</a></h5>
                                <h5><i className="fa fa-download"></i><a href="./resume.pdf" download> Download Resume</a></h5>
                            </div>
                        </section>


                        <section className="row">
                            <h1>Contact</h1>
                                <div className="col-md-12">
                                    <form>
                                        <div className="row">
                                            <div className="mb-3 col-md-6">
                                                <label for="name" className="form-label"></label>
                                                 <input type="name" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Name" />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                 <label for="email" className="form-label"></label>
                                                <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label for="subject" className="form-label"></label>
                                            <input type="subject" className="form-control" id="inputSubject" placeholder="Subject" />
                                        </div>

                                        <div className="mb-3">
                                            <label for="MESSAGE" className="form-label"></label>
                                            <textarea className="form-control" id="inputMessage" rows="3" placeholder="Message" />
                                        </div>     

                                        <button type="submit" className={"btn", "btnColor", "spacing"}>Send Message</button>
                                    </form>
                                </div>
                        </section>               

                    </body>
              </main>
        </div>
    ) 
}


export default Contact;
