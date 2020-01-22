import React from "react";

class ApiFetch extends React.Component {
  state = { locationData: {}, Name: "", SiteId: "", X: "", Y: "" };
  locationData = async props => {
    const key = "91055ad9865640ba844d8e2569f667ad";
    const station = "true";
    const maxResults = "1";
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const fake = "slussen";

    const api_call = await fetch(
      `${proxy}https://api.sl.se/api2/typeahead.json?key=${key}&searchstring=${fake}&stationsonly=${station}&maxresults=${maxResults}`
    );

    const data = await api_call.json();
    const { ResponseData } = data;
    ResponseData &&
      ResponseData.map(item => {
        this.setState({
          Name: item.Name,
          SiteId: item.SiteId,
          X: item.X,
          Y: item.Y
        });
        return item;
      });
    this.setState({ locationData: data });
  };

  componentDidMount() {
    this.locationData();
  }

  render() {
    return (
      <div>
        <h1>{this.state.Name}</h1>
        <h1>{this.state.SiteId}</h1>
        <h1>{this.state.X}</h1>
        <h1>{this.state.Y}</h1>
      </div>
    );
  }
}

export default ApiFetch;
