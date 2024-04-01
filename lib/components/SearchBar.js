import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "@mui/joy";

export default function SearchBar({ onSearch = null, placeholder = "Search" }) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log("ser", searchTerm);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch(searchTerm);
    }
  };

  return (
    <Input
      variant="outlined"
      size="md"
      sx={{ width: "400px", marginLeft: "auto", marginBottom: "1rem" }}
      placeholder={placeholder}
      value={searchTerm}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      endDecorator={
        <IconButton
          aria-label="toggle password visibility"
          edge="end"
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      }
    />
  );
}

SearchBar.defaultProps = {
  onSearch: () => {},
  placeholder: "",
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};
