import React, { Component } from 'react';

class Header extends Component {    
    render() {          
        return (
            <div>
                {/* header */}
            </div>
        )
    }
}

const mapStateToProps = ({ wholeSaleCart }) => {    
    return {
        wholeSaleCart: wholeSaleCart.carts           
    }
}

export default Header;