import React, { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SearchBar.module.css";

const SearchBar = () => {

  const [search, setSearch] = useState("");
  const [topics, setTopics] = useState([]);
  const inputRef = useRef();
  const navigate = useNavigate();
  const placeholder = ("Search: \"Painting\"");

  const fetchTopics = async () => {
    const response = await fetch(
      "https://hobby-forum.herokuapp.com/api/topic",

    )
    const data = await response.json();
    const loadedTopics = [];
    for(const topicKey in data){
      loadedTopics.push({
          key: data[topicKey].topicId,
          topicId: data[topicKey].topicId,
          name: data[topicKey].topicName,
      })
    }
    setTopics(loadedTopics);
    localStorage.setItem("Topics", JSON.stringify(loadedTopics));
    }

  const onChangeSearch = e => {
      setSearch(e.target.value);
  }

  useEffect(() => {
    
    if(localStorage.getItem("Topics") === null){
       fetchTopics();
     } else{
      setTopics(JSON.parse(localStorage.getItem("Topics")));
     }
    
  }, [])

  const topicSearch = topics.filter(topic => {
      if (search === "") {
        return "";
      } else if (topic.name.toLowerCase().includes(search.toLowerCase())) {
        return topic;
      }
      }).map((topic) => (
      <div className={classes.button} key={topic.topicId}>
        <button onClick={() => {navigate("/"+(inputRef.current.value = topic.name)); setSearch("")}}>{topic.name}</button>
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