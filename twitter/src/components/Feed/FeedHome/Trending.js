
import "./Trending.css"

// props is an object which contains all attributes passed to the component.

function Trending(props){

    return(
        <div className="Trending-name">
            <p className="header-small">{props.data.header}</p>
            <p className="text"> {props.data.text} </p>
            <p className="header-small"> {props.data.tweetCount} </p>
        </div>
    )
}

export default Trending;