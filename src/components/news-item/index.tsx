import styles from './news.module.css';
import { Avatar } from '../../assets/images';

export const NewsItem = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className={styles.body}>
      <div className={styles.img_container}>
        <img src={image} style={{ objectFit: 'cover', width: "100%" }} />
      </div>
      <h2 className="text-left mt-8">{title}</h2>
      <span className='text-blue text-left ml-0 w-full flex items-center text-14 mt-6'>
        <img src={Avatar} height={21} width={21} alt="avatar-img" className="ml-0 text-left" />
        <span className="ml-3 w-full">Alexander Samokhin
          <span className="text-gray2 ml-0 text-left">- July 06, 2018</span>
        </span>
      </span>
    </div>
  )
}
