import { useState, useEffect, useContext } from "react"
import { AppContext } from "../../../AppContext";
import { Comments } from "../../comments/Comments";
import { useParams } from "react-router-dom";

async function fetchPosts(userId) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const json = await result.json();
    return json;
}

export function Post() {

    const [posts, setPost] = useState(null);
    const context = useContext(AppContext);
    const params = useParams();

    useEffect(() => {
        const get = async () => {
            setPost(await fetchPosts(params.userId));
        }

        get();
    }, [params.userId]);

    if(!posts || !params.userId) return <div>Loading post...</div>;

    return <div className="user-post">
        { 
        posts.map(post => <article>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={() => context.setSelectedPost(post.id) }>Show comments</button>
        </article>) 
        }
    </div>
}