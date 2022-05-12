const servicios = require('./service');

function getUsers(req, res) {
  
    const personList = servicios.get();

    if(personList != null){
        return res.status(200).send(personList)
    }
}
  
function createUsers(req, res) {

    const newUser = req.body;
    const person= servicios.post(newUser);
 
    if(person != null){
        //Teniedo la base de datos aqui se guardaria el body del nuevo usuario
        return res.status(201).send(person);
    }else{
        return res.status(405).end()
    }
}

function getusersById(req, res) {

    const numId = req.params.id
    const personList = servicios.getId();
    const found = personList.find(element => element.id == numId);
   
    if(found != null){
        return res.status(200).send(found)
    }else{
        return res.status(404).end()
    }
}

function updateUsersById(req, res) {
    
    const numId = req.params.id 
    const updateUser = req.body
    const personList = servicios.putUser();
    const found = personList.find(element => element.id == numId);

    if(found != null){
    //Teniedo la base de datos aqui se actualizaria el body del usuario con esa Id
        return res.status(200).send(found)  
    }else{
        return res.status(404).end()
    }
}

function deleteUsersById(req, res) {

    const numId = req.params.id
    const personList = servicios.deleteUser();
    const found = personList.find(element => element.id == numId);

    if(found != null){
    //Teniedo la base de datos aqui se borarria el usuario con esa Id
        return res.status(200).end()
    }else{
        return res.status(404).end()
    }  
}

module.exports =  {
    getUsers, createUsers, getusersById, updateUsersById, deleteUsersById
};