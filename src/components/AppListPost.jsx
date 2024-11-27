import { useEffect, useState } from 'react'
import Card from './Card';
export default function AppListPost() {
    /*  const article = [
 
     ] */
    const [postsData, setPostsData] = useState([])
    /* const [titles, setTitle] = useState(article) */


    const handleTrashClick = (postId) => {
        // Rimuovi il post dalla lista
        const updatedPosts = postsData.filter(post => post.id !== postId);
        setPostsData(updatedPosts);
    };



    function fetchData(url = "http://localhost:3001/posts") {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPostsData(data)
            })
            .catch(error => {
                console.error('Si è verificato un errore:', error);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <section className='posts'>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 m-3">
                        {
                            postsData.data &&

                            postsData.data.map((post) => (

                                <div className="col" key={post.id}>
                                    <Card post={post} onTrashClick={handleTrashClick}></Card>
                                </div>

                            ))

                        }
                    </div>
                </div>
            </section>
        </>
    )
}