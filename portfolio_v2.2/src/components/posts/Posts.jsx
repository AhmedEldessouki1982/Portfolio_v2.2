
function Posts() {
  return (
    <section className="bg-gray-900">
        <div className="items-center rounded-lg shadow flex bg-gray-800 border-gray-700 max-w-lg">
            <div className="w-full">
               <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/>
            </div>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-white">
                    <p>Bonnie Green</p>
                </h3>
                <span className="text-gray-400">CEO & Web Developer</span>
                <p className="mt-3 mb-4 font-light text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
            </div>
          </div> 
    </section>
  )
}

export default Posts;