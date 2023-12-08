import classes from './Accordian.module.css'
import React, { useState } from 'react'

interface AccordianProps {
    content: { question: string, answer: string }[];
}

const Accordian: React.FC<AccordianProps> = (props) => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(0);
    
    const toggleQuestionHandler = function (num: number) {
        if (activeQuestion !== num) setActiveQuestion(null);
        setActiveQuestion(num)
        console.log(num)
    }
    
    return (
        <ul className={classes.accordian}>
            {props.content.map((item: { question: string; answer: string;}, index: number) => {
                return (
                  <li
                        key={index}
                        // className={classes['question-active']}
                    className={
                      activeQuestion === index
                        ? `${classes['question-active']}`
                        : ``
                    }
                  >
                    <div
                      className={classes.question}
                      onClick={() => toggleQuestionHandler(index)}
                    >
                      <h2>{item.question}</h2>
                      <span
                        className={
                          activeQuestion === index
                            ? `${classes.plus} ${classes.expanded}`
                            : `${classes.plus}`
                        }
                      >
                        &nbsp;
                      </span>
                    </div>
                    <div
                      className={
                        activeQuestion === index
                          ? `${classes.answer} ${classes.active}`
                          : `${classes.answer}`
                      }
                    >
                      <p>{item.answer}</p>
                    </div>
                  </li>
                );
            })}
        </ul>
    )
}

export default Accordian
