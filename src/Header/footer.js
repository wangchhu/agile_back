import {Component} from 'react';

class footer extends Component{
    render(){
        return(
    <div>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-xs-12">
                        <div class="right-text-content">
                                <ul class="social-icons">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                </ul>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="logo">
                            <a href="khumbu.html"><img src="images/tibet_web.png22.png" alt=""/></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xs-12">
                        <div class="left-text-content">
                            <p>© Copyright Wangchhu Moks & Co.<br>Design: Contact to Moktan & Co.</br> 9863841998 </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>

        )
    }
}

export default footer