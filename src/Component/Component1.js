import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Tibet from '../Container/Tibet';


class Component extends Component{
    render(){
        return(
            <div>
                <Route path='/Tibet' Component={Tibet}/>
            </div>
        )
    }
}


export default Component;