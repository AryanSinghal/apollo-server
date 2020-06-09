## What is GraphQL?

GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. Basically, GraphQL is a query language designed to build client application by providing an intuitive and flexible syntax for describing their data requirement. It was developed internally by Facebook in 2012. It was publicly released in 2015. It provides an approach to develop web APIs and has been compared and contrasted with REST and other web service architectures.

It allows clients to define the structure of the data required, and the same structure of the data is returned from the server, therefore preventing excessively large amounts of data from being returned, but this has implications for how effective web caching of query results can be done. GraphQL supports reading, mutating, and subscribing of data. GraphQL services typically respond using JSON, however the GraphQL spec does not require it.GraphQL is typically served over HTTP via a single endpoint.

## Difference between GraphQL and Rest
- GraphQL are more flexible as compared to Rest API.

- In GraphQL the client selects data along with its entities with fields across relationships in one query request which is not possible in Rest API

- With a REST API, you would typically gather the data by accessing multiple endpoints. On the other hand, you’d simply send a single query to the GraphQL server that includes   the concrete data requirements.

- One of the most common problems with REST is that of over- and underfetching. This happens because the only way for a client to download data is by hitting endpoints that return fixed data structures. It’s very difficult to design the API in a way that it’s able to provide clients with their exact data needs. Whereas GraphQL overcomes this problem.

- GraphQL provides a central location, where all available data is described. The GraphQL schema is usually defined on server-side, but clients can read (query) and write (mutation) data based on the schema. 

- Sometimes GraphQL operation are expensive as compared to rest API.

- Implementing a simplified cache with GraphQL is more complex than implementing it in REST. In REST, resources are accessed with URLs, so you can cache on a resource level because you have the resource URL as identifier. 


## GraphQL Schema and Resolvers.

### GraphQL SCHEMA

A GraphQL schema is at the core of any GraphQL server implementation. It describes the functionality available to the client applications that connect to it. We can use any programming language to create a GraphQL schema and build an interface around it.

Client applications can query the schema within its capabilities. This approach decouples clients from servers and allows both to evolve and scale independently. The makeExecutableSchema function in graphql-tools helps you to bind schema and resolvers.

#### Syntax of schema

import { makeExecutableSchema } from 'graphql-tools';

const jsSchema = makeExecutableSchema({

   typeDefs,
        // It represents a GraphQL query

   resolvers, 
        // This has functions that handle the query 

   logger, 
        // It print errors to the server console

   allowUndefinedInResolve = false,
        /* This is true by default. When set to false, causes your resolve functions to throw errors if they return undefined. */

   resolverValidationOptions = {}, // optional

   directiveResolvers = null, // optional

   schemaDirectives = null,  // optional

   parseOptions = {}, 
        // allows customization of parse when specifying typeDefs as a string

   inheritResolversFromInterfaces = false
        // accepts a Boolean argument to check resolvers object inheritance.

});	

Except typeDefs all fields are optional

### Example of typeDefs

1. type Book {

    title: String

    author: [Author]!

    }

2. type BookStore{

    id: ID!

    title: String!

    addBook(title: String, author: String): Book

    }

! means that the field is non-nullable

### GraphQL Resolvers

Resolver is a collection of functions that generate response for a GraphQL query. In simple terms, a resolver acts as a GraphQL query handler. 

Every resolver function in a GraphQL schema accepts four positional arguments as given below −
- root (The object that contains the result returned from the resolver on the parent field)
- args (An object with the arguments passed into the field in the query)
- context (This is an object shared by all resolvers in a particular query)
- info (It contains information about the execution state of the query, including the field name, path to the field from the root)

The resolver can return null, undefined, array, promise (in most cases), scalar or object.

#### Resolver function signature

fieldName:(root, args, context, info) => { result }

#### Resolver function Example

1. greeting:() => {

    return "hello GraphQL!!!";
    
    }

2. studentById:(root, args, context, info) => {

    return db.students.get(args.id);

    }
    