render(){
                let showLibraries = MainStore.libraries.map(item => {
                if(1){
                  return ((
                    <div>
                            <div  style = {{
                        /*  backgroundImage:`url("${deliBuilding}")`,*/
                          marginTop: 20,
                          height : 150,
                        //  flexDirection: 'row',
                          borderRadius: 30}}
                           onClick = {() => {
                              MainStore.library = item
                              this.getLibrary(item)

                            }}>
                            <FontAwesomeIcon icon={faUser} size = "2x" color = "green" />

                           </div>
                           <p>item.libName</p>
                    </div>

                  ))
                }

                else {
                  alert(item);
                  return ((<div><p>othing</p></div>))
                }
              }

    return( <div>{showLibraries}</div> )
}


 );
