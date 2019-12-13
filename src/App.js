import React, { Component } from "react";
import PuppyCard from "./components/PuppyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import puppies from "./puppies.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    puppies
  };

  removePuppy = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const puppy = this.state.puppies.filter(puppy => puppy.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ puppies });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Puppies</Title>
        {this.state.puppies.map(puppy => (
          <PuppyCard
            removePuppy={this.removePuppy}
            id={puppy.id}
            key={puppy.id}
            name={puppy.name}
            image={puppy.image}
            occupation={puppy.occupation}
            location={puppy.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
