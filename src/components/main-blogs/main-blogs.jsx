import React from "react";
import { DummyBlogs } from "../../data";
import BlogPiece from "./blogpiece";
import './main-blogs.css'

export default function MainBlogs(){
    const [search, setSearch] = React.useState("")
    const [blogs, setBlogs] = React.useState(DummyBlogs)
    return(
        <div className="blogs">
            <div className="search">
                <input type="text" placeholder="What are you looking for?" className="search-input" onChange={(event) => {
                    setSearch(event.target.value)
                }}/>
            </div>
            <h1 className="blogs-main-title">Courses Blogs</h1>
            
            <div className="blogs-container">
                {
                    blogs.map(function({Image, category, title, description}, id) {
                        return <BlogPiece key={id} Image={Image} category={category} title={title} description={description}/>
                    })
                }
            </div>
        </div>
   
    )
}

























{/* <div className="blogs-container">
                {
                    DummyBlogs
                            .filter((val) => { 
                                if(search = ""){
                                    return val
                                } else if(val.title.toLowerCase().includes(search.toLowerCase())){
                                    return val
                                }
                            })
                            .map((val) => {
                                return(
                                    <div className="blog" key={val.id}>
                                        <div className="blog-image">
                                            <img src={val.Image} alt="" width="400px" height="350px"/>
                                        </div>
                                        <div className="blog-about">
                                            <h3>{val.title}</h3>
                                            <p>{val.description}</p>
                                        </div>
                                        <div className="blog-footer">
                                            <p>{val.category}</p>
                                        </div>
                                    </div>
                                )
                            })
                } 
            </div> */}