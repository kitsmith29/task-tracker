import React from 'react'
import { render, screen } from "@testing-library/react"
import { Provider } from 'react-redux'
import * as redux from 'react-redux'
import { store } from '../../state/store'
import "@testing-library/jest-dom/extend-expect"
import TaskList from '../TaskList'


const renderComponent = () => render(
    <Provider store={store()}>
        <TaskList/>
    </Provider>
)

test("list renders with correct text in correct order", async () => {
    const testTasks = [{"id":1, "text":'Do this'}, {"id":2, "text":'Do that'}]
    jest
        .spyOn(redux, 'useSelector')
        .mockImplementation(() => ( testTasks ))
    renderComponent()
    const taskList = screen.getAllByTestId('task').map(li => li.textContent)
    expect(taskList).toEqual(["Do this", "Do that"])
})

test("empty task list renders with 'No tasks' string", async () => {
    const testTasks = []
    jest
        .spyOn(redux, 'useSelector')
        .mockImplementation((callback) => callback({ testTasks }))
    renderComponent()
    expect(screen.getByText(/No tasks/i)).toBeInTheDocument()
})