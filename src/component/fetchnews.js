import axios from 'axios';
import { useState } from 'react';



const FetchNews= () => {
    const [news,setnews]=useState([])

    const fetchnews=()=>{
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-06-01&sortBy=publishedAt&apiKey=80d037dc38294fa9a9aa85397dc6abe9")
        .then((response)=>{
         console.log(response);
         setnews(response.data.articles)
        })
     }
    
  return (
    <>
     <div className='container '>
        <div className='row'>
            <div className='col-4'>
                <button className='btn btn-primary' onClick={fetchnews}>fetchnews</button>
            </div>
        </div>
     </div>
     {
       news && news.map((value) => {
        return(

            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src={value?.urlToImage} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{value?.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                )
        })
     }
    </> 
  )

  }
export default FetchNews
