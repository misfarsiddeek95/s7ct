import React from "react";
import Link from "next/link";

import Navbar from "../../../components/navbar";
import DetailSidebar from "../../../components/detail-sidebar";
import Footer from "../../../components/footer";
import Switcher from "../../../components/switcher";
import TourImageOne from "../../../components/tour-image-one";
import TourDetailFaq from "../../../components/faq/tour-detail-faq";

import { FaHotel, FaUtensils, FaClock,FiMapPin,FaCarSide} from '../../../assets/icons/vander'

import { tourDetailAbout, packages } from "../../../data/data";
import TourImage from "@/app/components/tour-image";
// import React from "react";

export default function TourDetailOne(props){
    let id = props.params.id
    let data = packages.find((item)=>item.id === parseInt(id))

    let kandy = [
        '/images/listing/1.jpg',
        '/images/listing/2.jpg',
        '/images/listing/3.jpg',
        '/images/listing/4.jpg',
    ]
    let Sigirya = [
        '/images/listing/1.jpg',
        '/images/listing/2.jpg',
        '/images/listing/3.jpg',
        '/images/listing/4.jpg',
    ]
    let Dambull = [
        '/images/listing/1.jpg',
        '/images/listing/2.jpg',
        '/images/listing/3.jpg',
        '/images/listing/4.jpg',
    ]

    return(
        <>
         <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end nav-light"/>
        <section className="relative table w-full items-center py-36 bg-[url('/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-3xl leading-normal tracking-wider font-semibold text-white">{data?.title}</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Travosy</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Tour</li>
                </ul>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="lg:col-span-8 md:col-span-7">
                        <TourImageOne/>

                        <h4 className="text-2xl font-semibold mt-5">Sri Lanka Tour Itinerary 12 Days</h4>
                        {/* <p className="flex items-center text-slate-400 font-medium mt-2"><FiMapPin className="size-4 me-1"></FiMapPin>New Zealand</p> */}

                        <ul className="list-none">
                            {tourDetailAbout.map((item,index)=>{
                                let Icon = item.icon
                                return(
                                    <li className="inline-flex items-center me-5 mt-5" key={index}>
                                        <Icon className="size-6 stroke-[1.5] text-red-500"></Icon>

                                        <div className="ms-3">
                                            <p className="font-medium">{item.name}</p>
                                            <span className="text-slate-400 font-medium text-sm">{item.title}</span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className="mt-6">
                            <h4 className="text-lg font-semibold">Day 01 -<span >Polonnaruwa</span> </h4>
                            <p className="font-semibold mt-3">Polonnaruwa</p>
                            <p className="text-slate-400 mt-3">This Sri Lanka itinerary is a journey through the best Sri Lanka destinations for almost two weeks! The first city in our Sri Lanka itinerary: Polonnaruwa, bears a rich history to be discovered by you. Welcome to the city that was once a kingdom and thus protects some of the best-preserved archeological relics of the world. You walk into the remnants of the Royal Palace of King Parakramabahu, the archaeological museum of Polonnaruwa, the Polonnaruwa Vatadage, and many more well-conserved historical sites. You are amazed by the details put to each of these remnants. You then visit a royal Sri Lanka attraction called Parakrama Samudraya, a water reservoir consisting of five lakes. You spend the evening beside one of these lakes surrounded by lush greenery. – A moment to remember! </p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Arrival to Sri Lanka, Colombo (Katunayaka) International Airport</li>
                            <li className="text-slate-400 mt-3">Greetings by Olanka representative & your driver at the airport</li>
                            <li className="text-slate-400 mt-3">Proceed to ancient city of Polonnaruwa</li>
                            <li className="text-slate-400 mt-3">Check into rustic yet luxury hotel to refresh</li>
                            <li className="text-slate-400 mt-3">Later tour around the Polonnaruwa city</li>
                            <li className="text-slate-400 mt-3">Witness 2500 year-old remnants in ancient museums</li>
                            <li className="text-slate-400 mt-3">Walk through to the Local village with friendly villagers</li>
                            <li className="text-slate-400 mt-3">Enjoy the sunset by the “Parakrama Samudra” (water tank)</li>
                            <li className="text-slate-400 mt-3">Enjoy your first grand buffet dinner in Sri Lanka</li>
                            <li className="text-slate-400 mt-3">Overnight stay in the beautiful hotel</li>

                            </ul>

                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> Heritance Kandalama (5 Star Hotel)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaUtensils className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Meal Plan:</strong> Breakfast & Dinner
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaClock className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Travel Time:</strong> Airport to Polonnaruwa - 4 hours (approx.)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaCarSide className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Transfer Mode:</strong> Private Car (Air Conditioned)
                                    </span>
                                    </li>
                                </ul>
                            </div>    
                            <br/>

                            <h4 className="text-lg font-semibold">Day 02 -<span >Sigiriya</span> </h4>
                            <p className="font-semibold mt-3">Sigiriya</p>
                            <p className="text-slate-400 mt-3">Day 2 of this tour starts with the most visited Sri Lanka attractions. Sigiriya is one of the places where locals believe they must visit, at least once in their lifetime, which is why we included this destination for your Sri Lanka itinerary. Due to the locals’ insisting, you alternate the climb to the Sigiriya rock by hiking through the Pidurangala rock. As you reach the cliff you are rewarded with the breath-taking view of the Sigiriya rock surrounded by the thick forest, beautiful water streams with the perfect breeze that plays with your hair. This golden land; is also home to the stunning ‘Royal Gardens’; which is one of the oldest gardens in the world. You end the day with a soul-tapping walk in the village: the calm before the adventures that await in your Sri Lanka itinerary!</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Wake up to the beautiful Polonnaruwa village life</li>
                            <li className="text-slate-400 mt-3">Take a morning walk around the charming village</li>
                            <li className="text-slate-400 mt-3">Enjoy the breakfast buffet overlooking the lake</li>
                            <li className="text-slate-400 mt-3">Taste tropical fruits fresh from the village</li>
                            <li className="text-slate-400 mt-3">Proceed to the city of Sigiriya</li>
                            <li className="text-slate-400 mt-3">On the way, visit Minneriya National Park for wildlife</li>
                            <li className="text-slate-400 mt-3">Check in to your beautiful hotel in Sigiriya</li>
                            <li className="text-slate-400 mt-3">In the afternoon, climb Sigiriya Rock Fortress</li>
                            <li className="text-slate-400 mt-3">Back to the hotel and relax</li>
                            <li className="text-slate-400 mt-3">Devour a humongous dinner buffet at the hotel</li>

                            </ul>
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> Heritance Kandalama (5 Star Hotel)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaUtensils className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Meal Plan:</strong> Breakfast & Dinner
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaClock className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Travel Time:</strong> Polonnaruwa to Sigiriya - 1 hour 20min (approx.)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaCarSide className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Transfer Mode:</strong> Private Car (Air Conditioned)
                                    </span>
                                    </li>
                                </ul>
                            </div>
                            <br/>


                            <h4 className="text-lg font-semibold">Day 03 -<span >Kandy</span> </h4>
                            <p className="font-semibold mt-3">Kandy</p>
                            <p className="text-slate-400 mt-3">Waking up on the third day of your Sri Lanka holiday itinerary, all you feel is the luscious nature. Surrounded by bio-diverse rainforests and misty mountain ranges, Kandy is an ancient capital located in the central hills and is one of the best places to visit in your Sri Lanka itinerary. It is among the top Sri Lanka destinations with scenic beauty! So you wander around a royal botanical garden and sip a cup of tea in a café inside: while sinking in its spellbinding natural beauty. There is so much more to do in this city of art and beauty. You check your Sri Lanka itinerary and decide to go on a city tour. You walk through batik and wood carvings shops, visit ancient temples, and end the day with a calming boat ride. </p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Start your day with a never-ending breakfast buffet</li>
                            <li className="text-slate-400 mt-3">Enjoy mouth-watering fresh tropical fruits</li>
                            <li className="text-slate-400 mt-3">Exit from dry zone in Sri Lanka to cool hill stations</li>
                            <li className="text-slate-400 mt-3">On the way stop by at Dambulla cave temple</li>
                            <li className="text-slate-400 mt-3">Visit Spice village and know about famous Sri Lanka spices</li>
                            <li className="text-slate-400 mt-3">Enjoy an authentic Sri Lankan meal cooked in spice village</li>
                            <li className="text-slate-400 mt-3">Check in to the enticing Kandy hotel & refresh</li>
                            <li className="text-slate-400 mt-3">Visit the most famous Kandy temple</li>
                            <li className="text-slate-400 mt-3">Enjoy a flavourful dinner buffet at the hotel</li>
                            <li className="text-slate-400 mt-3">End your day with a refreshing Sri Lankan Lion beer</li>

                            </ul>
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> Earl's Regent (4 Star Hotel)
                                    </span>
                                    </li>

                                    <li className="flex items-center">
                                    <FaUtensils className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Meal Plan:</strong> Breakfast & Dinner
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaClock className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Travel Time:</strong> Sigiriya to Kandy - 2 hours 20 min (approx.)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaCarSide className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Transfer Mode:</strong> Private Car (Air Conditioned)
                                    </span>
                                    </li>
                                </ul>
                            </div>
                            <br/>


                            <h4 className="text-lg font-semibold">Day 04 -<span >Ella</span> </h4>
                            <p className="font-semibold mt-3">Ella</p>
                            <p className="text-slate-400 mt-3">Beautiful Sri Lanka is all you are asking for, and we give that on your wonderful Sri Lanka itinerary. Ella town is one of the best places to visit in Sri Lanka from your Sri Lanka tour itinerary. You experience one of the most picturesque train rides in the world when you pass beautiful mountains, steamy waterfalls, luscious forests, and villages with beaming locals: on the Kandy to Ella train. You climb the Ella rock and walk along the rails on the famous Nine Arch Bridge. As promised by your customized Sri Lanka itinerary, you arrive at the edge of the Diyaluma falls yet, another Sri Lanka attraction. You jump right in the gushing water, and you feel like you are in an infinity pool, but it is all the magic of nature! </p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Breakfast at the hotel</li>
                            <li className="text-slate-400 mt-3">Proceed to Ella</li>
                            <li className="text-slate-400 mt-3">Enjoy a world famous train ride</li>
                            <li className="text-slate-400 mt-3">Capture beautiful waterfalls and old style train stations</li>
                            <li className="text-slate-400 mt-3">Check in to the charming Ella hotel & refresh</li>
                            <li className="text-slate-400 mt-3">Taste original Ceylon Tea at a tea estate</li>
                            <li className="text-slate-400 mt-3">Witness the famous Ella Gap</li>
                            <li className="text-slate-400 mt-3">Visit the beautiful Nine Arch Bridge</li>
                            <li className="text-slate-400 mt-3">Bath in natural pools of beautiful waterfalls</li>
                            <li className="text-slate-400 mt-3">Hike mini Adams Peak</li>
                            <li className="text-slate-400 mt-3">Appetizing Sri Lankan dinner buffet at the hotel</li>

                            </ul>
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> EKHO Ella (4 Star Hotel)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaUtensils className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Meal Plan:</strong> Breakfast & Dinner
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaClock className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Travel Time:</strong> Kandy to Ella - 3 hours 30 min (approx.)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaCarSide className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Transfer Mode:</strong> Private Car (Air Conditioned)
                                    </span>
                                    </li>
                                </ul>
                            </div>
                            <br/>


                            <h4 className="text-lg font-semibold">Day 05 -<span >Yala National Park</span> </h4>
                            <p className="font-semibold mt-3">Yala National Park</p>
                            <p className="text-slate-400 mt-3">You have been patiently waiting for the daring adventures in your Sri Lanka itinerary, and finally, it is the day! Yala National Park is one of the most loved Sri Lanka attractions for its jungle ride full of excitement, and it is never an option to miss on your Sri Lanka tour. You are in the jungle, and suddenly you realize that it doesn’t matter at what time you venture into the wilderness because, as the name declares, it is wild! As promised by your Sri Lanka itinerary, you witness the mesmerizing leopards, gigantic elephants, and different species of vibrant birds hovering on tree branches chittering and chattering as you arrive. Even though we planned your Sri Lanka tour itinerary, nothing is planned in the jungle!</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Delicious breakfast buffet at the hotel</li>
                            <li className="text-slate-400 mt-3">Check out and proceed to Yala national park</li>
                            <li className="text-slate-400 mt-3">Check in to the tropical hotel in Yala</li>
                            <li className="text-slate-400 mt-3">Gear up for the jungle safari</li>
                            <li className="text-slate-400 mt-3">4 x 4 jeep safari to the jungle in Yala National Park</li>
                            <li className="text-slate-400 mt-3">Proceed back to hotel for over-night stay</li>
                            <li className="text-slate-400 mt-3">Enjoy a BBQ dinner with a Sri Lankan Lion beer</li>

                            </ul>

                        
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> Jetwing Yala (4 Star Hotel)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaUtensils className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Meal Plan:</strong> Breakfast & Dinner
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaClock className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Travel Time:</strong> Ella to Yala - 2 hours 10 min (approx.)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaCarSide className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Transfer Mode:</strong> Private Car (Air Conditioned)
                                    </span>
                                    </li>
                                </ul>
                            </div>
                            <br/>

                            <h4 className="text-lg font-semibold">Day 06 & 07 -<span >Mirissa</span> </h4>
                            <p className="font-semibold mt-3">Mirissa</p>
                            <p className="text-slate-400 mt-3">Your Sri Lanka itinerary just got interesting! There are plenty of things to do in Mirissa, and the amount of hype over this beachfront city is undeniable, which is why we added the destination for your Sri Lanka itinerary. When we say your Sri Lanka itinerary is made just for you, it means you are spending three whole days on the beach! You feel your adrenaline still kicking in from the ride to Yala as you get ready to go snorkeling, scuba diving, and kite surfing! You didn’t forget to take an Instagram-worthy snap in the famous Coconut tree spot. Early on the second day, you go dolphin and whale watching in Mirissa beach and enjoy the day with water sports. As the sun is slowly setting, you joyously lie on the soft beach with your loved ones.</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities Day 06</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Enjoy a delicious grand breakfast buffet at hotel</li>
                            <li className="text-slate-400 mt-3">Take a walk around the Yala village with locals</li>
                            <li className="text-slate-400 mt-3">Check out from the hotel</li>
                            <li className="text-slate-400 mt-3">Proceed to breathtaking Mirissa Beach</li>
                            <li className="text-slate-400 mt-3">On the way, visit Sri Lankan stilt fishermen</li>
                            <li className="text-slate-400 mt-3">Check in to beach front hotel in Mirissa</li>
                            <li className="text-slate-400 mt-3">Relax and enjoy your time by the beach</li>
                            <li className="text-slate-400 mt-3">Taste the Sri Lankan crab dish at the dinner buffet</li>


                            </ul>
                            <p className="font-semibold mt-3">Activities Day 07</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Wake up to the sound of the beach waves</li>
                            <li className="text-slate-400 mt-3">Early morning Yoga session at the beach</li>
                            <li className="text-slate-400 mt-3">Breakfast buffet at hotel overlooking the beautiful Indian ocean</li>
                            <li className="text-slate-400 mt-3">Prepare to take a boat ride to visit whales & dolphins</li>
                            <li className="text-slate-400 mt-3">Take part in a range of exciting water sports</li>
                            <li className="text-slate-400 mt-3">Later proceed back to your beach hotel & relax</li>
                            <li className="text-slate-400 mt-3">Witness the most amazing sunset with a cocktail</li>
                            <li className="text-slate-400 mt-3">Enjoy the BBQ & seafood dinner buffet</li>
                            <li className="text-slate-400 mt-3">Have fun in a Calypso and sing along beach party</li>


                            </ul>

                        
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> Weligama Bay Marriott Resort & Spa (5 Star Hotel)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaUtensils className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Meal Plan:</strong> Breakfast & Dinner
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaClock className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Travel Time:</strong> Yala to Mirissa - 2 hours 30 min (approx.)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaCarSide className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Transfer Mode:</strong> Private Car (Air Conditioned)
                                    </span>
                                    </li>
                                </ul>
                            </div>
                            <br/>

                            <h4 className="text-lg font-semibold">Day 08 & 09 -<span >Sinharaja</span> </h4>
                            <p className="font-semibold mt-3">Sinharaja</p>
                            <p className="text-slate-400 mt-3">From the pristine beaches back to the jungle! Your adventure in this Sri Lanka tour itinerary is not over yet. After a wonderful week in this tropical paradise: it’s time to explore the Sinharaja Rain Forest. You find a beautiful natural water spring surrounded by the luscious forest. You hop into it with a sweet king coconut in your hand. Ah! It sure feels good. After a relaxing time, you get back to the beautiful hotel reserved for you and have a delicious Sri Lankan meal with mouth-watering curries. The following morning of your Sri Lanka itinerary, you go for a village walk in the naturally beautiful Sinharaja with welcoming villagers. You get back to the Sinharaja forest and have your breakfast in the jungle! After all, this is an authentic Sri Lanka itinerary.</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities Day 08 & 09</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Wake up to the beautiful bird chirpings</li>
                            <li className="text-slate-400 mt-3">Start the day with a jungle walk</li>
                            <li className="text-slate-400 mt-3">Trekkers will stop inside the jungle for breakfast</li>
                            <li className="text-slate-400 mt-3">Continue jungle trekking in Sinharaja Rainforest</li>
                            <li className="text-slate-400 mt-3">Proceed back to Sinharaja hotel and relax</li>
                            <li className="text-slate-400 mt-3">Later, Sink in an Ayurveda spa session</li>
                            <li className="text-slate-400 mt-3">Enjoy a mouth-watering dinner buffet at the hotel</li>
                            <li className="text-slate-400 mt-3">Taste sweet & juicy tropical fruits for dessert</li>


                            </ul>

                        
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> Boulder Garden Resort (3 Star Hotel)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaUtensils className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Meal Plan:</strong> Breakfast & Dinner
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaClock className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Travel Time:</strong> Mirissa to Sinharaja - 2 hours 30 min (approx.)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaCarSide className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Transfer Mode:</strong> Private Car (Air Conditioned)
                                    </span>
                                    </li>
                                </ul>
                            </div>
                            <br/>

                            <h4 className="text-lg font-semibold">Day 10 -<span >Bentota</span> </h4>
                            <p className="font-semibold mt-3">Yala National Park</p>
                            <p className="text-slate-400 mt-3">Love for the sea never ends. On the tenth day of your Sri Lanka tour, you rent a bicycle in Bentota and cycle through the gorgeous city as you come across paddy fields, stunning ancient mural paintings in ‘Mullegoda temple’, and visit the Kosgoda Turtle Hatchery. You stop by to chit-chat with the friendly locals and enjoy the delicious local food. It is an amazing Sri Lanka itinerary if it includes the enchanting gardens resting in the heart of Bentota. But when we say Sri Lanka itinerary, no matter where it is: a little adventure awaits. So you jump back into the turquoise waters eagerly for water sports. You sit on the golden beach with your loved ones and think of your Sri Lanka holiday and itinerary while enjoying the beautiful sunset. A real vacation it is!</p>
                            <TourImage images= {kandy}/>
                            <br/>
                        

                        
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> Cinnamon Bey (4 Star Hotel)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaUtensils className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Meal Plan:</strong> Breakfast & Dinner
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaClock className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Travel Time:</strong> Sinharaja to Bentota - 3 hours 20 min (approx.)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaCarSide className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Transfer Mode:</strong> Private Car (Air Conditioned)
                                    </span>
                                    </li>
                                </ul>
                            </div>
                            <br/>

                            <h4 className="text-lg font-semibold">Day 11 -<span >Colombo</span> </h4>
                            <p className="font-semibold mt-3">Colombo</p>
                            <p className="text-slate-400 mt-3">Colombo is the commercial capital of Sri Lanka, and in your Sri Lanka itinerary, this is the best place to end your Sri Lanka tour. The beautiful museum-like Gangaramaya Temple, heavily decorated Old and New Kathiresan Kovils, the gigantic Red Mosque (Jami Ul-Alfar Mosque), and the Wolvendaal Church; the only Dutch church in Sri Lanka altogether portray the diverse cultures in the country. The city is full of energy and has the best restaurants and shopping complexes in your Sri Lanka itinerary. It is the last travel day of your Sri Lanka tour, and you spend a wonderful time with the locals in their social hubs like Independence Square, the Arcade, the Viharamahadevi Park, and the Galle Face Beach. As you watch the heart-warming sunset, the Colombo nightlife is calling you for an insane party night!</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Wake up to the calm sound of beach waves</li>
                            <li className="text-slate-400 mt-3">Start your day with an amazing yoga session</li>
                            <li className="text-slate-400 mt-3">Indian ocean salty seafood buffet breakfast</li>
                            <li className="text-slate-400 mt-3">Proceed to Colombo</li>
                            <li className="text-slate-400 mt-3">Visit a Turtle Hatchery on the way</li>
                            <li className="text-slate-400 mt-3">Learn about Sri Lanka’s pioneering sea turtle conservation project</li>
                            <li className="text-slate-400 mt-3">Enjoy a city tour in Colombo</li>
                            <li className="text-slate-400 mt-3">Visit Sri Lanka’s best shopping malls (optional)</li>
                            <li className="text-slate-400 mt-3">Check in to the luxury hotel and relax</li>
                            <li className="text-slate-400 mt-3">Enjoy Sri Lankan Ayurveda spa session</li>
                            <li className="text-slate-400 mt-3">Visit local pubs & nightclubs to enjoy the Colombo party life</li>
                            <li className="text-slate-400 mt-3">Last of your Sri Lanka tour at the hotel</li>

                            </ul>

                        
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> The Kingsbury (5 Star Hotel)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaUtensils className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Meal Plan:</strong> Breakfast & Dinner
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaClock className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Travel Time:</strong> Bentota to Colombo - 1 hours 30 min (approx.)
                                    </span>
                                    </li>

                                    
                                    <li className="flex items-center">
                                    <FaCarSide className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Transfer Mode:</strong> Private Car (Air Conditioned)
                                    </span>
                                    </li>
                                </ul>
                            </div>
                            <br/>

                            <h4 className="text-lg font-semibold">End </h4>
                            
                        </div>

                        {/* <div className="mt-6">
                            <h5 className="text-lg font-semibold">Questions & Answers:</h5>

                            <TourDetailFaq/>
                        </div> */}

                        <div className="mt-6">
                            <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                            <form className="mt-6">
                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-left">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <input name="name" id="name" type="text" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Name :"/>
                                        </div>
                                    </div>
    
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-left">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <input name="email" id="email" type="email" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Email :"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <div className="text-left">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <textarea name="comments" id="comments" className="mt-3 w-full py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 h-28" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full">Send Message</button>
                            </form>
                        </div>
                    </div>

                    <DetailSidebar/>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}