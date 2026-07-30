function Container({children}){
  return (
    <>
      <div className="container-fluid" style={{width: '100%', height: '100%', margin: '0'}}>
        {children}
      </div>
    </>
  )
}

export default Container
