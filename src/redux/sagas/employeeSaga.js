import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* employeeSaga() {
    yield takeEvery('FETCH_EMPLOYEES', fetchEmployees)
    yield takeEvery('ADD_ADMIN', addAdmin)
    yield takeLatest('REMOVE_ADMIN', removeAdmin)
    yield takeLatest('REMOVE_EMPLOYEE', removeEmployee)

}

// give admin rights
function* addAdmin(action) {
    try {
        yield axios.put('/api/user/setAdmin', action.payload);
        const newAction = { type: 'FETCH_EMPLOYEES' };
        yield put(newAction);
    } catch (error) {
        console.log('Add admin rights request failed', error);
    }
};

//fetch all users with employee or admin
function* fetchEmployees(action) {
    try {
        const responseFromServer = yield axios.get('/api/user/employee');
        const nextAction = { type: 'SET_EMPLOYEES', payload: responseFromServer.data };
        yield put(nextAction);
    } catch (error) {
        console.log('Fetch employee request failed', error);
    }
};

// remove admin rights
function* removeAdmin(action) {
    try {
        yield axios.put(`api/user/removeAdmin`, action.payload)
        const nextAction = { type: 'FETCH_EMPLOYEES', };
        yield put(nextAction);
    } catch (error) {
        console.log('remove admin rights request failed', error);
    }
};

// remove all employee and admin rights
function* removeEmployee(action) {
    try {
        yield axios.put(`api/user/removeEmployee`);
        let nextAction = { type: 'FETCH_EMPLOYEES' };
        yield put(nextAction);
    } catch (error) {
        console.log('Remove all employee rights request failed', error);
    }
};

export default employeeSaga;