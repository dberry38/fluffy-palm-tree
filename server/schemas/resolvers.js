// import models
const { Book, User } = require('../models');


// following mini-project's example to set up resolvers
const resolvers = {
    Query: {
        book: async () => {
            return Book.find({});
        }

    },
    Mutation: {

    },
};

module.exports = resolvers;