import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getDetails = async () => {
    const query = gql`
        query MyQuery {
            people(where: {id: "cl6qih99y2wrn0bim4rauhlq2"}) {
                name
                aboutMe
            }
        }
    `
    const result = await request(graphqlAPI, query);

    return result.people[0];
}

export const getProjects = async () => {
    const query = gql`
        query MyQuery {
            projectsConnection(orderBy: levelOfImportance_ASC) {
                edges {
                    node {
                        description
                        featuredImage {
                            url
                        }
                        name
                        category {
                            name
                        }
                        tags(orderBy: tag_ASC) {
                            tag
                        }
                        links {
                            link1
                            link2
                            link3
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);

    return result.projectsConnection.edges;
}

export const getCategories = async () => {
    const query = gql`
        query MyQuery {
            categoriesConnection {
                edges {
                    node {
                        projects(orderBy: levelOfImportance_ASC) {
                            description
                            name
                            tags {
                                tag
                            }
                            featuredImage {
                                url
                            }
                            links {
                                link1
                                link2
                                link3
                            }
                        }
                        name
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);

    return result.categoriesConnection.edges;
}