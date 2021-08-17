declare type User = {
    _id: !String;
    username: !String;
    password: !String;
};
declare type Query = {
    hello: !String;
    users: [!User];
};
declare type Mutation = {
    createUser(input: !UserInput): User;
};
