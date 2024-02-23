import styles from "./SideCard.module.css"

function SideCard({data: { title, image }}) { 
  return (
    <div className={styles.favoriteCard}>
        <img src={image} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default SideCard