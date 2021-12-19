import React, { Component } from "react";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }));

    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    fetch("https://jsonplaceholder.typicode.com/albums/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    fetch("https://jsonplaceholder.typicode.com/albums/1", {
      method: "PATCH",
      body: JSON.stringify({
        title: "foo"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    fetch("https://jsonplaceholder.typicode.com/albums/1", {
      method: "DELETE"
    });
  }
  renderAlbum = () => {
    return (
      this.state.data &&
      this.state.data.map((i) => {
        return <div>{i.title}</div>;
      })
    );
  };

  render() {
    // this.setState({data:json})
    // console.log(this.state)

    return (
      <div className="App">
        <div className="App-header">{this.renderAlbum()}</div>
      </div>
    );
  }
}

export default App;
