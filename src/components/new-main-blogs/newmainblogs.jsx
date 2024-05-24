import React from 'react'
import { DummyMainBlogs } from '../../newmainblogsdata'
import NewBlogItem from './newblogitem'
import './newmainblogs.css'


export default function NewMainBlogs(){
    const [MainBlogs, setMainBlogs] = React.useState(DummyMainBlogs)
    return(
        <div>
            <div className='main-blogs'>
                {
                    MainBlogs.map(function(y){
                        return <NewBlogItem img={y.Image} title={y.title} description={y.description} id={y.id} category={y.category}/>
                    })
                }
            </div>
        </div>
    )
}








{/* <div>
<div className='main-blogs'>
    {
        MainBlogs.map(function(y){
            return <NewBlogItem img={y.Image} title={y.title} description={y.description} id={y.id} category={y.category}/>
        })
    }
</div>
</div> */}