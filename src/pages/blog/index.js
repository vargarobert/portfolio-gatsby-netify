import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import Header from "../../components/Header";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header
          style={{
            backgroundImage: `url('/img/blog-index.png')`,
          }}
          title="Portfolio"
        />
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
