import React, { useRef, useState } from 'react'
import "../style/createpost.scss"
import { usePost } from '../hook/usePost'
import { useNavigate } from 'react-router'


const CreatePost = () => {

  const [caption, setCaption] = useState("")

  const postImageInputFieldRef = useRef(null)

  const navigate = useNavigate()

  const {loading, handleCreatePost} = usePost()

  async function handleSubmit(e){
    e.preventDefault()

    const file = postImageInputFieldRef.current.files[0]

    await handleCreatePost(file.caption)

    navigate("/")

  }

  if(loading){
    return (
      <main>
        <h1>creating post</h1>
      </main>
    )
  }


  return (
    <main>
      <div className="form-container">
        <h1>Create post</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="postImage"  className='post-image-label' >Select image</label>
           <input ref={postImageInputFieldRef} hidden type="file" name='postImage'  id='postImage'/>  {/**ek se jda file ko select krne k liye  (multiple likhna h) */}
          <input
          value={caption}
          onChange={(e) => {setCaption(e.target.value)}}
           type="text" name='caption' placeholder='Enter caption' id='caption' />
          <button className='button primary-button'>create post</button>
        </form>
      </div>
    </main>
  )
}

export default CreatePost