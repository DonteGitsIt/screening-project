
import Unsplash, { toJson } from 'unsplash-js';





export default {
    
    searchPhotos: function (query) {
        
        const unsplash = new Unsplash({
            applicationId: "bb871877d7dd496d178345e41cf031344afee1d6577a8a14ce45275a1ff3af83",
            secret: "f733ef14cab890492b552f23a082e3d50515268ebd83a1a49663c6e9ad7de02c"
        });
        
        return(
            unsplash.search.photos(query, 1, 25)
            .then(toJson)
        )
        
            
    }
}