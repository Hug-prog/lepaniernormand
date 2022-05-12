import React, { useState } from "react";
import axios from "axios";

export default function GeoInput({ parentCallback }) {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");

  const getGeoLocation = query => {
    if (query !== "") {
      axios
        .get(
          `https://api-adresse.data.gouv.fr/search/?q=${query}&type=housenumber&autocomplete=1`
        )
        .then(res => {
          if (res.data.features !== []) {
            setSuggestions(res.data.features);
          }
        })
        .catch(err => console.log(err));
    }
  };
  return (
    <div className="w-full text-center">
      <input
        className="w-3/4 p-3 border-b-2 border-black outline-none mb-4"
        type={"text"}
        value={value}
        placeholder="n rue code postal ville"
        onChange={e => {
          setValue(e.target.value);
          getGeoLocation(e.target.value);
        }}
        onClick={() => {
          setValue("");
          setSuggestions([]);
        }}
      />
      <div>
        {suggestions.map((suggestion, i) => (
          <div
            className=" hover:bg-blue-500 hover:text-white cursor-pointer"
            key={i}
            onClick={() => {
              setValue(suggestion.properties.label);
              parentCallback(suggestion.properties);
              setSuggestions([]);
            }}
          >
            {suggestion.properties.label}
          </div>
        ))}
      </div>
    </div>
  );
}
