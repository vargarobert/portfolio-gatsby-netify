import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Gallery from "@browniebroke/gatsby-image-gallery";

export const PortfolioPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  galleryImages,
}) => {
  const PostContent = contentComponent || Content;
  const images = galleryImages?.map((n) => n.childImageSharp);

  //TEMP video iframe stretch fixup, parsing not applicable to Netlify CMS
  if (typeof content === "string") {
    content = content.replace(
      /<iframe/g,
      '<div class="video-wrapper has-margin-bottom-15"><iframe'
    );
    content = content.replace(/<\/iframe>/g, "</iframe></div>");
  }

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            {description && <p>{description}</p>}
            {/* Temp for fixing bug with external gallery library*/}
            {images?.length > 0 && (
              <div className="has-margin-right-10 has-margin-left-10 has-margin-bottom-15">
                <Gallery
                  gutter="5px"
                  images={images}
                  imgClass="gallery-image"
                />
              </div>
            )}
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

PortfolioPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  galleryImages: PropTypes.array,
  helmet: PropTypes.object,
};

const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PortfolioPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        galleryImages={post.frontmatter.galleryImages}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

PortfolioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default PortfolioPost;

export const pageQuery = graphql`
  query PortfolioPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        galleryImages {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
  }
`;
