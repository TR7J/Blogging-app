import React from "react";
import './home.css';
import '../../components/new-main-blogs/newmainblogs.css'
import { DummyMainBlogs } from '../../newmainblogsdata'
import { CiSearch } from "react-icons/ci";
import { DummyNewsBlogs } from "../../news";
import { DataSc } from "../../datasc"; 
/* import { DummyMainBlogs } from "../../newmainblogsdata";  */
import News from "./news";
import NewNavigation from '../../components/newnavigation/newnavigation'; 
import { Link } from "react-router-dom";
/* import {FaBars, FaTimes} from "react-icons/fa"; */

export default function Home(){
    const [blogs, setBlogs] = React.useState(DummyNewsBlogs)
    const [ourBlogs, setOurBlogs] = React.useState(DummyMainBlogs) 
    const [search, setSearch] = React.useState("")
   /*  const [ourBlogs, setMainBlogs] = React.useState(DummyMainBlogs) */
    return(
        <div className="main-content">
            <div className="newsandsearch">
                <div className="newsheadline">
                    <h1><span className="span-daily">Your Daily</span> <span className="span-news">News</span></h1>
                </div>
                <button className="search-btn">
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
            <div>
                <NewNavigation/> 
            </div>
            <div className="main-blogs">
                {
                    DataSc
                        .filter(function(z){
                            if (search === ""){
                                return true
                            } else if(z.title.toLowerCase().includes(search.toLowerCase())){
                                return true
                            } else{
                                return false
                            }
                        })
                        .map(function(z) {
                            return (
                                <div className="main-blog" key={z.id}>
                                    <div className="main-blog-img">
                                        <Link to='/DataScience'><img src={z.Image} alt="" className="blog-img"/></Link>
                                    </div>
                                    <div className="main-blog-content">
                                        <h2>{z.title}</h2>
                                        <p>{z.description}</p>
                                        <div className="main-blog-footer">
                                            <p className="footer-p">{z.category}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                }
               {
                    ourBlogs
                        .filter(function(z){
                            if (search === ""){
                                return true
                            } else if(z.title.toLowerCase().includes(search.toLowerCase())){
                                return true
                            } else{ 
                                return false
                            }
                        })
                        .map(function(z){
                            return (
                                <div className="main-blog" key={z.id}>
                                    <div className="main-blog-img">
                                        <img src={z.Image} alt="" className="blog-img"/>
                                    </div>
                                    <div className="main-blog-content">
                                        <h2>{z.title}</h2>
                                        <p>{z.description}</p>
                                        <div className="main-blog-footer">
                                            <p className="footer-p">{z.category}</p>
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