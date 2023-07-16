import { useContext, useEffect, useState } from 'react';
import Linkedin from '../assets/social/linkedin.svg';
import Posts from '../components/posts/Posts';
import { Context } from '../context/DataContext';
import { PostsContext } from '../context/PostContext';
import { GetUserAPI } from '../context/GetUserAPI';
import { GetPostsAPI } from '../context/GetPostsAPI';
import { BiMessageAdd } from 'react-icons/bi';
import Popups from '../pages/Popups'
import Additem from '../components/addPost/Additem';

function Testimonials() {

  let {userState, dispatch} = useContext(Context);
  let { postsState, postsDispatch } = useContext(PostsContext);

  let [closed, setclosed] = useState(false);
  let usePopup = {
    closed,
    setclosed
  }

  useEffect(
    () => {
      GetUserAPI(dispatch);
      GetPostsAPI (postsDispatch)
    },[]
    )
  
  const iconStyles = {
    width: 25,
    height: 25, 
    cursor: "pointer",
    filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg)",
    }

	const linkedinAuth = () => {
		window.open(`http://localhost:8000/auth/linkedin/callback`, "_self");
	};

  return (
    <section className="relative items-center bg-gray-900 p-5 rounded-lg my-2 w-full">
    {
      !userState.user.error && <button onClick={()=> setclosed(!closed)} className='absolute flex gap-1 m-2 top-1 left-2 capitalize hover:underline hover:text-rose-800 md:text-4xl text-2xl'>post<BiMessageAdd /></button>
    }
      <div className="text-center">
        <h2 className="md:mb-4 md:text-4xl tracking-tight font-extrabold text-white">Add Endorsement, share Success</h2>
          <div className='flex gap-5 justify-center items-center' onClick={linkedinAuth}>
            <img src = {Linkedin} style={iconStyles} alt='Linkedin'/>
            {
              userState.user.error
              ?
              <h1 className="font-light cursor-pointer md:text-xl text-gray-400">LinkedIn <p className='inline-block text-red'>Sign-In</p> Required. Ensure credibility.</h1>
              :
              <h1 className="font-light cursor-pointer md:text-xl text-gray-400">Welcome <p className='inline-block text-yellow'>{userState.user.user.displayName}</p> Kindly add your endorsement </h1>
            }
          </div>
      </div> 

      <div className='flex w-full gap-3 my-5 justify-center flex-wrap'>
        {
          postsState.loading?
          <p>Loading...</p>
          :
          !postsState.loading && postsState.posts.map(
            post => <Posts key={post._id} photo={post.photo} name={post.name} email={post.email} post={post.post}/>
          )
        }
      </div>

      {
        usePopup.closed && 
        <Popups openPopup = { usePopup }>
          <Additem/>
        </Popups>
      }

    </section>
  )
}

export default Testimonials;