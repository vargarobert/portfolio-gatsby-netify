import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import PortfolioRoll from "../components/PortfolioRoll";
import Header from "../components/Header";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <Header
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
      className="parallax-header"
      title={title}
      subheading={subheading}
    />
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content has-text-centered">
                  {mainpitch.title && (
                    <div className="tile">
                      <h3 className="title">{mainpitch.title}</h3>
                    </div>
                  )}
                  {mainpitch.description && (
                    <div className="tile">
                      <h4 className="subtitle">{mainpitch.description}</h4>
                    </div>
                  )}
                </div>
                {/*<div className="columns">*/}
                {/*  <div className="column is-12">*/}
                {/*    {heading && (*/}
                {/*      <h3 className="has-text-weight-semibold is-size-2">*/}
                {/*        {heading}*/}
                {/*      </h3>*/}
                {/*    )}*/}
                {/*    {description && <p>{description}</p>}*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<Features gridItems={intro.blurbs} />*/}
                {/*<div className="columns">*/}
                {/*  <div className="column is-12 has-text-centered">*/}
                {/*    <Link className="btn-primary" to="/products">*/}
                {/*      See all products*/}
                {/*    </Link>*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*  <h3 className="has-text-weight-semibold is-size-2">*/}
                {/*    Portfolio*/}
                {/*  </h3>*/}
                {/*  <BlogRoll />*/}
                {/*  <div className="column is-12 has-text-centered">*/}
                {/*    <Link className="btn-primary" to="/blog">*/}
                {/*      See all*/}
                {/*    </Link>*/}
                {/*  </div>*/}
                {/*</div>*/}

                <div className="has-margin-top-70">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Portfolio
                  </h3>
                  <PortfolioRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn-primary" to="/portfolio">
                      See all
                    </Link>
                  </div>
                </div>

              </div>
            </div>



            {/*<div className="column is-10 is-offset-1">*/}
            {/*  <h3 className="has-text-weight-semibold is-size-2">*/}
            {/*    Portfolio*/}
            {/*  </h3>*/}
            {/*  <BlogRoll />*/}
            {/*  <div className="column is-12 has-text-centered">*/}
            {/*    <Link className="btn-primary" to="/blog">*/}
            {/*      See all*/}
            {/*    </Link>*/}
            {/*  </div>*/}
            {/*</div>*/}


          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
