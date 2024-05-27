import React from "react";
import '../Home/home.css'
import '../../components/new-main-blogs/newmainblogs.css'
import { HiMiniArrowLeftCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";


/* localStorage to persist data across page reloads */

export default function CreateNew(){

    /* blogs: This state holds the list of blogs. It initializes with data from localStorage if available, or an empty array otherwise. */
    const [blogs, setBlogs] = React.useState(function () {
        const mySavedBlogs = localStorage.getItem('blogs')
        return mySavedBlogs ? JSON.parse(mySavedBlogs) : []
    });
    /* blogCreate: This state holds the data for the blog being created or edited. */
    const [blogCreate, setBlogCreate] = React.useState({title: '', description: '', img: null, category: '', likes: 0, comments:[]});
    /* This state holds the ID of the blog currently being edited. It is null when creating a new blog. */
    const [blogId, setBlogId] = React.useState(null);
    /* comment: This state holds the current comment being typed. */
    const [comment, setComment] = React.useState('')

    /* This useEffect hook saves the blogs state to localStorage whenever blogs changes. */
    React.useEffect(function(){
        localStorage.setItem('blogs', JSON.stringify(blogs))
    }, [blogs])


    /* The createBlog function handles the form input changes */
    /* It updates the state (blogCreate) with the new values entered by the user. */
   /*  event object contains information about the event that triggered the function, in this case, a change in one of the form inputs. */
    function createBlog(e) {
        if (e.target.name === "img") {
           /*  e.target.files[0] retrieves the first file selected by the user. */
            const file = e.target.files[0];
          /*   A FileReader object is created to read the file's content. */
            const reader = new FileReader();
            /* img: reader.result updates the img property with the file's data URL. */
            reader.onloadend = () => {
                setBlogCreate({...blogCreate, img: reader.result});
            };

            /* This method starts reading the contents of the file. When finished, the onloadend event handler (defined above) will be executed. */
            reader.readAsDataURL(file);
            
        } else {
            setBlogCreate({...blogCreate, [e.target.name]: e.target.value});
        }
    }

    function submitBlog(e) {
        e.preventDefault();
        if (blogId !== null) {
            const editedBlog = blogs.map(function(blog, id) {
                return id === blogId ? {...blogCreate, likes: blog.likes, comments: blog.comments} : blog;
            });
            setBlogs(editedBlog);
            setBlogId(null);
        } else {
            setBlogs([...blogs, blogCreate]);
        }
        setBlogCreate({title: '', description: '', img: null, category: '' , likes: 0, comments: []});
    }

    function likeTheBlog(id) {
        const updatedBlogs = blogs.map(function(blog, ourIndex){
            if (ourIndex === id) {
                return {...blog, likes: blog.likes + 1};
            }
            return blog;
        });
        setBlogs(updatedBlogs);
    }

    function addAComment(e, id) {
        e.preventDefault();
        const updatedBlogs = blogs.map(function(blog, ourIndex){
            if (ourIndex === id) {
                return {...blog, comments: [...blog.comments, comment]};
            }
            return blog;
        });
        setBlogs(updatedBlogs);
        setComment('');
    }

    function editBlog(id){
        setBlogCreate(blogs[id]);
        setBlogId(id);
    }

    function deleteBlog(id) {
        const newBlogs = blogs.filter((_, x) => x !== id);
        setBlogs(newBlogs);
    }

    return( 
        <div className="createnew">
            <div className="top">
                <div className="profile-picture">
                    <Link to="/"><HiMiniArrowLeftCircle className="arrow"/></Link>
                    <h1 className="profile-picture-h1">Create New</h1>
                </div>
                <div className="createnew-divform">
                    <form onSubmit={submitBlog} className="createnew-form">
                        <input type="text" name="title" placeholder="Title" required value={blogCreate.title} onChange={createBlog} className="form-title"/>
                        <textarea name="description" placeholder="Description" required value={blogCreate.description} onChange={createBlog} className="form-textarea"/>
                        <input type="file" name="img" placeholder="Upload An Image" required onChange={createBlog} className="form-img"/>
                        <input type="text" name="category" placeholder="Category" required value={blogCreate.category} onChange={createBlog} className="form-category"/>
                        <button type="submit" className="form-button">{blogId !== null ? 'Modify' : 'Create'} Blog</button>
                    </form>
                </div>
            </div>
            <hr className="hr"/>
            <div className="main-blogs">
                {
                    blogs.map(function(blog, id) {
                        return (
                            <div key={id} className="main-blog">
                                <div className="main-blog-img">
                                    {blog.img && <img src={blog.img} className="blog-img" alt=""/>}
                                </div>
                                <div className="main-blog-content">
                                    <h2>{blog.title}</h2>
                                    <p>{blog.description}</p>
                                    <div className="main-blog-footer">
                                        <p className="footer-p">{blog.category}</p>
                                    </div>
                                    <div className="interaction-section">
                                        
                                        <form onSubmit={(e) => addAComment(e, id)} className="comment-form">
                                            <input 
                                                type="text" 
                                                value={comment} 
                                                onChange={(e) => setComment(e.target.value)} 
                                                placeholder="Comment?" 
                                                required 
                                                className="comment-input"
                                            />
                                            <button type="submit" className="comment-button">Comment</button>
                                        </form>
                                        <div className="comments-section">
                                            {blog.comments.map((comment, index) => (
                                                <p key={index} className="comment">{comment}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="like-edit-delete">
                                    <div className="like">
                                        <button onClick={() => likeTheBlog(id)} className="like-button">Like ({blog.likes})</button>
                                    </div>
                                    <div className="edit-deletebtns">
                                        <button onClick={() => editBlog(id)} className="edit-button">Edit</button>
                                        <button onClick={() => deleteBlog(id)} className="delete-button">Delete</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
} 



