function User({props}){
   
    return (
    <div>
       <hr />

       <h1> Name{props.name}</h1>
       <h1> Age{props.age}</h1>
       <h1> City{props.city}</h1>

       <hr />
    </div>
    )
}
export default User;