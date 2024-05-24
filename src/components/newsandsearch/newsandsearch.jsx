import React from "react";
import './newsandsearch.css';
import { CiSearch } from "react-icons/ci";
import { DummyNewsBlogs } from "../../news";
import News from "./news";
import {FaBars, FaTimes} from "react-icons/fa";


export default function Newsandsearch(){
    const [blogs, setBlogs] = React.useState(DummyNewsBlogs)
    function toggleSearch(){

    }
    return(
        <div className="main-content">
            <div className="newsandsearch">
                <div className="newsheadline">
                    <h1><span className="span-daily">Your Daily</span> <span className="span-news">News</span></h1>
                </div>
                <button className="search-btn" onClick={toggleSearch}>
                    <CiSearch/>
                </button>
            </div>
            <div className="searchinput">
                <input type="text" placeholder="What are you looking for?" className="search-input"></input> 
            </div>
            <div className="headlines-horizontal">
                <div className="headlines">
                    {
                        blogs.map(function(x){
                            return <News id={x.id} image={x.Image} category={x.category} title={x.title} description={x.description}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}