import React, { useState } from 'react'
import { FaqData } from './FaqData'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import styles from '../styles/FAQ.module.css'

const FaqAccordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#f88a2f', size: '20px' }}>
      <div className={styles.accordiansection}>
        <div className={styles.accordiancontainer}>
          {FaqData.map((item, index) => {
            return (
              <>
                <div className={styles.accordianwrapper} onClick={() => toggle(index)} key={index}>
                  <p>{item.question}</p>
                  <span  className=  "margin-right: 1.5rem">
                           {clicked === index ? <FiMinus /> : <FiPlus />}
                  </span>
                </div>
                {clicked === index ? (
                  <div className={styles.accordiandropdown}>
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default FaqAccordion;