import {Component} from 'react';
import axios from 'axios';

class Tibet extends Component(){

    componentDidMount(){
        axios.get('http://localhost:/5000')
        .then((response)=>{
            console.log(response.data)
            this.setState({
                FOOD:response.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    render(){
        return(

        <div>
            <html>

            <head>

                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content=""/>
                <meta name="author" content=""/>
                <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet"/>

                <title>Tibet Lodge - Restaurant</title>
            
                <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
                <link rel="stylesheet" type="text/css" href="css/font.css"/>
                <link rel="stylesheet" href="css/khumbu.css"/>
                <link rel="stylesheet" href="css/owl-carousel.css"/>
                <link rel="stylesheet" href="css/lightbox.css"/>
            </head>
            
    
    <body>
    
    <div id="preloader">
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>  
    <div id="top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4">
                    <div class="left-content">
                        <div class="inner-content">
                            <h4>Tibet Lodge & Restaurant</h4>
                            <h6>THE BEST EXPERIENCE</h6>
                            <div class="main-white-button scroll-to-section">
                                <a href="#reservation">Make A Reservation</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="main-banner header-text">
                        <div class="Modern-Slider">
                      
                          <div class="item">
                            <div class="img-fill">
                                <img src="/slide-01.jpg" alt="image"/>
                            </div>
                          </div>
                    
                          <div class="item">
                            <div class="img-fill">
                                <img src="/slide-02.jpg" alt=""/>
                            </div>
                          </div>
                          
                          <div class="item">
                            <div class="img-fill">
                                <img src="/slide-03.jpg" alt=""/>
                            </div>
                          </div>
                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <section class="section" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12">
                    <div class="left-text-content">
                        <div class="section-heading">
                            <h6>About Us</h6>
                            <h2>We Leave A Delicious Memory For You<br></br>...Visit Us...</h2>
                        </div>
                        <p>Tibet Lodge is one of the best <a href="#" target="_blank" rel="sponsored">Hospitality and with good restaurant</a> available in Solukhumbu jorshalley. <a href="#" target="_blank" rel="sponsored">Gateway to Everest</a>  <br> #Pasang Choley Sherpa. </br>Thankyou</p>
                        <div class="row">
                            <div class="col-4">
                                <img src="images/about-thumb-01.jpg" alt=""/>
                            </div>
                            <div class="col-4">
                                <img src="images/about-thumb-02.jpg" alt=""/>
                            </div>
                            <div class="col-4">
                                <img src="images/about-thumb-03.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12">
                    <div class="right-content">
                        <div class="thumb">
                            <a rel="nofollow" href="#"><i class="fa fa-play"></i></a>
                            <img src="images/about-video-bg.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  <br></br>
    <section class="section" id="menu">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="section-heading">
                        <h6>Our Menu</h6>
                        <h2>Our selection of Cuisine with quality taste</h2>
                    </div>
                </div>
            </div>
        </div>
           </section>
   
    <section class="section" id="chefs">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 offset-lg-4 text-center">
                    <div class="section-heading">
                        <h6>Our Chefs</h6>
                        <h2>We offer the best ingredients for you</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="chef-item">
                        <div class="thumb">
                            <div class="overlay"></div>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                            <img src="images/pasang.jpg" alt="Chef #1"/>
                        </div>
                        <div class="down-content">
                            <h4>Pasang Sherpa</h4>
                            <span>Executive Chef</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="chef-item">
                        <div class="thumb">
                            <div class="overlay"></div>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                            <img src="images/wang.jpg" alt="Chef #2"/>
                        </div>
                        <div class="down-content">
                            <h4>Wangchhu Tamang</h4>
                            <span>Sous Chef</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="chef-item">
                        <div class="thumb">
                            <div class="overlay"></div>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                            <img src="images/aspan.jpg" alt="Chef #3"/>
                        </div>
                        <div class="down-content">
                            <h4>Aspan Lopchan</h4>
                            <span>Sashimi Chef</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section" id="reservation">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 align-self-center">
                    <div class="left-text-content">
                        <div class="section-heading">
                            <h6>Contact Us</h6>
                            <h2>Here You Can Make A Reservation Or Just walkin to our Lodge</h2>
                        </div>
                        <p>Solukhumbu-Jorshalley, Nepal</p>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="phone">
                                    <i class="fa fa-phone"></i>
                                    <h4>Phone Numbers</h4>
                                    <span><a href="#">9863841998</a><br><a href="#">9813910902</a></br></span>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="message">
                                    <i class="fa fa-envelope"></i>
                                    <h4>Emails</h4>
                                    <span><a href="#">Wang@company.com</a><br><a href="#">Pasang@company.com</a></br></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="contact-form">
                        <form id="contact" action="" method="post">
                          <div class="row">
                            <div class="col-lg-12">
                                <h4>Room Reservation</h4>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                              <fieldset>
                                <input name="name" type="text" id="name" placeholder="Your Name*" required=""/>
                              </fieldset>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                              <fieldset>
                              <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required=""/>
                            </fieldset>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                              <fieldset>
                                <input name="phone" type="text" id="phone" placeholder="Phone Number*" required=""/>
                              </fieldset>
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <fieldset>
                                <select value="number-guests" name="number-guests" id="number-guests">
                                    <option value="number-guests">Number Of Guests</option>
                                    <option name="1" id="1">1</option>
                                    <option name="2" id="2">2</option>
                                    <option name="3" id="3">3</option>
                                    <option name="4" id="4">4</option>
                                    <option name="5" id="5">5</option>
                                    <option name="6" id="6">6</option>
                                    <option name="7" id="7">7</option>
                                    <option name="8" id="8">8</option>
                                    <option name="9" id="9">9</option>
                                    <option name="10" id="10">10</option>
                                    <option name="11" id="11">11</option>
                                    <option name="12" id="12">12</option>
                                </select>
                              </fieldset>
                            </div>
                            <div class="col-lg-6">
                                <div id="filterDate2">    
                                  <div class="input-group date" data-date-format="dd/mm/yyyy">
                                    <input  name="date" id="date" type="text" class="form-control" placeholder="dd/mm/yyyy"/>
                                    <div class="input-group-addon" >
                                      <span class="glyphicon glyphicon-th"></span>
                                    </div>
                                  </div>
                                </div>   
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <fieldset>
                                <select value="time" name="time" id="time">
                                    <option value="time">Time</option>
                                    <option name="Breakfast" id="Breakfast">Breakfast</option>
                                    <option name="Lunch" id="Lunch">Lunch</option>
                                    <option name="Dinner" id="Dinner">Dinner</option>
                                </select>
                              </fieldset>
                            </div>
                            <div class="col-lg-12">
                              <fieldset>
                                <textarea name="message" rows="6" id="message" placeholder="Message" required=""></textarea>
                              </fieldset>
                            </div>
                            <div class="col-lg-12">
                              <fieldset>
                                <button type="submit" id="form-submit" class="main-button-icon">Make A Reservation</button>
                              </fieldset>
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    <script src="js/jquery-2.1.0.min.js"></script>

    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>

    <script src="js/owl-carousel.js"></script>
    <script src="js/accordions.js"></script>
    <script src="js/datepicker.js"></script>
    <script src="js/scrollreveal.min.js"></script>
    <script src="js/waypoints.min.js"></script>
    <script src="js/jquery.counterup.min.js"></script>
    <script src="js/imgfix.min.js"></script> 
    <script src="js/slick.js"></script> 
    <script src="js/lightbox.js"></script> 
    <script src="js/isotope.js"></script> 

    <script src="js/custom.js"></script>
    {/* <script>

        $(function() {
            var selectedClass = "";
            $("p").click(function(){
            selectedClass = $(this).attr("data-rel");
            $("#portfolio").fadeTo(50, 0.1);
                $("#portfolio div").not("."+selectedClass).fadeOut();
            setTimeout(function() {
              $("."+selectedClass).fadeIn();
              $("#portfolio").fadeTo(50, 1);
            }, 500);
                
            });
        });

    </script> */}
  </body>
</html>
</div>

        )
    }

}

export default Tibet