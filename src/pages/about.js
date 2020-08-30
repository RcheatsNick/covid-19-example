import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import appIcon from "../images/v-19.png";
import SectionTitle from "../components/sectionTitle";
import AppButton from "../components/button";

export default function about() {
  return (
    <Layout>
    <SEO title="404: Not found" />
    <div
        className="flex self-center text-white font-semibold text-2xl mx-2 px-2 py-1"
        style={{
          color: "#f94c61"
        }}
      >
        Opps, seems like you are lost!
      </div>      
      <Link to="/" className="flex my-4 px-4">
      <div
        className=""
        style={{
          color: "#f94c61"
        }}
      >
        Mind Going Back?
      </div>
    </Link>
  </Layout>

  );
}
