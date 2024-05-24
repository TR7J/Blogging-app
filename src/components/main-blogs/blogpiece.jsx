import MainBlogs from "./main-blogs"; 
import './main-blogs.css'

export default function BlogPiece(props){
    return(
        <div className="blog">
            <div className="blog-image">
                <img src={props.Image} alt="" width="400px" height="350px"/>
            </div>
            <div className="blog-about">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className="blog-footer">
                <p>{props.category}</p>
            </div>
        </div>
    )
}

