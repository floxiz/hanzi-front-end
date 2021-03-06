import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import withApollo from '../utility/withApollo';
import Spinner from '../components/spinner/Spinner';
import {useEffect, useState, useRef} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { valueFromAST } from 'graphql';
import {useFindCharQuery} from '../generated/graphql';
import Modal from '../components/UI/Modal';

const variants = {
visible:{ display:'block',y:0, opacity:1, transition:{duration:0.3, delay:0.5, type:'tween'}},
hidden:{display:'none',y:400,opacity:0}
}

const Results:React.FC<{openHandler:()=>void, isOpen:boolean}>  = ({openHandler,isOpen})=> {
const itemRef = useRef([]);

const items = isOpen ? <div></div> : (<><div className={styles.main__box__results__item}>
  <div className={styles.main__box__results__item__text}>
  <span>中文</span>
  <span>zhongwen</span>
  <span>Chinese Languag  kjkds jdkjd kjkds eklk 
  ddadaddd anklnk lnkl ddgfgdf hdhfd hgdg</span>
  </div>
  </div>
  
  <div className={styles.main__box__results__item}>
  <div className={styles.main__box__results__item__text}>
  <span>中文</span>
  <span>zhongwen</span>
  <span>Chinese Languag  kjkds jdkjd kjkds eklk 
  ddadaddd anklnk lnkl ddgfgdf hdhfd hgdg</span>
  </div>
  </div>
  
  <div className={styles.main__box__results__item} onClick={openHandler}>
  <div className={styles.main__box__results__item__text}>
  <span>中文</span>
  <span>zhongwen</span>
  <span>Chinese Languag  kjkds jdkjd kjkds eklk 
  ddadaddd anklnk lnkl ddgfgdf hdhfd hgdg</span>
  </div>
  </div></>)

return items;
   
}


const Home =  ()=>  {

  const {data,loading} = useFindCharQuery({variables:{char:['z'],options:{characters:true,sentences:true,words:true}}})
  const inputRef = useRef<HTMLInputElement|null>(null);
  const [state,setState] = useState<string|null>(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (state) {
     setTimeout(()=>inputRef.current!.focus(),1000) ;
    }
  }, [state])

 const dataResults = data && data!.findChar.map((v)=><div className={`${styles[`main__box__results__item--${v.__typename}`]} ${styles.main__box__results__item}`}>{[v.char_detail.character,v.char_detail.meaning,v.char_detail.pinyin]}</div>)
 const openHandler = () => setIsOpen(!isOpen);
 
  return (

    <div className={styles.container}>
      <Head>
        <title>Hanzi</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Varela&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Share+Tech&display=swap" rel="stylesheet" />    
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      </Head>
      <main className={styles.main}>
      <AnimatePresence >
        {state===null &&  
      <motion.div exit={{opacity:0,width:0,height:0,transition:{velocity:20, duration:0.4,delay:0.3,type:'tween'}}} className={styles.main__box}>
      <motion.div exit={{opacity:0,transition:{ velocity:50, type:'tween'}}} className={styles.main__intro}>
          <h1>Hanzi</h1>
          <p>A comprehensive Chinese dictionary for English translations of common Chinese words and phrases.</p>
        </motion.div>
      <motion.div  exit={{opacity:0,transition:{duration:0.2,type:'tween'}}} className={styles.search}>
      <input placeholder =" " className={styles.search__input} onKeyPress={(e)=>{if(e.key==='Enter')setState(e.currentTarget.value)}} type="search" id="search" name="search"/>
      <label className={styles.search__label} htmlFor="search">Search</label>
      </motion.div> 
</motion.div>

}
</AnimatePresence>
{typeof state === 'string' &&
      <motion.div  className={styles['main__box--open']} variants={variants} initial='hidden' animate='visible'>
      <motion.div initial="" animate="" className={styles['search--box-open']}>
      <input placeholder =" Search" value={state} className={[styles.search__input,styles.search__input__open].join(' ')} onChange={(e)=>setState(e.currentTarget.value)} type="search" id="search" name="search" ref={inputRef} autoFocus  />
      </motion.div> 
      <div className={styles.main__box__results}> 
      
<div className={styles.main__box__results__nav}> 
      <h1>Characters</h1> <h1>Words</h1> <h1>Sentences</h1> 
      </div>
   
  
<Results openHandler={openHandler} isOpen={isOpen}/>


<Modal showModal={isOpen} setModal={()=>setIsOpen(!isOpen)} />

      </div> 
      </motion.div>
}
  </main>
  </div>
  )
}

  export default withApollo({ ssr: true })(Home);

