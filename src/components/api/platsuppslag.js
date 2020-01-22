import React from "react";

const ApiFetch = props => {
  const key = "91055ad9865640ba844d8e2569f667ad";
  const station = "true";
  const maxResults = "1";
  const proxy = "https://cors-anywhere.herokuapp.com/";

  fetch(
    `${proxy}https://api.sl.se/api2/typeahead.json?key=${key}&searchstring=${props}&stationsonly=${station}&maxresults=${maxResults}`
  ).then(res => res.json());

  console.log(ApiFetch);
  return <div></div>;
};

export default ApiFetch;
