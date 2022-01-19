import React from 'react';

class Singers extends React.Component {

    render(){

        const {name, age} = this.props;

        return (
            <div>
                <p><b>Chanteur:</b> {name}, <b>age:</b> {age} ans</p>
            </div>
    
        )
    }

};

export default Singers;
