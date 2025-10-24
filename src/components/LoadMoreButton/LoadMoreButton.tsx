import styles from './LoadMoreButton.module.css'

interface LoadMoreButtonProps {
  isLoadingMore: boolean;
  onClick: () => void;
}

export const LoadMoreButton = ({ isLoadingMore, onClick }: LoadMoreButtonProps) => {
  return <div className={styles.loadMoreButtonContainer}>
    <button className={styles.button} onClick={onClick} disabled={isLoadingMore}>Load more</button>
  </div>
}
