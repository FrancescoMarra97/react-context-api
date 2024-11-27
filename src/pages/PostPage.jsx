import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";


export default function PostPage() {
    const navigate = useNavigate()
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const { posts } = useContext(GlobalContext)
    const url = `http://localhost:3001/posts/${slug}`
    console.log(url);

    /* useEffect(
        () => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    const keys = Object.keys(data);
                    if (keys.includes('error')) {
                        navigate('/404');
                    } else {
                        setPost(data);
                    }
                })
                .catch(() => {
                    navigate('/404');
                });
        }, [slug]);
 */
    const selectedPost = posts.find(post => post.slug === slug);
    if (!selectedPost) {
        navigate('/404');
        return null;
    }
    return (
        <div>
            <img src={`http://localhost:3001/imgs/posts/${selectedPost.image}`} />
            <h1>{selectedPost.title}</h1>
            <p>{selectedPost.content}</p>
            <ul>
                {selectedPost.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </div>
    )
}