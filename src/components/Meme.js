export default function Meme(props) {
    return (
        <div className="meme-box">
            <form onSubmit={(e) => props.getMeme(e)} className="inputs">
                <input type="text" onChange={(e) => props.handleChange(e)} name="topText" placeholder="topText" maxLength="20" value={props.topText} className="input" />
                <input type="text" onChange={(e) => props.handleChange(e)} name="bottomText" placeholder="bottomText" maxLength="20" value={props.bottomText} className="input"/>
                <button className="btn">Get a meme 🥺</button>
            </form>
            <div className="meme">
               <img src={props.img} />
               <h1 className="topText">{props.topText}</h1>
               <h1 className="bottomText">{props.bottomText}</h1>
            </div>
        </div>
    )
}