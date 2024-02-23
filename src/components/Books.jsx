import { useState } from "react";
import { books } from "../constants/mockData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";

import styles from "./Books.module.css"
function Books() {
    const [liked, setLiked] = useState([]);

    const handleLikedList = (book, status) => {
        if(status) {
            setLiked((liked) => [... liked, book]);
        } else {
            const newLikedList = liked.filter((i) => i.id !== book.id);
            setLiked(newLikedList);
        }
    }
  return (
    <div className={styles.container}>
        <div className={styles.cards}>
            {books.map((book) => (
                <BookCard key={book.id} data={book} handleLikedList={handleLikedList} />
            ))}
        </div> 
        {!!liked.length && (
            <div className={styles.favorite}>
                <h4>Favorite</h4>
                {liked.map(book => <SideCard key={book.id} data={book} />)}
            </div>
        )}
    </div>
  )
}

export default Books