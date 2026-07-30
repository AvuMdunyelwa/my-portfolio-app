function Container({children}){
  return (
    <>
      <div className="container" style={{width: '100%', height: '100%'}}>
        {children}
      </div>
    </>
  )
}

export default Container
