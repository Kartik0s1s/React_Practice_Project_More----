function  Lecture12() {
     const user ={
                name : "Kartik",
                location: "pune"
            } 
     function sum(a,b) {
        return a+b;    
     }
              let path2 = "https://imgs.search.brave.com/1LgUcuHvx-D2fH1gaQARrkZOgvOrwkHSKYbrN0c3law/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/MTk4NzQ4OC9waG90/by9jdXRlLWRvZy1w/dXQtaGlzLWZhY2Ut/b24taGlzLWtuZWVz/LXRvLXRoZS1tYW4t/YW5kLXNtaWxpbmct/ZnJvbS10aGUtaGFu/ZHMtc2NyYXRjaGlu/Zy1oZXItZWFyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1O/S0dmOG5tWFZka3Nt/TlMwQXk2OTZjVlBO/U0lmQ0pKMXl1X3k5/akZHQnNNPQ"
    return(
        <div>
            <h1>{user.name? user.name: "User Not Found" }</h1>
            <h1>{sum(1,419)}</h1>
            <h1></h1>
         
               <img src= {path2}  alt="" />
            <h1>{}</h1>
        </div>
    )
    
}
export default Lecture12;