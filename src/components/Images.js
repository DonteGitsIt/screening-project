import React from 'react';


    function Images (props){
        return (
            <div className="imageContainer">
                <img src={props.imgUrl} alt={props.alt}/>
            </div>
        )
    }
        

    


export default Images;