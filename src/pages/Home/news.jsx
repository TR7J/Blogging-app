import './home.css';

export default function News(props){
    return(
        <div className="news">
            <div className="news-image">
                <img src={props.image} alt="" width="" height=""/>
            </div>
            <div className='news-description'>
                <h2 className='news-description-h2'>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}