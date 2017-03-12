// [{
//     id: '/#5321t321a',
//     name: 
// }]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

// var userList = new Array();

// const addUser = (id, name, room) => {
    
//     userList.push({id, name, room});
// }

// mpdules.export = {
//     addUser
// }

// class Person {
//     constructor (name) {
//         this.name = name;
//     }

//     getUserDescription () {
//         return `${this.name} is`
//     }
// }

class Users {
    constructor () {
        this.users = [];
    }
    
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser (id) {
        // return removed user
        var removed;
        this.users = this.users.filter((user) => {
            if (user.id !== id) {
                return true;
            }

            removed = user;
            return false;
        });
        return removed;
    }

    getUser (id) {
        return this.users.find((user) => user.id === id);
    }

    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {Users}