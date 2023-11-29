import React, { useEffect, useState } from "react";
import styles from './Board.module.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { fetchPosts, createPost, deletePost } from "../../redux/blogSlice";
import { FaTrashCan } from "react-icons/fa6";

interface CardType {
    id: string;
    content: string;
  }
  
  interface ColumnType {
    id: string;
    title: string;
    cards: CardType[];
  }

const Board: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [element, setElement] = useState<string>("");

  const handleDelete = (post: any) => {
    dispatch(
      deletePost(post.id)
    )
  }

    const dispatch = useAppDispatch();
  const posts = useSelector((state: any) => {

    return state.blog.posts;
  });

  const loading = useSelector((state: any) => {
    return state.blog.loading
  })

  const error = useSelector((state: any) => {
    return state.blog.error
  })

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const handleCreatePost = () => {
    dispatch(
      createPost({
        title,
        element
      })
    )

    setTitle("");
    setElement("");
  }
    
      return (

          <div className={styles.tasks}>
            {loading ? <h3>Loading...</h3> : null}
            {
              !loading && posts 
              ? posts.map((post: any) => {
                return (
                  <div>
                    <div key={post.id} className={styles.started}>
                    <h2 className={styles.name}>{post.title} <div className={styles.delete} onClick={handleDelete}><FaTrashCan /></div></h2>
                    <Link to={'/comments'}><button className={styles.content}>{post.element}</button></Link>
                    <button className={styles.addNew}>Add New</button>
                  </div>
                  </div>
                )
              })
            : null}
            <div className={styles.addBoard}>
            <div>
                    <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Title"
                    value={title}
                    className={styles.input} />
                    </div>
                    <div>
                    <input
                    onChange={(e) => setElement(e.target.value)}
                    type="text"
                    placeholder="Element"
                    value={element}
                    className={styles.input} />
                    </div>
                    <div>
                      <button onClick={handleCreatePost} className={styles.addNewBoard}>Create Board</button>
                    </div>
            </div>
                  </div>
      );
}

export default Board;