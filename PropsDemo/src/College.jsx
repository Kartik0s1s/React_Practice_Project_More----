function College({ clgList}){
    console.log(clgList)
    return (
        <div>
            <h1>CollegeName</h1>
            {
                clgList.map((a,index)=>(
                  <p  >{a}</p>
                ))
            }

        </div>
    )
}

export default College;