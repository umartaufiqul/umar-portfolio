import React from "react"
import {Route, Switch} from "react-router-dom"
import Introduction from "./Introduction"
import Project from "./Project"

export default function Content() {
    return(
        <div>
            <Switch>
                <Route path="/" component={Introduction} exact/>
                {/* <Route path="/about" component={About} /> */}
                <Route path="/project" component={Project} />
                {/* <Route path="/timeline" component={Timeline} /> */}
            </Switch>
        </div>
    )
}