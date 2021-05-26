import React, { Component } from 'react';
import navitem from './navitem';


class navbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            'navitemAvtive': ''
        }
    }
    activeitem = (x)=>{
        if(this.state.navitemAvtive.length>0){
            document.getElementById(this.state.navitemAvtive).classList.remove('active');
        }
        this.setState({'navitemID':x},()=>{
            document.getElementById(this.state.navitemAvtive).classList.add('active');
        
        });
    };

    render(){
        return (
            <nav>
                <ul>
                    
                </ul>
            </nav>
        )
    }
}