import { useContext, useState } from 'react';
import { BsChatQuoteFill } from 'react-icons/bs';
import { PostsContext } from '../../context/PostContext';
import { Context } from '../../context/DataContext';
import { PostPostsAPI } from '../../context/PostPostsAPI';

function Additem() {
  let { userState } = useContext(Context);

  let [obj, setObj] = useState({});

   let handleAddItem = (e) => {
    setObj (
      {
        ...obj,
        "photo": userState.user.user.photos[3].value,
        "name": userState.user.user.displayName,
        "email": userState.user.user.emails[0].value,
        [e.target.name]: e.target.value,
      }
    )
  }

  let handlePostItem = () => {
    PostPostsAPI(obj)
  }

  return (
    <div  onClick={(e) => e.stopPropagation()} className='relative flex flex-col justify-center items-center z-20 w-80 h-60 md:w-96 bg-gray-900 rounded-lg'>
      <div className='flex flex-col w-[90%]'>
        <div className='flex gap-5 my-1'>
          <p>Add Endorsement here...</p>
          <BsChatQuoteFill  size={30}/>
        </div>
        <textarea onChange={handleAddItem} name='post' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
      </div>
      <button onClick={handlePostItem} className='absolute bottom-3 w-16 text-black bg-yellow rounded-lg cursor-pointer text-lg text-center capitalize hover:bg-slate-300 hover:text-black hover:duration-500'>post</button>
    </div>
  )
}
export default Additem;
