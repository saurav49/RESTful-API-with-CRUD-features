import {v4 as uuidv4} from "uuid";

let users = [];

export const getUser  = (req, res) => {
    res.send(users);
    res.send(`Hello From the User Section.`);
}; 

export const createUser = (req, res) => {
    let user = req.body;
    let userId = uuidv4(); // unique id created

    let userWithId = {...user, id : userId};

    users.push(userWithId);
    res.send(`User with name ${user.firstName} has been added`);
};

export const getUserById = (req, res) => {
    let {id} = req.params;
    let foundUser = users.find((user) => user.id === id);

    console.log(foundUser);
    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    let {id} = req.params;
    users = users.filter((user) => user.id !== id);

    res.send(`User with id ${id} has been deleted`);
};

export const editUser = (req, res) => {
    let {id} = req.params;
    let {firstName, lastName, age} = req.body;

    let userToUpdated = users.find((user) => user.id === id)

    if(firstName) userToUpdated.firstName = firstName;


    if(lastName) userToUpdated.lastName = lastName;


    if(age) userToUpdated.age = age;


    res.send(`User with id ${id} has been updated`);
};
