import { PropsWithChildren } from "react"

import './SimpleCodeSection.css';

function SimpleCodeSection(props: PropsWithChildren) {
    return (<>
        <div className="simple-code-section">
            {props.children}
        </div>
    </>)
}

export { SimpleCodeSection }