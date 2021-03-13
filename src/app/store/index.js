import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { defaultSate } from '../../server/defaultState';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
import * as sagas from './sagas.mock';
import * as mutations from './mutations';

export const store = createStore(
    combineReducers({
        tasks(tasks = defaultSate.tasks, action){
            switch(action.type){
                case mutations.CREATE_TASK:
                    //console.log(action);
                    return [...tasks, {
                        id:action.taskID,
                        name:"New Task",
                        group:action.groupID,
                        owner:action.ownerID,
                        isComplete: false
                    }]
                case mutations.SET_TASK_COMPLETE:
                    return tasks.map(task =>{
                        return(task.id === action.taskID) ? 
                        {...task,isComplete:action.isComplete}: task;
                    });
                case mutations.SET_TASK_NAME:
                    return tasks.map(task =>{
                        return(task.id === action.taskID) ?
                        {...task, name:action.name}: task;
                    });
                case mutations.SET_TASK_GROUP:
                    return tasks.map(task => {
                        return(task.id === action.taskID) ?
                        {...task, group:action.group}: task;
                    } )            
            }
            return tasks;
        },
        comments(comments = defaultSate.comments){
            return comments;
        },
        groups(groups = defaultSate.groups){
            return groups;
        },
        users(users = defaultSate.users){
            return users;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga])
}