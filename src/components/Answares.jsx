import React, { useEffect, useState } from "react";
import { checkHeading,replaceHeading } from "./helper";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
const Answares = ({ ans,totalResult, index }) => {
    //console.log("Line Number:", index);
    const [heading, setHeading] =useState(false);
    const[answer, setAnswer] = useState (ans);
    useEffect(() => {
        if (checkHeading(ans)){
        // this line handle true and false
        setHeading(true)
        setAnswer(replaceHeading(ans))
        }
    }, [ans]);
 const renderer = {
    code({node,inline,className,children ,...props})
    {
        const match=/language-(\w+)/.exec(className || '')
        const child= Array.isArray(children)? children.join(''):
        String(children || '');
            return !inline && match ? (
                <SyntaxHighlighter
            {...props}
            children ={String(child).replace(/\n$/,'')}
            language={match[1]}
            style={dark}
            PreTag="div"
            />
        ):
        (
            <code {...props} className={className}>
                {child}
            </code>
        )}, strong({ children }) {
        return <strong className="text-lg block pt-2">{children}</strong>;
    } 
 }  
    return (
        <>     
        {
            index== 0 && totalResult >1 ?   
    <ReactMarkdown components={renderer}>{answer}</ReactMarkdown>
        : <ReactMarkdown components={renderer}>{answer}</ReactMarkdown>
        }
        </>
    );
}
export default Answares;