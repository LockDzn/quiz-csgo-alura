import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'

import { resultsUpdate } from '../store/actions/results'
import { optionsSelectedReset } from '../store/actions/options/selected'

import OptionsBox from '../components/OptionsBox'
import ShowResults from '../components/ShowResults'
import AluraLogo from '../assets/logoAlura.svg'
import { Container, Box } from '../styles/pages/Home'

import { StateProps } from '../interface'

const Quiz: React.FC = () => {

    const [questionIndex, setQuestionIndex] = useState<number>(0)
    const [showResults, setShowResults] = useState<boolean>(false)

    const questions = useSelector((state: StateProps) => state.questions)
    const selected = useSelector((state: StateProps) => state.selected)
    const dispatch = useDispatch()

    const handleSwitchQuestion = async (e) => {
        e.preventDefault();

        if(questions[questionIndex].answer == selected) {
            dispatch(resultsUpdate(true))
        } else {
            dispatch(resultsUpdate(false))
        }

        dispatch(optionsSelectedReset())

        if(questions[questionIndex+1]){
            setQuestionIndex(questionIndex+1)
        } else {
            setShowResults(true)
        }
    }

    console.log(selected)

    return (
        <Container>
            <Head>
                <title>
                    { showResults ? 
                            `Quiz | Resultado`
                            : 
                            `Quiz | Pergunta ${questionIndex+1} de ${questions.length}`
                        }
                </title>
            </Head>

            <AluraLogo />
            <Box>
                <header>
                    <h2>
                        { showResults ? 
                            `Resultado`
                            : 
                            `Pergunta ${questionIndex+1} de ${questions.length}`
                        }
                    </h2>
                </header>

                <form action="">
                    <div className="content">
                        {showResults ? (
                            <ShowResults />
                        ) : (
                            <>
                                <img src={questions[questionIndex].image} alt=""/>
                                <h3>{questions[questionIndex].title}</h3>
                                <p>{questions[questionIndex].description}</p>
                                
                                <OptionsBox
                                    options={questions[questionIndex].alternatives}
                                />
                                <button 
                                    onClick={(e) => handleSwitchQuestion(e)} 
                                    disabled={selected == -1 ? true : false}>
                                    Confirmar
                                </button>
                            </>
                        )}
                    </div>
                </form>
            </Box>
        </Container>
    )
}

export default Quiz
