import authReducer from '../../reducers/auth'

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'jh243hj243jh423hj'
    }
    const state = authReducer({}, action)
    expect(state.uid).toBe(action.uid)
})

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({
        uid: 'jh243hj243jh423hj'
    }, action)
    expect(state).toEqual({})
})