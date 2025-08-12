import Image from "next/image";
import Link from "next/link";

import Tagline from "./components/tagline";
import Navbar from "./components/navbar";
import About from "./components/about";
import Client from "./components/client";
import Footer from "./components/footer";
import Switcher from "./components/switcher";

import {packages} from './data/data'
import HeroSliderTwo from "@/app/components/hero-slider-two";
import {BiDish, FaBed, FaCar, FaPlane} from "@/app/assets/icons/vander";
import TourImageSlider from "@/app/components/tour-image-slider";
import {performRequest} from "@/lib/datocms";
import {Rate} from "antd";

const GET_POPULAR_TOUR_PACKAGES = `
query {
  allTours(filter: {isPopular: { eq: true } }) {
    id
    title
    pricePerPerson
    slug
    currentRating
    ratedPeopleCount
    tourInclusion {
      contentItem
    }
    thumbnail {
      url
    }
  }
}`

const GET_ALL_TOP_DESTINATIONS_QUERY = `
query {
  allDestinations {
    destinationThumbnail {
      url
      title
    }
  }
}`

export default async function Home() {
  const { allDestinations } = await performRequest(GET_ALL_TOP_DESTINATIONS_QUERY)
  const { allTours } = await performRequest(GET_POPULAR_TOUR_PACKAGES)

  return (
    <>
      <Tagline/>
      <Navbar navclass="defaultscroll is-sticky tagline-height" navlight={true} manuclass="justify-end nav-light"/>
      <HeroSliderTwo/>

      <section className="relative md:py-24 py-16 overflow-hidden">

        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Highlighted Packages</h3>

            <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            {allTours.map((item,index)=>{
              return(
                <div className="group rounded-md shadow dark:shadow-gray-700" key={index}>
                  <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 mx-2 mt-2">
                    <Image src={item.thumbnail.url} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="scale-125 group-hover:scale-100 duration-500" alt=""/>
                    {/* {item.tagText && (
                      <div className="absolute top-0 start-0 p-4">
                        <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{item.tagText}</span>
                      </div>
                    )} */}
                  </div>

                  <div className="p-3">

                    <Link key={index} href={`tours/${item.slug}`} className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">{item.title}</Link>
                    <p className="flex items-center text-slate-400 font-medium mb-2"><FaPlane className="text-red-500 size-4 me-1"/> <FaBed className="text-red-500 size-4 me-1"/><FaCar className="text-red-500 size-4 me-1"/> <BiDish className="text-red-500 size-4 me-1"/></p>
                    <p className="flex flex-wrap items-center text-slate-400 font-medium mb-2">
                      {Array.isArray(item.tourInclusion) ? (
                        item.tourInclusion.map((place, i) => (
                          <span key={i} className="ml-1">{place.contentItem}</span>
                        ))
                      ) : (
                        <span>{item.place || "No places available"}</span>
                      )}
                    </p>

                    <div className="flex items-center mt-2">
                      <span className="text-slate-400">Rating:</span>
                      <ul className="text-lg font-medium list-none ms-2 space-x-1">
                        <Rate rootClassName="text-sm" defaultValue={Math.round(item.currentRating)} />
                        <li className="inline text-black dark:text-white text-sm">{item.currentRating}({item.ratedPeopleCount})</li>
                      </ul>
                    </div>

                    <div className="mt-3 pt-3 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                      <h5 className="text-lg font-medium text-red-500">{item.amount}</h5>

                      <Link key={index} href={`tours/${item.slug}`} className="text-slate-400 hover:text-red-500">Explore Now <i className="mdi mdi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Top Destinations</h3>

            <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 relative mt-6 gap-6">
            {allDestinations.map((item,index)=>{
              return(
                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800 object-cover" key={index}>
                  <Image src={item.destinationThumbnail.url} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="scale-125 group-hover:scale-100 duration-500" alt=""/>
                  <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                  <div className="absolute p-4 bottom-0 start-0">
                    <Link href="" className="text-lg font-medium text-white hover:text-red-500 duration-500 ease-in-out">{item.destinationThumbnail.title}</Link>
                    {/* <p className="text-white/70 group-hover:text-white text-sm duration-500">{item.hotels}</p> */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <About/>
        <Client/>
      </section>

      <TourImageSlider/>
      <Footer/>
      <Switcher/>
    </>
  );
}
