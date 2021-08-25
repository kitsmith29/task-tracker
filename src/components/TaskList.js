import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles(() => ({
    list:{
        maxHeight: '100%',
        overflow: 'auto'
    }
}))

const TaskList = () => {

    const classes = useStyles()

    const taskList = useSelector((taskList) => taskList.tasks)

    if (!taskList || !taskList.length) {
        return <div>No tasks</div>
    }
    return (
        <List className={classes.list}>
            {taskList.map((task, id) => (
                <ListItem key={id}>
                    <ListItemText id={id} primary={task.text} data-testid='task'/>
                </ListItem>
            ))}
        </List>
    )
}

export default TaskList