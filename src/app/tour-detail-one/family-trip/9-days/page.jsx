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

                        <h4 className="text-2xl font-semibold mt-5">Sri Lanka Vacation 9 Days</h4>
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
                            <h4 className="text-lg font-semibold">Day 01 & 02 -<span >Sigiriya & Dambulla</span> </h4>
                            <p className="font-semibold mt-3">Sigiriya</p>
                            <p className="text-slate-400 mt-3">In this 9-day Sri Lanka vacation package, you discover one of the most attractive cultural centers of Sri Lanka in Sigiriya, where there are plenty of things to do and explore! You visit an elephant orphanage where its playful calves amuse you with cute gestures that will begin your Sri Lanka vacation on a sweet note. Then you step into the Pathikada art gallery that preserves 5th-century traditional paintings. In this Sri Lanka vacation package, you get the remarkable opportunity to climb the world-famous Sigiriya rock fortress. You will have the feeling of entering in to the world of ancient kingdom when you visit the Dambulla cave temple complex as it feels so real and raw! Before heading to the beautiful village walk, you dig into the mouth-watering Sri Lankan food made from recipes treasured for centuries!</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities Day 01</p>

                            <ul className="list-disc list-inside">
                                <li className="text-slate-400 mt-3">Arrival at Colombo Sri Lanka (Bandaranaike International airport)</li>
                                <li className="text-slate-400 mt-3">Enjoy a warm welcome by our Olanka representative and driver at the airport</li>
                                <li className="text-slate-400 mt-3">Proceed to the ancient city of Sigiriya                                </li>
                                <li className="text-slate-400 mt-3">Enroute visit to Pinnawala elephant orphanage</li>
                                <li className="text-slate-400 mt-3">Check-in at the antique-style hotel and relax</li>
                                <li className="text-slate-400 mt-3">Have a chill Sri Lankan Lion Beer & wine down</li>
                                <li className="text-slate-400 mt-3">Enjoy your first Sri Lankan buffet dinner at the hotel</li>
                                <li className="text-slate-400 mt-3">Overnight stay at the hotel                                </li>
                                
                            </ul>

                            <p className="font-semibold mt-3">Activities Day 02</p>

                            <ul className="list-disc list-inside">
                                <li className="text-slate-400 mt-3">Wakeup to a beautiful morning in Sigiriya</li>
                                <li className="text-slate-400 mt-3">Appetizing buffet Breakfast at the hotel</li>
                                <li className="text-slate-400 mt-3">Proceed to climb the ancient Sigiriya rock fortress                                </li>
                                <li className="text-slate-400 mt-3">Experience a memorable evening walk through a beautiful Sri Lanka village</li>
                                <li className="text-slate-400 mt-3">A traditional Sri Lankan village experience</li>
                                <li className="text-slate-400 mt-3">Take a traditional boat ride through the village</li>
                                <li className="text-slate-400 mt-3">Enjoy a soothing Ayurveda spa session</li>
                                <li className="text-slate-400 mt-3">Enjoy a grand buffet dinner with authentic Sri Lankan food                                </li>
                                
                            </ul>

                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> Amaya Lake (4 Star Hotel)
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
                                        <strong>Travel Time:</strong> Airport to Dambulla - 5 hour (approx.)
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
                            <p className="text-slate-400 mt-3">It’s the third day of your Sri Lanka vacation, and you are on an exquisite trip around the city of Kandy, which used to be the capital of Sri Lanka during the legendary era of Sri Lankan kingdoms. As a city of sacred value, the Kandyan Kingdom was home to the ‘Temple of Tooth’. Centuries later, the tooth relic of Lord Buddha still remains in Kandy. As you wake up in one of the best holiday resorts in Sri Lanka, the scenic beauty of Kandy greets you. Its misty mountains ranges, charming tea plantations, soothing weather, royal botanic garden with mesmerizing flora, gooey food, and friendly locals sum up heaven in the form of a city. And making your Sri Lanka vacation even better, you experience the insanely picturesque train ride across Kandy!</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                                <li className="text-slate-400 mt-3">Wakeup to the beautiful bird chirpings in Sigirya</li>
                                <li className="text-slate-400 mt-3">Savor an unending buffet breakfast at the hotel</li>
                                <li className="text-slate-400 mt-3">Taste sweet tropical fruits in the paradise of Sri Lanka</li>
                                <li className="text-slate-400 mt-3">Walk through the village in your way to the Spice village</li>
                                <li className="text-slate-400 mt-3">Get to know how best spices in the world are grown and made</li>
                                <li className="text-slate-400 mt-3">Visit the famous Coconut House</li>
                                <li className="text-slate-400 mt-3">Know how Sri Lankans make full use of the coconut tree</li>
                                <li className="text-slate-400 mt-3">Later check in to your hotel in Kandy & refresh</li>
                                <li className="text-slate-400 mt-3">Visit the most famous Temple of Tooth in Kandy</li>
                                <li className="text-slate-400 mt-3">Enjoy the evening with a cultural dance</li>
                                <li className="text-slate-400 mt-3">Taste Sri Lanka through a grand buffet dinner</li>
                                <li className="text-slate-400 mt-3">Take a walk around the Kandy lake at night</li>
                                <li className="text-slate-400 mt-3">OWine down your day with a Sri Lankan Lion beer</li>
                            </ul>
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    {/* Accommodation */}
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> Mahaweli Reach (5 Star Hotel)
                                    </span>
                                    </li>

                                    {/* Meal Plan */}
                                    <li className="flex items-center">
                                    <FaUtensils className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Meal Plan:</strong> Breakfast & Dinner
                                    </span>
                                    </li>

                                    {/* Travel Time */}
                                    <li className="flex items-center">
                                    <FaClock className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Travel Time:</strong> Sigiriya to Kandy - 2 hours (approx.)
                                    </span>
                                    </li>

                                    {/* Transfer Mode */}
                                    <li className="flex items-center">
                                    <FaCarSide className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Transfer Mode:</strong> Private Car (Air Conditioned)
                                    </span>
                                    </li>
                                </ul>
                            </div>
                            <br/>


                            <h4 className="text-lg font-semibold">Day 03 -<span >Nuwara Eliya</span> </h4>
                            <p className="font-semibold mt-3">Nuwara Eliya</p>
                            <p className="text-slate-400 mt-3">Located in the elevated south-central region of Sri Lanka, Nuwara Eliya is a travel destination one should never miss while on their Sri Lanka vacation. As Sri Lanka is a tropical country with high humidity, Nuwara Eliya was favored by the British during colonization for its exceptionally cold climate. Thus, European flora and fauna and European fruits like strawberries were grown. On this day of Sri Lanka trip package, you get the chance to taste the highest quality Ceylon tea produced in Sri Lanka. Then you visit the strawberry farm, all while enjoying the British vibe that is unique for this tropical country. The elegant mountains blanketed by the foggy chill, foamy streams of waterfalls, and the beautiful parks and rivers have made the perfect Sri Lanka vacation getaway for your family! </p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                                <li className="text-slate-400 mt-3">Enjoy the mouth-watering buffet breakfast at the hotel</li>
                                <li className="text-slate-400 mt-3">Proceed to Nuwara Eliya (Little England)</li>
                                <li className="text-slate-400 mt-3">Stop by at a gem mining station</li>
                                <li className="text-slate-400 mt-3">Know about Most famous Gems in Sri Lanka</li>
                                <li className="text-slate-400 mt-3">Enroute enjoy the lush tea plantations</li>
                                <li className="text-slate-400 mt-3">Stop by to sip a cup of famous Ceylon tea'</li>
                                <li className="text-slate-400 mt-3">Collect memories by beautiful waterfalls in the hill country</li>
                                <li className="text-slate-400 mt-3">Later, check-in to your cozy hotel</li>
                                <li className="text-slate-400 mt-3">An evening visit to the sacred Sita Amman Kovil</li>
                                <li className="text-slate-400 mt-3">Have a picnic at the famous Gregory lake premises with scenic beauty</li>
                                <li className="text-slate-400 mt-3">Cycle through the wonderful Gregory Park facing the sunset</li>
                                <li className="text-slate-400 mt-3">Overnight stay at the hotel</li>
                            </ul>
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> The Blackpool (4 Star Hotel)
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
                                        <strong>Travel Time:</strong> Kandy to Nuwara Eliya - 1 hour 15min (approx.)
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
                            <p className="text-slate-400 mt-3">Venture into the wilderness! The adventure begins on the fifth day of your Sri Lanka vacation package. The Yala national park is the most visited of its kind in Sri Lanka vacations for the breathtaking wild safari it offers. Excited, you dive into the forest in safari jeeps with experienced guides. Few minutes into the jungle and the magic begins. You spot a beautiful peacock dancing, spotted deer, majestic leopards, reptiles, and flocks of vibrant birds. Suddenly a herd of gigantic elephants greet you on the wild trails and, you buckle up just in case things get wilder! Yala National Park is a must-visit in Sri Lanka travel packages. The beaming faces of everyone returning from the jungle say it all! You enjoy the sunset as you hear a guide say, ‘‘everything that happens meanwhile would be unplanned and untamed!” </p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Enjoy the cool mystic hills in Nuwara Eliya</li>
                            <li className="text-slate-400 mt-3">Take a walk around a beautiful tea plantation</li>
                            <li className="text-slate-400 mt-3">Enjoy an English-style breakfast at the hotel</li>
                            <li className="text-slate-400 mt-3">Check out from the hotel and leave the cold weather</li>
                            <li className="text-slate-400 mt-3">Proceed to tropical Yala National Park</li>
                            <li className="text-slate-400 mt-3">On the way, visit Ambewela farms</li>
                            <li className="text-slate-400 mt-3">Witness how fresh dairy products are made</li>
                            <li className="text-slate-400 mt-3">Check in to the hotel in Yala</li>
                            <li className="text-slate-400 mt-3">Experience an adventurous wildlife safari</li>
                            <li className="text-slate-400 mt-3">Sightsee Sri Lankan leopard, wild boar, peacock, and elephant</li>
                            <li className="text-slate-400 mt-3">The safari may take up to 3-4 hours</li>
                            <li className="text-slate-400 mt-3">Relax and stay overnight at the hotel in the wilderness</li>
                            <li className="text-slate-400 mt-3">BBQ dinner will be arranged at the hotel in the jungle</li>

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
                                        <strong>Travel Time:</strong> Nuwara Eliya to Yala - 3 hour 30min (approx.)
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


                            <h4 className="text-lg font-semibold">Day 06 & 07 -<span >Bentota</span> </h4>
                            <p className="font-semibold mt-3">Bentota</p>
                            <p className="text-slate-400 mt-3">From the jungle and into the wild waves! The charming lagoon by the southwest corner of the island, Bentota: is a magnetic destination for Sri Lanka vacations among locals and foreigners alike. This town has some of the best holiday resorts in Sri Lanka and offers numerous water activities. You enjoy your Sri Lanka vacation with your family by speed boat riding, diving, kite surfing, and paddleboarding till the sunset. There is something for everyone in Bentota! After challenging the wild turquoise waters, you go whale watching and visit the Kosgoda Turtle Hatchery on the next day. By the end of this Sri Lanka vacation package, you have experienced marine life to the fullest! The evening walk in the city is beautiful, and you fall in love with it though it’s time to leave. </p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities Day 06</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Wake up to the sound of elephants in the jungle</li>
                            <li className="text-slate-400 mt-3">Enjoy a grand buffet breakfast at the hotel</li>
                            <li className="text-slate-400 mt-3">Enjoy a variety of tropical fruits</li>
                            <li className="text-slate-400 mt-3">Proceed to the tropical paradise of Bentota beach</li>
                            <li className="text-slate-400 mt-3">Sightsee stilt fishermen on the beach</li>
                            <li className="text-slate-400 mt-3">Experience a boat ride in Madu river witnessing the biodiversity</li>
                            <li className="text-slate-400 mt-3">Explore the Mangrove forests and their ecology</li>
                            <li className="text-slate-400 mt-3">Check in to the beautiful beach hotel and relax</li>
                            <li className="text-slate-400 mt-3">Wine down with famous Sri Lanka made Lion Beer</li>
                            <li className="text-slate-400 mt-3">BBQ dinner by the salty beach</li>
                            <li className="text-slate-400 mt-3">Overnight stay at the beach hotel</li>

                            </ul>

                            <p className="font-semibold mt-3">Activities Day 07</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Wake up to a beautiful morning by the beach</li>
                            <li className="text-slate-400 mt-3">Seafood buffet breakfast overlooking the beach waves</li>
                            <li className="text-slate-400 mt-3">Take part in the famous historic Galle city tour</li>
                            <li className="text-slate-400 mt-3">Listen to the interesting tales about Galle fort</li>
                            <li className="text-slate-400 mt-3">Admire the beauty of colonial architecture in Galle</li>
                            <li className="text-slate-400 mt-3">Get back to the beach hotel and relax</li>
                            <li className="text-slate-400 mt-3">Engage in water sports- Jet Ski, banana boating, speed boat, etc.</li>
                            <li className="text-slate-400 mt-3">Enjoy a Sri Lankan cocktail while enjoying the sunset</li>
                            <li className="text-slate-400 mt-3">Taste the best Crab dishes in Asia with other seafood for dinner</li>
                            <li className="text-slate-400 mt-3">Sing along session at the hotel on the seashore</li>
                            <li className="text-slate-400 mt-3">Overnight stay at the beach hotel</li>

                                
                            </ul>
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> Taj Bentota Resort & Spa (5 Star Hotel)
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
                                        <strong>Travel Time:</strong> Yala Park to Bentota - 3 hour 30min (approx.)
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

                            <h4 className="text-lg font-semibold">Day 08 -<span >Colombo City</span> </h4>
                            <p className="font-semibold mt-3">Colombo City</p>
                            <p className="text-slate-400 mt-3">Colombo city offers a different taste from all the destinations of our Sri Lanka vacation packages. As the capital city of Sri Lanka, Colombo is buzzing day and night, and it declares a diverse culture. The tour around Colombo city: the last city of your Sri Lanka vacation amazes you because it is the only city in Sri Lanka that is well-blended with the European culture and traditional Sri Lankan culture. This Sri Lanka vacation package also includes visits to the Gangaramaya temple and old colonial buildings influenced by the British architecture, and they mesmerize you as you walk through them. As suggested by a friendly local, you taste the local favorite: the ‘isso wadey’ while enjoying the Galle Face beach sunset of red and orange hues – what a way to end a fabulous journey!</p>
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
                                        <strong>Accommodation:</strong> Hilton Colombo (5 Star Hotel)
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
                                        <strong>Travel Time:</strong> Bentota to Colombo - 1 hour 45min (approx.)
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