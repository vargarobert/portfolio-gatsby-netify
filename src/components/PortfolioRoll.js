import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class PortfolioRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-vstretched is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div
              className="is-parent column is-one-third-tablet is-one-quarter-desktop"
              key={post.id}
            >
              <article
                className={`card no-flickr is-child ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                {post.frontmatter.featuredimage && (
                  <div className="card-image">
                    <figure className="image">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </figure>
                  </div>
                )}
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <div className="title is-6">{post.frontmatter.title}</div>
                      <div className="subtitle is-7">{post.frontmatter.date}</div>
                    </div>
                  </div>
                  <div className="content is-size-7">{post.excerpt}</div>
                </div>
                <Link className="stretched-link" to={post.fields.slug} />
              </article>
            </div>
          ))}
      </div>
    );
  }
}

PortfolioRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query PortfolioRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "portfolio-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 150)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PortfolioRoll data={data} count={count} />}
  />
);
