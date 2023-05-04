import React from "react"
import "./App.css"
import { Routing } from "./components/common/Routing"
import { AdsState } from "./context/adsContext/AdsState"
import { AuthState } from "./context/authContext/AuthState"
import { BlogState } from "./context/blogContext/BlogState"
import { NoticeState } from "./context/noticeContext/NoticeState"
import { PostState } from "./context/postContext/PostState"
import { UserState } from "./context/userContext/UserState"

export const App = () => {
  return (
    <AuthState>
      <UserState>
          <PostState>
            <BlogState>
              <AdsState>
                <NoticeState>
                  <Routing />
                </NoticeState>
              </AdsState>
            </BlogState>
          </PostState>
      </UserState>
    </AuthState>
  )
}
