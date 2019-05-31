import { login, logout } from '../../actions/auth'

test('should generate login action object', () => {
    const uid = '21b21b21g21gy34'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should generate logout action object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})