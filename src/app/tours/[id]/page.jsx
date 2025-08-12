import {performRequest} from "@/lib/datocms";
import Navbar from "@/app/components/navbar";
import React from "react";
import Link from "next/link";
import TourImage from "@/app/components/tour-image";
import TourDetailAboutComponent from "@/app/tours/[id]/TourDetailAboutComponent";
import {FiActivity, FiClock, FiDollarSign} from "react-icons/fi";
import {AiFillCar} from "react-icons/ai";
import {renderNodeRule, StructuredText} from "react-datocms";
import {isHeading, isList, isListItem, isParagraph} from "datocms-structured-text-utils";
import {FaCarSide, FaClock, FaHotel, FaUtensils} from "@/app/assets/icons/vander";
import DetailSidebar from "@/app/components/detail-sidebar";
import Head from "next/head";

const TOUR_BY_ID_QUERY = (id) => `
query {
  allTours(first: 1, filter: {slug: { eq: "${id}" } }) {
    id
    title
    duration
    pricePerPerson
    tourType
    slug
    shortDescription
    transportation
    thumbnail {
        url
    }
    highlightImages {
      url
    }
    days {
     dayDescription {
      value
     }
     mealPlan
     accommodation
     transferMode
     travelTime
    }
  }
}
`;

const TOUR_BY_ID_META_QUERY = (id) => `
query {
    allTours(first: 1, filter: {slug: { eq: "${id}" } }) {
        id
        title
        shortDescription
        thumbnail {
            url
        }
    }
}
`;

export async function generateMetadata({params}) {
    const {id} = await params;
    const { allTours } = await performRequest(TOUR_BY_ID_META_QUERY(id))

    return {
        title: `${allTours[0].title} | S7 Travels`,
        description: allTours[0].shortDescription,
        url: `https://s7travels.com/tours/${allTours[0].slug}`,
        siteName: "S7 Travels",
        openGraph: {
            images: [
                {
                    url: allTours[0].thumbnail.url,
                    width: 800,
                    height: 600,
                    alt: allTours[0].title
                }
            ]
        }
    }
}

export default async function TourDetail({params}) {
  const {id} = await params;
  let {allTours} = await performRequest(TOUR_BY_ID_QUERY(id))

  let data = allTours[0]

  return (<>
      <Head>
        <title>{data?.title} | S7 Travels</title>
          <meta property="og:type" content="article" />
          <meta property="og:title" content={data?.title} />
          <meta property="og:description" content={data?.shortDescription} />
          <meta property="og:image" content={data?.thumbnail.url} />
          <meta property="og:url" content={`https://s7travels.com/tours/${data?.slug}`} />
      </Head>
    <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end nav-light"/>
    <section
      className="relative table w-full items-center py-36 bg-[url('/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 className="text-3xl leading-normal tracking-wider font-semibold text-white">{data?.title}</h3>
        </div>
      </div>

      <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
        <ul className="tracking-[0.5px] mb-0 inline-block">
          <li
            className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
            <Link href="/">S7 TRAVELS</Link></li>
          <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i
            className="mdi mdi-chevron-right"></i></li>
          <li
            className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white hover:text-white">
            <Link href="/tours">Tours</Link></li>
        </ul>
      </div>
    </section>
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
          <div className="lg:col-span-8 md:col-span-7">
            {/* <TourImageOne/> */}
            <TourImage images={data?.highlightImages}/>

            <h4 className="text-2xl font-semibold mt-5">{data?.title}</h4>
            {/* <p className="flex items-center text-slate-400 font-medium mt-2"><FiMapPin className="size-4 me-1"></FiMapPin>New Zealand</p> */}

            <ul className="list-none">
              <TourDetailAboutComponent icon={FiClock} name="Duration" title={`${data?.duration} days`}/>
              <TourDetailAboutComponent icon={FiDollarSign} name="Cost" title={`$ ${data?.pricePerPerson} / Person`}/>
              <TourDetailAboutComponent icon={FiActivity} name="Type" title={`${data?.tourType}`}/>
              <TourDetailAboutComponent icon={AiFillCar} name="Transportation" title={`${data?.transportation}`}/>
            </ul>

            <div className="mt-6">
              {data.days.map((item, index) => (
                <div key={index}>
                  <StructuredText
                    key={index}
                    data={item.dayDescription}
                    customNodeRules={[renderNodeRule(isHeading, ({node, children}) => {
                      const HeadingTag = `h${node.level}`;
                      return React.createElement(HeadingTag, {className: "text-lg font-semibold mt-5"}, children);
                    }), renderNodeRule(isParagraph, ({children}) => {
                      return <p className="text-slate-400 mt-3">{children}</p>;
                    }), renderNodeRule(isList, ({children}) => {
                      return <ul className="list-disc list-inside">{children}</ul>;
                    }), renderNodeRule(isListItem, ({children}) => {
                      return <li className="text-slate-400 mt-3">{children}</li>;
                    })]}
                  />
                  {item.accommodation &&
                  <div className="bg-white p-6 rounded-md shadow-md mt-6">
                    <ul className="space-y-4">
                      {/* Accommodation */}
                      <li className="flex items-center">
                        <FaHotel className="text-red-500 text-lg mr-3"/>
                        <span>
                          <strong>Accommodation:</strong> {item.accommodation}
                        </span>
                      </li>

                      {/* Meal Plan */}
                      <li className="flex items-center">
                        <FaUtensils className="text-red-500 text-lg mr-3"/>
                        <span>
                          <strong>Meal Plan:</strong> {item.mealPlan}
                        </span>
                      </li>

                      {/* Travel Time */}
                      <li className="flex items-center">
                        <FaClock className="text-red-500 text-lg mr-3"/>
                        <span>
                          <strong>Travel Time:</strong> {item.travelTime}
                        </span>
                      </li>

                      {/* Transfer Mode */}
                      <li className="flex items-center">
                        <FaCarSide className="text-red-500 text-lg mr-3"/>
                        <span>
                          <strong>Transfer Mode:</strong> {item.transferMode}
                        </span>
                      </li>
                    </ul>
                  </div>
                  }
                </div>
              ))}
            </div>
          </div>
          <DetailSidebar/>
        </div>
      </div>
    </section>
  </>)
}