import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value, // 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5"],
  };

  //constructor() {
  // super();
  //this.handleIncrement = this.handleIncrement.bind(this);
  //}

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <h1>Hello Margaux!</h1>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.state.tags.length === 0 && <p>Please Create a new tag :)</p>}
        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  /**
  handleIncrement() {
    console.log("Increment Clicked...", this.state.count);
    //console.log("Increment Clicked...");
  }
  */
  /**
   * or define like below
   */
  handleIncrement = () => {
    console.log("Increment Clicked...", this.state.count);
    this.setState({ count: this.state.count + 1 });
    //console.log("Increment Clicked...");
  };

  getBadgeClasses() {
    let classes = " badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
    //return count === 0 ? "Zero" : count;
    // This is the same as:
    //return this.state.count === 0 ? 'Zero' : this.state.count;
  }
}

export default Counter;

/*
 <div>
        <h1>Hello Margaux!</h1>
        <button>Increment</button>
      </div>
      */

/*
<React.Fragment>
        <h1>Hello Margaux!</h1>
        <span>{this.state.count}</span>
        <button>Increment</button>
      </React.Fragment>
      */

// className equals class this is because class is a reserved word in javascript

/**
 <React.Fragment>
        <h1>Hello Margaux!</h1>
        <img src={this.state.imageUrl} />
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
 */

/**
  <div>
        <h1>Hello Margaux!</h1>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
  */

/**USING CHILDREN
   *
   * <Counter key={counter.id} value={counter.value} selected={true}>
            <h4>Counter #{counter.id}</h4>
          </Counter>
   *
   *
   * <div>
        {this.props.children}
        <h1>Hello Margaux!</h1>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && <p>Please Create a new tag :)</p>}
        {this.renderTags()}
      </div>
   */
