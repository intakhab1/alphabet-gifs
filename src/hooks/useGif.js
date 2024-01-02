import React, { useEffect, useState } from 'react'

const useGif = (tag) => {

    const[gif, setGif] = useState('');
    const[loading , setLoading] = useState('false');

    async function fetchMeme(tag){
        setLoading(true);
        const a = "https://res.cloudinary.com/delm0pr7q/image/upload/v1704124908/cloudinaryProject/apple_tuqqzr.gif"
        const b = "https://res.cloudinary.com/delm0pr7q/image/upload/v1704124905/cloudinaryProject/bicycle_untph8.gif"   
        const c = "https://res.cloudinary.com/delm0pr7q/image/upload/v1704124908/cloudinaryProject/coin_bq204a.gif"     
        const d = "https://res.cloudinary.com/delm0pr7q/image/upload/v1704124906/cloudinaryProject/duck_zcjm7d.gif"    
        const e = "https://res.cloudinary.com/delm0pr7q/image/upload/v1704124904/cloudinaryProject/eye_xbw3kp.gif"     
        const f = "https://res.cloudinary.com/delm0pr7q/image/upload/v1704124909/cloudinaryProject/french-fries-chips_nzkkw0.gif"     
        const g = "https://res.cloudinary.com/delm0pr7q/image/upload/v1704124907/cloudinaryProject/gift_mz316q.gif" 
        const h = 'https://res.cloudinary.com/delm0pr7q/image/upload/v1704124845/cloudinaryProject/horse_izcui3.gif'  
        
        let imageSource = tag;
        if(tag === 'A'){
            imageSource = a;
        }
        else if(tag === 'B'){
            imageSource = b;
        }
        else if(tag === 'C'){
            imageSource = c;
        }
        else if(tag === 'D'){
            imageSource = d;
        }
        else if(tag === 'E'){
            imageSource = e;
        }
        else if(tag === 'F'){
            imageSource = f;
        }
        else if(tag === 'G'){
            imageSource = g;
        }
        else if(tag === 'H'){
            imageSource = h;
        }
        
        setGif(imageSource);
        setLoading(false);
    }
    useEffect( () => {
        fetchMeme('A');
        } , [] 
    )
    return{ gif , loading , fetchMeme }
}
export default useGif
