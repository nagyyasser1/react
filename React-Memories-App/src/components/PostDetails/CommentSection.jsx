import React, { useState, useRef, useEffect } from 'react'
import { Typography, TextField, Button } from '@material-ui/core/'
import useStyles from './styles'
import Axios from 'axios'
const url = 'http://localhost:5000'
const API = Axios.create({ baseURL: url })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`
  }
  return req
})

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'))
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState(post.comments ? post.comments : [])
  const classes = useStyles()
  const commentsRef = useRef()

  const handleComment = async () => {
    if (comment !== '') {
      try {
        const name = user?.result?.name
        const commentData = { info: `${name}: ${comment}` }
        const { data } = await API.patch(
          `posts/${post._id}/commentPost`,
          commentData,
        )
        setComments(data.comments)
        setComment('')
        commentsRef.current.scrollIntoView({ behavior: 'smooth' })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments.length &&
            comments.map((c, i) => (
              <Typography key={i} gutterBottom variant="subtitle1">
                <strong>{c.split(': ')[0]}</strong>:{c.split(':')[1]}
              </Typography>
            ))}
          <div ref={commentsRef} />
        </div>
        {user?.result?.name && (
          <div style={{ width: '70%' }}>
            <Typography gutterBottom variant="h6">
              Write a comment
            </Typography>
            <TextField
              fullWidth
              minRows={4}
              variant="outlined"
              label="Comment"
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <br />
            <Button
              style={{ marginTop: '10px' }}
              fullWidth
              disabled={!comment.length}
              color="primary"
              variant="contained"
              onClick={handleComment}
            >
              Comment
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentSection
