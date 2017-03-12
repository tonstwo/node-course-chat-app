const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user1 = users.addUser('12345', 'Edward', 'room1');

        expect(user1.id).toBe('12345');
        expect(user1.name).toBe('Edward');
        expect(user1.room).toBe('room1');
        expect(users.users).toEqual([user1]);
    });

    it('should return names for Node Course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for React Course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jen']);
    });

    it('should remove user with specified id', () => {
        var removedUser = users.removeUser('1');
        expect(removedUser.id).toBe('1');
        expect(users.users.length).toBe(2);
    });

    it('should not remove any users', () => {
        var removedUser = users.removeUser('123');
        expect(users.users.length).toBe(3);
    });

    it('should get user with specified id', () => {
        var user = users.getUser('1');
        expect(user.id).toBe('1');
        expect(user.name).toBe('Mike');
    });

    it('should not return a user if id is invalid', () => {
        var user = users.getUser('123');
        expect(user).toNotExist();
    });
});