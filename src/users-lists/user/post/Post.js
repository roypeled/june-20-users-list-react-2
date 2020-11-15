import { useState, useEffect, useContext } from "react"
import { AppContext } from "../../../AppContext";
import { Comments } from "../../comments/Comments";

async function fetchPosts(userId) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const json = await result.json();
    return json;
}

export function Post() {

    const [posts, setPost] = useState(null);
    const context = useContext(AppContext);

    useEffect(() => {
        const get = async () => {
            setPost(await fetchPosts(context.selectedUser));
        }

        get();
    }, [context.selectedUser]);

    if(!posts || !context.selectedUser) return <div>Loading post...</div>;

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