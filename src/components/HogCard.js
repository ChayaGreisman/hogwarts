import React from "react";

class HogCard extends React.Component {
    state = {
        displayMore: false,
    }

    changeDisplay = () => {
        this.setState({displayMore: !this.state.displayMore})
    }

    renderFront = () => {
        return (
            <div>
            <h2>NAME: {this.props.hog.name}</h2>
            <img src={`/hog-imgs/${this.props.hog.name.split(" ").join("_").toLowerCase()}.jpg`}/>
            </div>
        )
    }

    renderBack = () => {
        return (
            <div>
            <h3>SPECIALITY: {this.props.hog.specialty}</h3>
            <h3>GREASED: {this.props.hog.greased ? "✅" : "❌"}</h3>
            <h3>WEIGHT: {this.props.hog.weight}</h3>
            <h3>HIGHEST MEDAL: {this.props.hog['highest medal achieved']} </h3> 
            </div>
        )
    }

    render() {
        return (
            <div className="pigTile" onClick={this.changeDisplay}>
                {this.renderFront()}
                {this.state.displayMore && this.renderBack()}
            </div>
        );
    }
}

export default HogCard;