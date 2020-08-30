import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import axios from "axios";
import { API_URL } from "../functions/fetchApi";
import DataBox from "../components/dataBox";
import LoadingBox from "../components/loadingBox";
import CountrySearch from "../components/countrySearch";
import { Link } from "gatsby";
import HeroImg from "../images/medical-mask-pana.svg";
import DataBoxCountry from "../components/dataBoxCountry";
import AppButton from "../components/button";
import formatDate from "../functions/formatDate";
const IndexPage = () => {
  const [busy, setBusy] = useState(true);
  const [data, setData] = useState();
  const [countries, setCountries] = useState();
  const [countryBusy, setCountryBusy] = useState(true);
  const [searchByCountry, setSearchByCountry] = useState(false);
  const [countryData, setCountryData] = useState();

  useEffect(() => {
    axios
      .all([
        axios.get(API_URL),
        axios.get(API_URL + `/countries`),
        axios.get(API_URL + `/daily`),
      ])
      .then(
        axios.spread((...result) => {
          setData(result[0].data);
          setCountries(result[1].data.countries);
          setBusy(false);
        })
      )
      .catch(() => {
        setBusy(false);
        alert("Please check your Internet connections.");
      });
  }, []);

  function showDataPerCountry(country) {
    setSearchByCountry(true);
    axios(API_URL + `/countries/${country}`)
      .then(result => {
        setCountryData(result.data);
        setCountryBusy(false);
      })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {busy ? (
          <LoadingBox />
        ) : data ? (
          <div>
            <div className="flex">
              <img className="w-7/12" src={HeroImg} alt="" />
              <p className="flex self-center text-sm sm:text-2xl font-medium">
                Stay Safe! <br />
                Keep Social Distancing...
              </p>
            </div>
            <DataBox data={data} />
            <div>
              <CountrySearch
                countries={countries}
                callDataPerCountry={selectedCountry =>
                  showDataPerCountry(selectedCountry)
                }
              />
            </div>
            {searchByCountry ? (
              countryBusy ? (
                <LoadingBox />
              ) : (
                <DataBoxCountry data={countryData} />
              )
            ) : null}
            <p className="p-4 font-bold">Last Update : {formatDate(data.lastUpdate)}</p>
          </div>
        ) : (
          <p>Can't Found Anything</p>
          )}
        <div className="p-1 w-1/3">
          <Link to="/dailycharts">
          <button
            className="h-12 px-4 w-5/6 ml-4 rounded-lg font-bold"
            style={{
              border  : "3px solid #f94c61",
              backgroundColor: "#fff",
              color: "#f94c61",
              outline: "none"
            }} 
          >
            View Charts
          </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
