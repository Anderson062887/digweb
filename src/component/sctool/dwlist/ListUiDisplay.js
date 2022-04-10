export const ListDisplay = ({list})=>{
    const date = new Date().toLocaleDateString();
    return(
        <div> 
            <ul>
                   {list.map((o,i)=>{            
                                      return(
                                            <li className="list" key={i}>
                                                <ul className="sub-list">
                                                    <li>{o.Restaurant}</li>
                                                     <li>{o.Category}</li>
                                                     <li>{o.Items}</li>
                                                     <li>{o.Quantity}</li>
                                                     <li>{date}</li>
                                                  </ul>
                                               </li>
                                               )
                                     })
                              } 
             </ul>
        </div>
    )
}