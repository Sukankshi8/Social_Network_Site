import {Grid, Button, Paper} from "@material-ui/core"
import React, { useContext, useState } from "react"
import BrokenImageIcon from "@material-ui/icons/BrokenImage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faFeather } from "@fortawesome/free-solid-svg-icons"
import { PostModal } from "../Modals/PostModal"
import { PostContext } from "../../../context/postContext/postContext"
import { BlogModal } from "../Modals/BlogModal"
import { BlogContext } from "../../../context/blogContext/BlogContext"
import { AdsContext } from "../../../context/adsContext/AdsContext"
import { AdsModal } from "../Modals/AdsModal"

export const InputBox = () => {
  const postContext = useContext(PostContext)
  const blogContext = useContext(BlogContext)
  const adsContext = useContext(AdsContext)
  const [showPost, setShowPost] = useState(false)
  const [showBlog, setShowBlog] = useState(false)
  const [showAds, setShowAds] = useState(false)
  const handleModalPost = () => {
    // console.log(showPost)
    setShowPost(!showPost)
  }
  const handleModalBlog = () => {
    // console.log(showBlog)
    setShowBlog(!showBlog)
  }
  const handleModalAds = () => {
    // console.log(showBlog)
    setShowAds(!showAds)
  }

  return (
    <>
      {showPost && (
        <PostModal
          show={showPost}
          handleModal={handleModalPost}
          postFunction={postContext.createPost}
          modalTitle="Create post"
          post={undefined}
        />
      )}
      {showBlog && (
        <BlogModal
          show={showBlog}
          handleModal={handleModalBlog}
          blogFunction={blogContext.createBlog}
          modalTitle="Write Blog"
          blog={undefined}
        />
      )}
      {showAds && (
        <AdsModal
          modalTitle="Create annoucements"
          show={showAds}
          adsFunction={adsContext.createAds}
          ads={undefined}
          handleModal={handleModalAds}
        />
      )}
      <Paper elevation={3} variant="elevation" className="p-3 mb-3">
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className="pt-2"
        >
          <Grid item>
            <Button
              onClick={handleModalPost}
              startIcon={<FontAwesomeIcon icon={faEdit} />}
            >
              Create Post
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={handleModalBlog}
              startIcon={<FontAwesomeIcon icon={faFeather} />}
            >
              Write Blog
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleModalAds} startIcon={<BrokenImageIcon />}>
              Post Announcement
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}
