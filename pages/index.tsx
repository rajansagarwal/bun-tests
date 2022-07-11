import styles from '../styles/Index.module.css'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export default function Input() {

    const [search, setSearch] = useState(null)
    const [random, setRandom]   = useState<any>()
    const phrases = ["around here, it's always summer", "build the change you wish to see", "hacker at heart", "empower with expression", "think, build, ship", "LUNAtic"]

    const selectPhrase = () => {
        setRandom(phrases[Math.floor((Math.random() * phrases.length))])
        console.log(phrases[Math.floor((Math.random() * phrases.length))])
    }

    useEffect(() => {
        selectPhrase();
        }, [])


  function handleClick() {
       window.location.reload();
    }
 {/*
    function handleClickNews() {
        window.location.href = "https://www.google.com/search?q=" + search + '&sxsrf=AOaemvIiKfd8dkMCkRXEhoZm3rjXFGMzCQ:1631931499445&source=lnms&tbm=nws&sa=X&ved=2ahUKEwikm8nKuofzAhUPElkFHVshBFUQ_AUoAnoECAEQBA&biw=1295&bih=697&dpr=2';
    }

    function handleClickVideos() {
        window.location.href = "https://www.youtube.com/results?search_query=" + search;
    } */}

    return (
        <main className={styles.main}>
            <div className={styles.navbar}>
          <ul>
            <li className={styles.special}><b>rajan agarwal ~ <span className="faded">{random}</span></b></li>
          </ul>
          
          <div className={styles.searching}>
            <input className={styles.input} onKeyPress={event => { if (event.key === 'Enter') { handleClick(); }
        }} onChange={ (event) => setSearch(event.target.value) } placeholder='search' />

    </div>
        </div>

     <div className={styles.imagegrid}>
                <div className={styles.column}>
                    <img src="https://file.heyrajan.com/staywoke2.jpg" className={styles.portfolio} id="x-mobile"/>
                    <img src="https://file.heyrajan.com/monument.png" className={styles.portfolio} id="x-mobile"/>
                </div>
                
                <div className={styles.column}>
                    <img src="https://file.heyrajan.com/i-profile.jpg" className={styles.portfolio2}/>
                </div>
                
                <div className={styles.column}>
                    <img src="https://file.heyrajan.com/clock-horizontal.png" className={styles.portfolio} id="x-mobile"/>
                    <img src="https://file.heyrajan.com/ori3.png" className={styles.portfolio} id="x-mobile"/>
                </div>
    </div>


        <div className={styles.twopane}>
    
        <div className={styles.maincontent}>
        <div className={styles.header}><h3>hey, i&#39;m rajan 🌱</h3></div>
        <div className={styles.text}><p>i&#39;m a 17 year old developer, designer and author building tools for thought.</p></div>
        <div className={styles.text}><p>currently, i'm a <b>Software Engineer Intern</b> at <b>Camp Social 🏕</b>, the social protocol that incentivizes human interconnectedness that communities were built to enable.</p></div>
        <div className={styles.text}><p>on the side, i&#39;m currently building a digital home for communities, using algorithmic evolutionary game theory to design idyllic organ systems and research neurodegeneration from emerging pathogens with Cobweb.</p></div>
        <div className={styles.text}><p>within my community, i lead our school&#39;s business and coding clubs, where i aim to inspire teens to turn ideations into creations. i&#39;m an author, and i&#39;m currently working on a second novel, <i>The Platonist</i>, which takes a dystopian perspective of mental health funding. in the past, i&#39;ve run 160km for indigenous reconciliation awareness, and i&#39;m currently training for a half-marathon.</p></div>
        <div className={styles.text}><p>you can find me on the internet hackin' or scrolling endlessly on the bird app.</p></div>
        <div className={styles.text}><p>welcome to my humble abode, <br/>make yourself at home</p></div>
        <br/><br/>
        <div className={styles.header}><h3>my story.</h3></div>
        <div className={styles.text}><p>i recall my very first few machines. they didn&#39;t do much, some moved around slowly with blinking lights, others could water through pipes around and a few moved a few motors to make something that I was proud of.</p></div>
       
       <br/>
    <div className={styles.oogabooga}>
        <div>
        <img src="https://file.heyrajan.com/staywoke2.jpg" className={styles.imagegallery} id="x-mobile"/>
        <p className={styles.time}>date</p>
        <p className={styles.text}>date</p>
        </div>

        <div>
        <img src="https://file.heyrajan.com/staywoke2.jpg" className={styles.imagegallery} id="x-mobile"/>
        <p className={styles.time}>date</p>
        <p className={styles.text}>date</p>
        </div>
        
</div> 
</div> 
        
        <div className={styles.updates}>

        <div className={styles.header}><p>a few things i&#39;ve made</p></div>
            <div className={styles.update}>
                <div className={styles.time}><p>20/05/2022</p></div>
                <div className={styles.text}><p>aaa {search}</p></div>
            </div>
            
            <div className={styles.update}>
                <div className={styles.time}><p>20/05/2022</p></div>
                <div className={styles.text}><p>font size with</p></div>
            </div>

            <br/><br/>
          
        <div className={styles.header}><p>stream</p></div>
            <div className={styles.update}>
                <div className={styles.time}><p>20/05/2022</p></div>
                <div className={styles.text}><p>aaa {search}</p></div>
            </div>
            
            <div className={styles.update}>
                <div className={styles.time}><p>20/05/2022</p></div>
                <div className={styles.text}><p>font size with</p></div>
            </div>
      </div>
      </div>
      </main>
    )
}