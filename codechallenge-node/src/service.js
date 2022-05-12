 
function get() {
    const personList = [
        {
            id: 1,
            name: 'alex',
            email: 'pando@hotmai.com',
            birthDate: '12-031991',
            address: {
              id: 0,
              street: 'cale salamanadxca',
              state: 'valencia',
              city: 'valencia',
              country: 'spain',
              zip: '33212'
            }
        }
    ]
    return personList;
}

function post(newUser) {
    
    return newUser
}

function putUser() {
    
    const personList = [
        {
            id: 1,
            name: 'alex',
            email: 'pando@hotmail.com',
            birthDate: '12-03-1991',
            address: {
                id: 0,
                street: 'cale salamanadxca',
                state: 'valencia',
                city: 'valencia',
                country: 'spain',
                zip: '33212'
            },
            id: 2,
            name: 'avlad',
            email: 'pas@hotmail.com',
            birthDate: '01-06-1991',
            address: {
                id: 0,
                street: 'cale gijon',
                state: 'valencia',
                city: 'valencia',
                country: 'spain',
                zip: '33212'
            }
        }
    ]
    return personList;
}

function getId() {
    const personList = [
        {
            id: 1,
            name: 'alex',
            email: 'pando@hotmail.com',
            birthDate: '12-03-1991',
            address: {
                id: 0,
                street: 'cale salamanadxca',
                state: 'valencia',
                city: 'valencia',
                country: 'spain',
                zip: '33212'
            },
            id: 2,
            name: 'avlad',
            email: 'pas@hotmail.com',
            birthDate: '01-06-1991',
            address: {
                id: 0,
                street: 'cale gijon',
                state: 'valencia',
                city: 'valencia',
                country: 'spain',
                zip: '33212'
            }
        }
    ]
    return personList;
}

function deleteUser() {
    const personList = [
        {
            id: 2,
            name: 'avlad',
            email: 'pas@hotmail.com',
            birthDate: '01-06-1991',
            address: {
                id: 0,
                street: 'cale gijon',
                state: 'valencia',
                city: 'valencia',
                country: 'spain',
                zip: '33212'
            }
        }
    ]
    return personList;
}

module.exports =  {
    get, post,getId, deleteUser, putUser
};