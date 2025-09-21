import styles from './RacketDescription.module.css'

interface RacketDescriptionProps {
  brand: string;
  name: string;
  description: string;
}

export const RacketDescription = ({ brand, name, description }: RacketDescriptionProps) => {

  return (
    <div className={styles.racketDescriptionContainer}>
      <div className={styles.brand}>{brand}</div>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
