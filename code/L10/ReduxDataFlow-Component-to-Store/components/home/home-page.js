import React from 'react';
import { Link } from 'react-router';

import NavBar from '../common/navbar';


class HomePage extends React.Component{


    render(){

            var divStyle = {
                marginLeft: '80px'
             }

            return (
            <div>
                <NavBar menuItem1="Home" menuItem2="Movies" menuItem3="My Bookings" menuItem4="Contact Us" />

                <br></br>
                <div className="jumbotron">
                        <div style={divStyle}>
                            <h1>Welcome to React Cinemas</h1>
                            <h4>Free Unlimited Tickets... </h4>
                        </div>
                </div>
                    {this.props.children}

            </div>
        )
    }


}
export default HomePage;