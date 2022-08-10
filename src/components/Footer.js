import React from "react";

const Footer = () =>{
return(
    <div className ="container-fluid bg-info">
    <div className ="row mx-auto pt-4">
        <div className ="col-6 offset-1">
            <h4>Our Address</h4>
            <p> 121, Clear Water Bay Road <br/> Clear Water Bay, Kowloon <br/> HONGKONG</p>
            <i className="fa fa-phone fa-lg" />: <span className ="bold">+852 1234 5678</span> <br />
            <i className="fa fa-fax fa-lg" />: +852 8765 4321<br />
            <i className="fa fa-envelope fa-lg" />: <a href="mailto:confusion@food.net">confusion@food.net</a>
        </div>
        <div className ="col-12 col-sm-4 align-self-center">
            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus" /></a>
            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook" /></a>
            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin" /></a>
            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>
            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o" /></a>   
        </div>
    </div>
    <div className ="row text-center pb-3">
        <h5>© Copyright 2018 Ristorante Con Fusion</h5>
    </div>
    </div>
);
}
export default Footer;