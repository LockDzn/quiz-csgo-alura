import  { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { StateProps } from '../interface'

const Results = styled.div`
    .questions {
        font-size: 1.1rem;
        font-weight: bold;
    }

    .answer {
        font-size: 1rem;
        display: inline;
        padding: 0.2rem;
        border-radius: 0.2rem;
        margin-left: 0.5rem;
    }

    .answer.correct {
        background: ${props => props.theme.colors.success}
    }

    .answer.wrong {
        background: ${props => props.theme.colors.wrong}
    }
`

const ShowResults: FunctionComponent = () => {

    const results = useSelector((state: StateProps) => state.results)
    const questions = useSelector((state: StateProps) => state.questions)

    console.log(results)

    return (
        <>
            {questions.map((question, index) => (
                <Results key={index}>
                    <p className="questions">
                        {question.title}
                        <span
                            className={`answer ${results[index] == true ? 'correct' : 'wrong'}`}
                        >
                            {results[index] == true ? 'Acertou!' : 'Errou!'}
                        </span>
                    </p>
                </Results>
            ))}
        </>
    )
}

export default ShowResults