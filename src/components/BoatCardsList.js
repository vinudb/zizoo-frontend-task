import React from 'react';
import BoatCard from "./BoatCard";
class BoatCardsList extends React.Component {
    state = {
        boats: []
    }
    componentDidMount() {
        //fetch boats here
        const boats = fetch('http://localhost:3010/boatOptions')
            .then((res) => res.json())
            .then((result) => this.setState({ boats: result }))
            .catch((e) => { console.log(e) })
    }
    render() {
        return (
            <div className="boarCardList">
                {
                    this.state.boats.map((boat, index) => <BoatCard key={index} boat={boat} />)
                }
            </div>
        )
    }
}

export default BoatCardsList;
