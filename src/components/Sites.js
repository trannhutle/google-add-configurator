import React from "react"
import { createStyles } from "@material-ui/core"


const useStyle = createStyles (theme =>  createStyles({

    paper: {
        background: "#253147",
        padding: theme.spacing(1)
      },
      textField: {
        backgroundColor: "#FFF",
        width: "100%",
        padding: theme.spacing(1)
      },
      icon: {
        width: "20px",
        "vertical-align": "middle"
      },
      textList: {
        fontSize: "0.3rem !important"
      },
      whiteText: {
        color: "#FFF"
      },
      marginVertical: {
        margin: "1em 0"
      }
}))

export function Sites(){

}

export default Site