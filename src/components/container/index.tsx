import styles from './container.module.css';
import classNames from 'classnames';

export const Container = ({children, className = ""}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={classNames(styles.body, className)}>{children}</div>
  )
}
