import { Snackbar, SnackbarContent } from "@material-ui/core"
import React, { useContext, useEffect, useState } from "react"
import { BrowserRouter, Switch } from "react-router-dom"
import { AuthContext } from "../../context/authContext/authContext"
import { PrivateRoute } from "../auth/PrivateRoute"
import { SimpleRoute } from "../auth/SimpleRoute"
import { Loading } from "../Loading_Backdrop/Loading"
import { Login } from "../Login/Login"
import { Signup } from "../Login/Signup"
import { Post } from "../pages/Home/Post/Post"
import { Blog } from "../pages/Home/Blog/Blog"
import { Profile } from "../pages/Profile/Profile"
import { JobsAndPlacements } from "../pages/Home/JobsAndPlacements/JobsAndPlacements"
import { Ads } from "../pages/Home/Ads/Ads"

export const Routing = () => {
  const context = useContext(AuthContext)

  const [responseMsg, setResponseMsg] = useState({
    successStatus: false,
    errorStatus: false,
    msg: "",
  })
  const handleClose = () => {
    setResponseMsg({
      ...responseMsg,
      successStatus: false,
      errorStatus: false,
      msg: "",
    })
  }
  const showResponseMsg = () => {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={responseMsg.errorStatus || responseMsg.successStatus}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <SnackbarContent
          message={responseMsg.msg}
          style={{
            background: "#ff7961",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </Snackbar>
    )
  }

  useEffect(() => {
    if (context.error) {
      setResponseMsg({
        errorStatus: true,
        msg: context.error,
      })
    }
  }, [context])

  return (
    <>
      {responseMsg.errorStatus || responseMsg.successStatus
        ? showResponseMsg()
        : null}
      {context.loading && <Loading />}
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Post} />
          <PrivateRoute
            exact
            path="/jobs-and-placements"
            component={JobsAndPlacements}
          />
          <PrivateRoute exact path="/ads" component={Ads} />
          <PrivateRoute exact path="/blogs" component={Blog} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <SimpleRoute exact path="/signup" component={Signup} />
          <SimpleRoute exact path="/signin" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
