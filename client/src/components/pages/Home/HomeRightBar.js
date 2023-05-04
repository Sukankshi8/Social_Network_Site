import { Grid } from "@material-ui/core"
import React from "react"
import { Contacts } from "./Contacts"

export const HomeRightBar = () => {
  return (
    <div className="home-right-bar">
      <Grid container direction="column" justify="center">
        <Contacts />
      </Grid>
    </div>
  )
}
