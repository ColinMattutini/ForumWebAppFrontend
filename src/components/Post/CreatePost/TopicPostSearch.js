import React, { Fragment, useRef, useState } from "react";
import classes from "./TopicPostSearch.module.css";

const TopicPostSearch = (props) => {

const [search, setSearch] = useState("");
const [startSearch, setStartSearch] = useState(true);

const topics = JSON.parse(localStorage.getItem("Topics"));

const inputRef = useRef();
const placeholder = ("Search: \"Cooking\"");


const onChangeSearch = e => {
    setSearch(e.target.value);
    setStartSearch(true);
}


const topicSearch = topics.filter(topic => {
    if (search === "" || !startSearch) {
      return "";
    } else if (topic.name.toLowerCase().includes(search.toLowerCase())) {
      return topic;
    }
  }).map((topic) => (
    <div className={classes.button} key={topic.topicId}>
      <button onClick={(e) => 
        {
            e.preventDefault();
            inputRef.current.value = topic.name;
            props.topicChoiceHandler(topic.name);
            setSearch(topic.name);
            setStartSearch(false);
            
        }}>{topic.name}</button>
    </div>
  ));

return(
    <Fragment>
        <div className={classes.position}>
        <label>Select a topic to post to: </label>
        <div className={classes.search}>
            <input type="text" placeholder={placeholder}  ref={inputRef} onChange={onChangeSearch} value={search} required/>
        </div>
            <div className={classes.dropdown}>
                {topicSearch}
            </div>
        </div>
            </Fragment>  
        
    
    )
}

export default TopicPostSearch;