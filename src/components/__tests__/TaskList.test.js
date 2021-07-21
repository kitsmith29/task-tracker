import React from 'react'
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import TaskList from '../TaskList'

test("list renders with correct text", () => {
    const tasks = [{id:1, text: "Do this"}, {id:2, text: "Do that"}]
    const { getAllByTestId } = render(<TaskList taskArray={tasks}/>)
    const taskList = getAllByTestId('task').map(li => li.textContent)
    expect(taskList).toEqual(['Do this', 'Do that'])
})

test("list renders with correct text in correct order", () => {
    const tasks = [{id:1, text: "Do this"}, {id:2, text: "Do that"}]
    const { getAllByTestId } = render(<TaskList taskArray={tasks}/>)
    const taskList = getAllByTestId('task').map(li => li.textContent)
    const taskString = tasks.map(t => t.text)
    expect(taskList).toEqual(taskString)
})

test("empty task list renders with 'No tasks' string", () => {
    const tasks = []
    const {getByText} = render(<TaskList taskArray={tasks}/>)
    expect(getByText(/No tasks/i)).toBeInTheDocument()
})