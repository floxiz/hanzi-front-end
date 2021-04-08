import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import withApollo from '../utility/withApollo';
import Spinner from '../components/spinner/Spinner';
import {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const variants = {
visible:{border:'3px solid #8b9fc4', borderRadius:10 , transition:{type:'spring', stiffness:40, delay:5}}
}

const searchVariant = {


} 




const Home =  () =>  {
  
  useEffect(() => {
    const debounce = setTimeout(() => {
    
  }, 2000);
     
    return () => {
      clearTimeout()
    }
  }, [])

  const [state,setState] = useState(false);
 
  const inputHandler = () => {


  }
 
  return (

    <div className={styles.container}>
      <Head>
        <title>Hanzi</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Varela&display=swap" rel="stylesheet" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      </Head>


      <main className={styles.main}>
      <AnimatePresence >
        {!state &&  
      <motion.div exit={{opacity:0,width:0,height:0,transition:{velocity:20, duration:0.4,delay:0.4,type:'tween'}}} className={styles.main__box}>
      <motion.div exit={{opacity:0,transition:{ velocity:50, type:'tween'}}} className={styles.main__intro}>
          <h1>Hanzi: A comprehensive Chinese dictionary</h1>
        </motion.div>
      <motion.div  exit={{opacity:0,transition:{duration:0.2,type:'tween'}}} className={styles.search}>
      <input placeholder =" " className={styles.search__input} onChange={()=>setState(true)} type="search" id="search" name="search"/>
      <label className={styles.search__label} htmlFor="search">Search</label>
      </motion.div> 
</motion.div>

}
</AnimatePresence>
{state &&
      <motion.div  className={[styles.main__box, styles['main__box--open']].join(' ')} variants={variants} initial="hidden" animate={state && 'visible'}>
      <motion.div initial="" animate="" className={styles['search--box-open']}>
      <input placeholder =" " className={styles.search__input} onChange={()=>setState(true)} type="search" id="search" name="search"/>
      <label className={styles['search__label--box-open']} htmlFor="search">Search</label>
      </motion.div> 
     

      <div className={styles.main__box__results}> 
      <motion.div className={`${styles['main__box__results__item--char']} ${styles.main__box__results__item}`}>中 meaning:Middle pinyin:Zhong </motion.div>
      <motion.div className={`${styles['main__box__results__item--word']} ${styles.main__box__results__item}`}>中 meaning:Middle pinyin:Zhong </motion.div>
      <motion.div className={`${styles['main__box__results__item--sent']} ${styles.main__box__results__item}`}>中 meaning:Middle pinyin:Zhong </motion.div>
      <motion.div className={`${styles['main__box__results__item--char']} ${styles.main__box__results__item}`}>中 meaning:Middle pinyin:Zhong </motion.div>
      <motion.div className={`${styles['main__box__results__item--word']} ${styles.main__box__results__item}`}>中 meaning:Middle pinyin:Zhong </motion.div>
      <motion.div className={`${styles['main__box__results__item--sent']} ${styles.main__box__results__item}`}>中 meaning:Middle pinyin:Zhong </motion.div>
      <motion.div className={`${styles['main__box__results__item--char']} ${styles.main__box__results__item}`}>中 meaning:Middle pinyin:Zhong </motion.div>
      <motion.div className={`${styles['main__box__results__item--word']} ${styles.main__box__results__item}`}>中 meaning:Middle pinyin:Zhong </motion.div>
      <motion.div className={`${styles['main__box__results__item--sent']} ${styles.main__box__results__item}`}>中 meaning:Middle pinyin:Zhong </motion.div>
      <motion.div className={`${styles['main__box__results__item--char']} ${styles.main__box__results__item}`}>中 meaning:Middle pinyin:Zhong </motion.div>
      <motion.div className={`${styles['main__box__results__item--word']} ${styles.main__box__results__item}`}>中 meaning:Middle pinyin:Zhong </motion.div>
      <motion.div className={`${styles['main__box__results__item--sent']} ${styles.main__box__results__item}`}>中 meaning:Middle pinyin:Zhong </motion.div>
      </div>
      </motion.div>

}




      </main>
    </div>
  )
}

  export default withApollo({ ssr: true })(Home);

