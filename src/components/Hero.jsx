import React from 'react';
import './Hero.css';

class Hero extends React.Component {
    render() {
        const {name, age, weapon, race, useRing, dead} = this.props.objeto;
        const {onClickRing, onClickKill, index} = this.props;
        return (
            <tr style={{backgroundColor: dead ? 'brown': '#282c34'}}
                className='character-row'>
                <td>{name}</td>
                <td>{race}</td>
                <td>{age}</td>
                <td>{weapon}</td>
                <td>
                    <div className={'controls'}>
                        <div style={{display: dead ? 'none' :  ''}} onClick={() => onClickKill(index)}> Kill</div>
                        -
                        <div style={{display: useRing ? 'none' :  ''}} onClick={() => onClickRing(index)}> Use Ring</div>
                    </div>
                </td>
            </tr>

        );
    }
}

export default Hero;