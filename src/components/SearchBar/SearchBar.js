import React, { Fragment, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SearchBar.module.css";

const SearchBar = () => {

const [search, setSearch] = useState("");
const inputRef = useRef();
const navigate = useNavigate();
const placeholder = ("Search: \"Cooking\"");
const topics = [
    {name: "Cooking"},
    {name: "Fitness"},
    {name: "Sports"},
    {name: "Knitting"},
    {name: "Programming"}

]

const onChangeSearch = e => {
    setSearch(e.target.value);
}


const topicSearch = topics.filter(topic => {
    if (search === "") {
      return "";
    } else if (topic.name.toLowerCase().includes(search.toLowerCase())) {
      return topic;
    }
  }).map((topic) => (
    <div className={classes.button} key={topic.id}>
      <button onClick={() => {navigate(inputRef.current.value = topic.name); setSearch("")}}>{topic.name}</button>
    </div>
  ));

return(
    <Fragment>
        <div className={classes.position}>
        <div className={classes.search}>
            <input type="text" placeholder={placeholder}  ref={inputRef} onChange={onChangeSearch} value={search}/>
        </div>
            <div className={classes.dropdown}>
                {topicSearch}
            </div>
        </div>
            </Fragment>  
        
    
    )
}

export default SearchBar;