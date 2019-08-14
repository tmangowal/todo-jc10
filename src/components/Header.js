import React from 'react'

const styles = {
    black : {
        backgroundColor : 'black'
    }
}

class Header extends React.Component{
    render(){
        return(
            <div className='container-fluid text-center' style={{minHeight:'100px', backgroundColor:'lightgrey', top:0}}>
                <h1>HEADER</h1>
            </div>
        )
    }
}

export default Header