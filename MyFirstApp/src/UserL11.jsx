function User() {
    return(
     <div>
            <h1>Kartik Chaudhari</h1>
            <ul> 
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
            </ul>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgXXltnzYDrxZ7cQj6YtATDazn_TZXiku7EsTJwjFnr5mdbPn_dnsURY&s" alt="" />
            <br />
            <button onClick={call}>Click Me</button>
     </div>
   
        
    )
    
}



  function call(){
        return (
          alert("Kyu dabayi Buttin")
        )
     }



export default User;

  