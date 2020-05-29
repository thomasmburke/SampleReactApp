import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // can also do object distructuring here to avoid always having to use this.props
    //const {onReset, onIncrement, onDelete, counters} = this.props;

    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
