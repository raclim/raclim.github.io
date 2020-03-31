const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    return new Promise((resolve,reject) => {
        const pageTemplate = path.resolve('./src/pages/page.js');
        resolve(
            graphql(
            `{
                allContentfulPortfolioWork {
                    edges {
                        node {
                            id
                            title
                            url
                            slug
                        }
                    }
                }
            }`
            ).then(result => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }
                //creates pages
                const posts = result.data.allContentfulPortfolioWork.edges;
                posts.forEach((post, index) => {
                    console.log(post.node.slug);
                    createPage({
                        path: `/${post.node.slug}/`,
                        component: pageTemplate,
                        context: {
                        slug: post.node.slug,
                        },
                    })
                })
            })
        )
    })
}
  