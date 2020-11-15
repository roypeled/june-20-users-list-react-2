import { useContext, useState, useEffect } from "react"
import { AppContext } from "../../AppContext"

async function fetchComments(postId){
    const result = await fetch(`https://jsonplaceholder.typicode.com/post/${postId}/comments`);
    const json = await result.json();
    return json;
}

export function Comments() {
    const context = useContext(AppContext);
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        const get = async () => {
            setComments(await fetchComments(context.selectedPost));
        }
        get();
    }, [context.selectedPost]);

    return <div className="comments">
        {
            comments.map(comment => <p>{comment.body}</p>)
        }
    </div>
}