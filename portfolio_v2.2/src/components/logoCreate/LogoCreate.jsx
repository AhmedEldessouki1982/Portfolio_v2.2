
function LogoCreate({name}) {
    let RegExp = /\s[a-zA-Z]/;
    let resultedText = name.match(RegExp)[0].trim();
    
  return (
    <div className={`w-28 h-28 text-4xl text-center py-10 bg-red rounded-md mx-5`}>
        {name[0]+resultedText}
    </div>
  )
}

export default LogoCreate;