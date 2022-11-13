import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {coldarkDark} from 'react-syntax-highlighter/dist/esm/styles/prism'

function MarkdownSection(props) {
    console.log()

    return (
        <ReactMarkdown
            children={props.children.toString()}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')

                    console.log(match[1])

                    return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            language={match[1]}
                            style={coldarkDark} 
                            PreTag="div"
                            showLineNumbers
                            {...props}
                        />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                }
            }}
        />
    )
}

export {
    MarkdownSection
}