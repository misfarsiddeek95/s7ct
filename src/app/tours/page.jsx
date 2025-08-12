import Link from "next/link"
import Image from "next/image"
import Navbar from "../components/navbar"

import { BiDish, FaBed, FaCar, FaPlane } from '../assets/icons/vander'
import Switcher from "../components/switcher"
import Footer from "../components/footer"
import Tagline from "../components/tagline"
import {performRequest} from "@/lib/datocms";
import {Rate} from "antd";

const GET_ALL_TOURS_QUERY = `
query {
  allTours(orderBy: _createdAt_ASC) {
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
}
`

export const metadata = {
    title: "Tour Packages | S7 Travels",
    description: "Experience the best tours with S7 Travels. We offer the best tour packages at the best prices. Book your tour package now!",
}

export default async function Grid() {
    const { allTours } = await performRequest(GET_ALL_TOURS_QUERY)

    return (
        <>
            <Tagline />
            <Navbar navclass="defaultscroll is-sticky tagline-height" navlight={true} manuclass="justify-end nav-light" />
            <section className="relative table w-full items-center py-36 bg-[url('/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">Tour Packages</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Home</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Tour</li>
                    </ul>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                      {allTours.map((item, index) => {
                        return (
                          <div className="group rounded-md shadow dark:shadow-gray-700" key={index}>
                            <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                              <Image src={item.thumbnail.url} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="scale-125 group-hover:scale-100 duration-500" alt="" />
                              {/* {item.tagText && (
                                            <div className="absolute top-0 start-0 p-4">
                                                <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{item.tagText}</span>
                                            </div>
                                        )} */}

                              {/* <div className="absolute top-0 end-0 p-4">
                                            <Link href="#" className="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"><i className="mdi mdi-heart text-[20px] align-middle"></i></Link>
                                        </div> */}
                            </div>

                            <div className="p-4">

                              <Link key={index} href={`/tours/${item.slug}`} className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">{item.title}</Link>
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
                                <ul className="text-sm font-medium  list-none ms-2 space-x-1">
                                  <Rate rootClassName="text-md" defaultValue={item.currentRating} />
                                  <li className="inline text-black dark:text-white text-sm">{item.currentRating || 0.0.toFixed(1)}({item.ratedPeopleCount || 0})</li>
                                </ul>
                              </div>

                              <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                <h5 className="text-lg font-medium text-red-500">$ {item.pricePerPerson} / Person</h5>

                                <Link key={index} href={`/tours/${item.slug}`} className="text-slate-400 hover:text-red-500">Explore Now <i className="mdi mdi-arrow-right"></i></Link>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                        <div className="md:col-span-12 text-center">
                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex items-center -space-x-px">
                                    <li>
                                        <Link href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500 dark:hover:bg-red-500">
                                            <FiChevronLeft className="size-5 rtl:rotate-180 rtl:-mt-1"></FiChevronLeft>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500 dark:hover:bg-red-500">1</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500 dark:hover:bg-red-500">2</Link>
                                    </li>
                                    <li>
                                        <Link href="#" aria-current="page" className="z-10 size-[40px] inline-flex justify-center items-center text-white bg-red-500 border border-red-500">3</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500 dark:hover:bg-red-500">4</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500 dark:hover:bg-red-500">5</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500 dark:hover:bg-red-500">
                                            <FiChevronRight className="size-5 rtl:rotate-180 rtl:-mt-1"></FiChevronRight>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div> */}
                </div>
            </section>
            <Footer />
            <Switcher />
        </>
    )
}