import { useContext, useState, useEffect } from "react"
import { AppContext } from "../../AppContext"
import { useParams } from "react-router-dom";

async function fetchComments(postId){
    const result = await fetch(`https://jsonplaceholder.typicode.com/post/${postId}/comments`);
    const json = await result.json();
    return json;
}

export function Comments() {
    const [comments, setComments] = useState([]);
    const params = useParams()
    
    useEffect(() => {
        const get = async () => {
            setComments(await fetchComments(params.postId));
        }
        get();
    }, [params.postId]);

    return <div className="comments">
        {
            comments.map(comment => <p>{comment.body}</p>)
        }
    </div>
}