import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/PortfolioRoll";
import Header from "../../components/Header";

export default class PortfolioIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Header
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
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
