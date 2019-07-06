import React from 'react';
import Hero from './Hero';

class HeroTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arrayCharacters: props.arreglo.map(item => {
                return {...item, useRing: false}
            })
        }
    }

    handlerClickRing = index => {
        const filterArray = this.state.arrayCharacters.map(item => {
            return {...item, useRing: true}
        });
        const newArray = filterArray.filter((item, idx) => {
            return idx !== index
        });
        this.setState({
            arrayCharacters: newArray
        })
    };

    handlerClickKill = index => {
        const muerto = this.state.arrayCharacters[index];
        this.setState({
            arrayCharacters : this.state.arrayCharacters
            .filter((item, idx) => idx !== index)
            .concat({...muerto, dead: true})
        })
    };

    render () {
        return (
            <table className={'characters-table'}>
                <thead>
                <tr className={'character-row'}>
                    <th>Name</th>
                    <th>Race</th>
                    <th>Age</th>
                    <th>Weapon</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.arrayCharacters.map((objeto, indice) => {
                        return <Hero 
                                onClickRing={this.handlerClickRing}
                                onClickKill={this.handlerClickKill} 
                                key={indice} 
                                index={indice}
                                objeto={objeto} />;
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default HeroTable