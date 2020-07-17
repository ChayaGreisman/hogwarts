import React from "react";
import HogCard from "./HogCard";

class HogContainer extends React.Component {
  state = {
    hogs: [],
    greased: false,
    sortBy: ""
  };

  componentDidMount() {
    fetch("http://localhost:3001/hogs")
      .then((resp) => resp.json())
      .then((hogsData) => this.setState({ hogs: hogsData }));
  }

  chooseGreased = () => {
    this.setState({ greased: !this.state.greased });
  };


  handleChange = e => {
      this.setState({sortBy: e.target.value})
  }

  render() {
    let greasedHogs = this.state.hogs.filter((hog) => hog.greased === true);
    let displayHogs = this.state.greased ? greasedHogs : [...this.state.hogs];

    if (this.state.sortBy=== "name"){
        // displayHogs.sort((hogA, hogB) => (hogA.name > hogB.name ? 1 : -1))
        displayHogs.sort((a,b)=> a.name.localeCompare(b.name))
    } else if (this.state.sortBy=== "weight"){
        displayHogs.sort((hogA, hogB) => hogA.weight> hogB.weight ? 1 : -1)
    }

    return (
      <div>
            <button onClick={this.chooseGreased}>
            {this.state.greased ? "All" : "Greased"}
            </button>
            <label>
                <select value={this.state.sortBy} onChange = {this.handleChange}>
                    <option value="">None</option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </label>

            <div >
            {displayHogs.map((hog, index) => (
                <HogCard key={index} id={index} hog={hog} />
                ))
            }
            </div>
      </div>
    );
  }
}

export default HogContainer;