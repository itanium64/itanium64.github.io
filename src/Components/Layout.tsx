import { PropsWithChildren } from "react"
import { Navbar } from "./Navbar"

function Layout(props: PropsWithChildren) {
    return (<>
        <Navbar />

        <div className='content-flex'>
            {props.children}
        </div>
    </>)
}

export {
    Layout
}