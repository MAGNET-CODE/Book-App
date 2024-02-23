import styles from "./SearchBox.module.css"
import { LuSearch } from "react-icons/lu";
function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.searchBox}>
        <input 
            type="text" 
            placeholder="Search title" 
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button onClick={searchHandler}>
            <LuSearch />
        </button>
    </div>
  )
}

export default SearchBox