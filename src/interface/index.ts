export type StateProps = {
    results: boolean[]
    questions: QuestionsProps[]
    selected: boolean
}

export type QuestionsProps = {
    image: string
    title: string
    description: string
    answer: number
    alternatives: string[]
}