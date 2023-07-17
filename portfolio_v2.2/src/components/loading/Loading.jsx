
function Loading() {
  return (
    <div className="relative w-8 h-8 animate-loading">
        <span className="absolute top-0 left-0 w-4 h-4 rounded-full bg-red inline-block"></span>
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-yellow inline-block"></span>
        <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-yellow inline-block"></span>
        <span className="absolute bottom-0 left-0 w-4 h-4 rounded-full bg-yellow inline-block"></span>        
    </div>
  )
}

export default Loading;