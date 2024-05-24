import React from "react";
import './newsandsearch.css';
import { DummyMainBlogs } from '../../newmainblogsdata'
import { CiSearch } from "react-icons/ci";
import { DummyNewsBlogs } from "../../news";
/* import { DummyMainBlogs } from "../../newmainblogsdata"; */
import News from "./news";
import NewNavigation from '../newnavigation/newnavigation';
import {FaBars, FaTimes} from "react-icons/fa";



export default function Newsandsearch(){
    const [blogs, setBlogs] = React.useState(DummyNewsBlogs)
    /* const [ourBlogs, setOurBlogs] = React.useState(DummyMainBlogs) */
    const [search, setSearch] = React.useState("")
    const [ourBlogs, setMainBlogs] = React.useState(DummyMainBlogs)
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
                <input type="text" placeholder="What are you looking for?" className="search-input" onChange={(event) => {
                    setSearch(event.target.value)
                }}/>
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

            <NewNavigation/>
            <div className="main-blogs">
                {
                    ourBlogs
                        .filter(function(z){
                            if (search == "") {
                                return z
                            } else if(z.title.toLowerCase().includes(search.toLowerCase())){
                                return z
                            }
                        })
                        .map(function(z){
                            return (
                                <div className="main-blog" key={z.id}>
                                    <div className="main-blog-img">
                                        <img src={z.Image} alt="" className="blog-img" />
                                    </div>
                                    <div className="main-blog-content">
                                        <h2>{z.title}</h2>
                                        <p>{z.description}</p>
                                        <div className="main-blog-footer">
                                            <p className='footer-p'>{z.category}</p>
                                        </div> 
                                    </div>
                                </div>
                            )
                        }) 
                }
            </div>      
        </div>
    )
}