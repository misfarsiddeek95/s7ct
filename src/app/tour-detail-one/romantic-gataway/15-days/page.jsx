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

                        <h4 className="text-2xl font-semibold mt-5">Sri Lanka Vacation 15 Days</h4>
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
                            <h4 className="text-lg font-semibold">Day 01 -<span >Anuradhapura City</span> </h4>
                            <p className="font-semibold mt-3">Anuradhapura City</p>
                            <p className="text-slate-400 mt-3">Oh! To have the rare luck of exploring Sri Lanka in two whole weeks! The first of the destinations in your Sri Lanka vacation is Anuradhapura, one of the ancient capitals. The sacred city is brimming with stories to be discovered, which is why it is also a UNESCO world heritage site. The first historical site you visit in your Sri Lanka vacation package is Mihintale. The dodgy climb to Mihintale feels absolutely worthy as it greets you with a magnificent view along with insane winds. You discover the beauty of the ancient architecture in Ritigala Forest Monastery, Twin Baths (Kuttam Pokuna), and Ruwanweliseya! It’s still the first day of your Sri Lanka vacation, and you are already capturing everything you see!</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Arrival to the paradise island Sri Lanka (Bandaranaike International Airport)</li>
                            <li className="text-slate-400 mt-3">Warmly welcomed by an Olanka representative and your driver</li>
                            <li className="text-slate-400 mt-3">Proceed to ancient kingdom of Anuradhapura</li>
                            <li className="text-slate-400 mt-3">Check in at the lakefront hotel & refresh</li>
                            <li className="text-slate-400 mt-3">Take an ancient city tour in Anuradhapura</li>
                            <li className="text-slate-400 mt-3">Later, try Sri Lankan Lion beer at the hotel watching the lake</li>
                            <li className="text-slate-400 mt-3">Enjoy the typical Sri Lankan grand dinner buffet at the hotel</li>
                            <li className="text-slate-400 mt-3">Overnight stay in your calm hideaway in Anuradhapura</li>

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
                                        <strong>Travel Time:</strong> Airport to Anuradhapura - 4 hours (approx.)
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

                            <h4 className="text-lg font-semibold">Day 02 -<span >Polonnaruwa City</span> </h4>
                            <p className="font-semibold mt-3">Polonnaruwa City</p>
                            <p className="text-slate-400 mt-3">After Anuradhapura, Polonnaruwa is the second most iconic landmark in Sri Lanka, making it a must-visit in a Sri Lanka vacation package. You are amazed by the old ruins that you come across at each stop of your Sri Lanka vacation so far. You walk through the ruins of the seven-story Royal Palace of King Parakramabahu, his Audience Hall, the royal swimming pool, and many other ancient places. You feel like you are in the time of the kings! As you explore more of this city full of ancient ruins, you slowly realize how much of a rich history that it bears. In the evening, you sightsee the Parakrama reservoir and go for a village walk. It’s calming, and you love your Sri Lanka vacation for the rustic splendor of Polonnaruwa city.</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Wake up to bird chirpings on your first morning in the paradise</li>
                            <li className="text-slate-400 mt-3">Devour a colourful breakfast buffet at the hotel</li>
                            <li className="text-slate-400 mt-3">Check out and proceed to Polonnaruwa city</li>
                            <li className="text-slate-400 mt-3">Try a cup of worlds’ best tea; Ceylon tea</li>
                            <li className="text-slate-400 mt-3">Tour around the ancient Polonnaruwa city</li>
                            <li className="text-slate-400 mt-3">Walk through amazing 2500 years of documented history in Sri Lanka</li>
                            <li className="text-slate-400 mt-3">Check in at the hotel in the ruralness</li>
                            <li className="text-slate-400 mt-3">Later, cycle around the Polonnaruwa village</li>
                            <li className="text-slate-400 mt-3">Spend time with the friendly villagers</li>
                            <li className="text-slate-400 mt-3">Experience how simple life is in Sri Lanka</li>
                            <li className="text-slate-400 mt-3">Watch the breathtaking sunset by the lake</li>
                            <li className="text-slate-400 mt-3">Try an Ayurveda spa session in Polonnaruwa</li>
                            <li className="text-slate-400 mt-3">Taste a true Sri Lankan dinner buffet at the hotel</li>

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
                                        <strong>Travel Time:</strong> Anuradhapura to Polonnaruwa - 2 hours (approx.)
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


                            <h4 className="text-lg font-semibold">Day 03 -<span >Sigiriya</span> </h4>
                            <p className="font-semibold mt-3">Sigiriya</p>
                            <p className="text-slate-400 mt-3">With picturesque sunsets over acres of swaying paddy fields, Sigiriya is a humble town in your Sri Lanka vacation package. After exploring the prestigious history of Polonnaruwa, your heart is excited for more! A friendly local says that Sigiriya Rock Fortress is a must-visit in a Sri Lanka vacation, so you are eager for the hike. At the top of the rock, you meet the damsels of the Sigiriya painted by King Kashyapa’s artists. You enjoy the delicious cuisine in the local restaurants and end the day with a peaceful walk across the dancing paddy fields. It is calm, and you retreat to your hotel thinking of the adventures ahead in your Sri Lanka vacation.</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Wake up to a beautiful morning in Polonnaruwa</li>
                            <li className="text-slate-400 mt-3">Learn the basics of Buddhist meditation - Part 1</li>
                            <li className="text-slate-400 mt-3">Tropical fruits will energize your whole day</li>
                            <li className="text-slate-400 mt-3">Enjoy a delicious breakfast buffet overlooking the lake</li>
                            <li className="text-slate-400 mt-3">Proceed to Sigiriya city</li>
                            <li className="text-slate-400 mt-3">On the way, stop at Minneriya National Park</li>
                            <li className="text-slate-400 mt-3">Witness the largest Elephant gathering in the world</li>
                            <li className="text-slate-400 mt-3">Check in at the beautiful hotel</li>
                            <li className="text-slate-400 mt-3">Relax in the breezy humid weather</li>
                            <li className="text-slate-400 mt-3">Later visit the famous rock fortress in Sigiriya</li>
                            <li className="text-slate-400 mt-3">Wine down with a chill Sri Lankan beer - Lion Larger</li>
                            <li className="text-slate-400 mt-3">Enjoy the perfect dinner buffet full of local curries</li>

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
                                        <strong>Travel Time:</strong> Polonnaruwa to Sigiriya - 1 hour (approx.)
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


                            <h4 className="text-lg font-semibold">Day 04 -<span >Kandy</span> </h4>
                            <p className="font-semibold mt-3">Kandy</p>
                            <p className="text-slate-400 mt-3">Kandy, Sri Lanka’s capital city of culture, is a city never to miss on a Sri Lanka vacation. On the fourth day of your Sri Lanka vacation package, you visit the most sacred place in Sri Lanka; the Temple of Tooth, which protects the tooth relics of Lord Buddha. It is the relic of the real Buddha! This sacred tooth is covered in boxes of gold and jewels, and surprisingly, there are no armed guards to protect it! You take a walk in the city full of restaurants with incredible flavors of Sri Lankan cuisine. This Sri Lanka vacation costs too low for what it gives! You listen to the soft chanting of hymns, inspiring artifacts, people with warm gestures, and the relaxing feel of a calming evening. At this point, there is nothing more you would ask from your Sri Lanka vacation.  </p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Wake up to a beautiful morning in Sigirya</li>
                            <li className="text-slate-400 mt-3">Start your day with a yoga session</li>
                            <li className="text-slate-400 mt-3">Devour a tummy-filling breakfast buffet at the hotel</li>
                            <li className="text-slate-400 mt-3">Proceed to Kandy city</li>
                            <li className="text-slate-400 mt-3">Stop by at Dambulla cave complex & temple</li>
                            <li className="text-slate-400 mt-3">On the way, stop at Spice village</li>
                            <li className="text-slate-400 mt-3">Learn how world’s best spices are made in Sri Lanka</li>
                            <li className="text-slate-400 mt-3">Experience a colourful Sri Lankan lunch - rice & curry</li>
                            <li className="text-slate-400 mt-3">Check in at a luscious hotel in Kandy and refresh</li>
                            <li className="text-slate-400 mt-3">Visit the Temple of the Tooth in Kandy</li>
                            <li className="text-slate-400 mt-3">Witness Kandy culture dance show</li>
                            <li className="text-slate-400 mt-3">Enjoy a scrumptious dinner buffet at the hotel</li>
                            <li className="text-slate-400 mt-3">Wine down with a singing session at the hotel</li>
                            <li className="text-slate-400 mt-3">Don’t forget your chill Sri Lankan beer</li>
                            <li className="text-slate-400 mt-3">Overnight stay in the hotel under starry skies</li>

                            </ul>
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                  
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> Mahaweli Reach (5 Star Hotel)
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
                                        <strong>Travel Time:</strong> Sigiriya to Kandy - 2 hours (approx.)
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


                            <h4 className="text-lg font-semibold">Day 05 -<span >Nuwara-Eliya</span> </h4>
                            <p className="font-semibold mt-3">Nuwara-Eliya</p>
                            <p className="text-slate-400 mt-3">Off to Nuwara Eliya on the fifth day of our thrilling Sri Lanka vacation! Now, this is a landscape that is entirely different from the whole of your Sri Lanka vacation, so much so that it is called Little England. The foamy waterfalls like Laxapana, St. Clair’s, and Ramboda, charming rows of tea plantations, the world-famous Ceylon tea factories, European-style buildings, and the vegetable farms have left you mesmerized. This Sri Lanka vacation package includes a stroll in the enticing Victoria Park. You realize that Nuwara Eliya, as a popular Sri Lanka vacation destination, is covered with emerald greenery. In the evening, you visit Lake Gregory and find a nice spot for a picnic with your family. You end the day with a warm cup of Ceylon tea to blend in with the chill!</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Wake up to the chilly morning in Kandy</li>
                            <li className="text-slate-400 mt-3">Start your day with some yoga</li>
                            <li className="text-slate-400 mt-3">Enjoy a tummy-filling breakfast buffet at the hotel</li>
                            <li className="text-slate-400 mt-3">Check out from the hotel</li>
                            <li className="text-slate-400 mt-3">Proceed to Nuwara Eliya in the hill country</li>
                            <li className="text-slate-400 mt-3">Get to know how world famous Sri Lankan gems are made</li>
                            <li className="text-slate-400 mt-3">Visit handicraft & handmade-batik shops</li>
                            <li className="text-slate-400 mt-3">Visit at tea estate & pluck your own tea bag</li>
                            <li className="text-slate-400 mt-3">Get to know world famous Ceylon tea is made</li>
                            <li className="text-slate-400 mt-3">Try your hot cup of Ceylon tea observing the emerald tea gardens</li>
                            <li className="text-slate-400 mt-3">Check in at your colonial style hotel Nuwara Eliya</li>
                            <li className="text-slate-400 mt-3">Devour a colonial style dinner buffet at the hotel</li>
                            <li className="text-slate-400 mt-3">Enjoy your night with a cold Sri Lankan Lion beer</li>

                            </ul>

                            
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong>  The Blackpool (4 Star Hotel)
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
                                        <strong>Travel Time:</strong> Kandy to Nuwara Eliya - 2 hours (approx.)
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

                            <h4 className="text-lg font-semibold">Day 06 -<span >Ella</span> </h4>
                            <p className="font-semibold mt-3">Ella</p>
                            <p className="text-slate-400 mt-3">There’s no wonder why Ella is in every Sri Lanka vacation package. You take the train from Nuwara Eliya to Ella, and you experience one of the most beautiful train rides in the world-what a streak of stunning views! You arrive at Ella and head straight to the awe-striking Nine Arch Bridge surrounded by emerald greenery. Your Sri Lanka vacation includes zip-lining over the neat tea fields, which is one to experience. A Sri Lanka vacation in Ella is never complete without a swim in the natural pools of Diyaluma Falls. As you feel the foamy water relaxing your whole body, you immerse in nature. You enjoy the light flurry of air as it gently kisses your cheeks as you walk around the beautiful village in the evening – perfection!</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li className="text-slate-400 mt-3">Wake up to the misty mountains in Nuwara Eliya</li>
                            <li className="text-slate-400 mt-3">Start your day with a fresh cup of Ceylon tea</li>
                            <li className="text-slate-400 mt-3">Take a morning walk around the tea villages</li>
                            <li className="text-slate-400 mt-3">Enjoy your breakfast buffet of local and foreign cuisine</li>
                            <li className="text-slate-400 mt-3">Check out and proceed to Ella city</li>
                            <li className="text-slate-400 mt-3">Try out our strawberries & fresh milkshakes</li>
                            <li className="text-slate-400 mt-3">Experience the breathtaking train ride in Ella</li>
                            <li className="text-slate-400 mt-3">Bath in the natural pools of breathtaking Waterfalls</li>
                            <li className="text-slate-400 mt-3">Walk through the hill country vegetation</li>
                            <li className="text-slate-400 mt-3">Check in at your lovely hotel in Ella & refresh</li>
                            <li className="text-slate-400 mt-3">Visit Ella gap</li>
                            <li className="text-slate-400 mt-3">Visit the Mini Adam’s peek in Ella</li>
                            <li className="text-slate-400 mt-3">Visit world famous Nine Arch bridge</li>
                            <li className="text-slate-400 mt-3">Enjoy a hot and grand dinner buffet in the cold night</li>
                            <li className="text-slate-400 mt-3">Overnight stay in Ella hotel overlooking mountains</li>


                            </ul>

                            
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong>  98 Acres Resort & Spa (4 Star Hotel)
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
                                        <strong>Travel Time:</strong> Nuwara Eliya to Ella - 3 hours 30min (approx.)
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

                            <h4 className="text-lg font-semibold">Day 06 -<span >Udawalawa</span> </h4>
                            <p className="font-semibold mt-3">Udawalawa</p>
                            <p className="text-slate-400 mt-3">Udawalawa National Park, the next destination of your incredible Sri Lanka vacation package: is stationed in the South Central region of the tropical island. On this day of your Sri Lanka vacation, you venture into the wilderness, away from the cold weather of luxurious Little England! You buckle up your seat belts because you know it is going to get rough and wild! For you, the main attractions of this wildlife sanctuary are Water Buffalo, Wild boar, different species of Deer, wild Asian Elephants, and exceptional birdlife. It is the perfect Sri Lanka vacation package for you. You visit the Elephant Transit Home and fall in love with the adorable and playful elephants who often try to peep into the safari jeeps! </p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            
                            <li class="text-slate-400 mt-3">Wake up to the misty mountains in Nuwara Eliya</li>
                            <li class="text-slate-400 mt-3">Start your day with a fresh cup of Ceylon tea</li>
                            <li class="text-slate-400 mt-3">Take a morning walk around the tea villages</li>
                            <li class="text-slate-400 mt-3">Enjoy your breakfast buffet of local and foreign cuisine</li>
                            <li class="text-slate-400 mt-3">Check out and proceed to Ella city</li>
                            <li class="text-slate-400 mt-3">Try out our strawberries & fresh milkshakes</li>
                            <li class="text-slate-400 mt-3">Experience the breathtaking train ride in Ella</li>
                            <li class="text-slate-400 mt-3">Bath in the natural pools of breathtaking Waterfalls</li>
                            <li class="text-slate-400 mt-3">Walk through the hill country vegetation</li>
                            <li class="text-slate-400 mt-3">Check in at your lovely hotel in Ella & refresh</li>
                            <li class="text-slate-400 mt-3">Visit Ella gap</li>
                            <li class="text-slate-400 mt-3">Visit the Mini Adam’s peek in Ella</li>
                            <li class="text-slate-400 mt-3">Visit world famous Nine Arch bridge</li>
                            <li class="text-slate-400 mt-3">Enjoy a hot and grand dinner buffet in the cold night</li>
                            <li class="text-slate-400 mt-3">Overnight stay in Ella hotel overlooking mountains</li>


                            </ul>

                            
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong>  Kalus Hideaway (3 Star Hotel)
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
                                        <strong>Travel Time:</strong> Ella to Udawalawe - 1 hour 45min (approx.)
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

                            <h4 className="text-lg font-semibold">Day 08 -<span >Yala</span> </h4>
                            <p className="font-semibold mt-3">Yala</p>
                            <p className="text-slate-400 mt-3">You missed the sight of the magnificent leopards during the Udawalawa Safari. However, this Sri Lanka vacation package includes a tour back into the wilderness from a wildlife safari at Yala! You get in the jeep escorted by an experienced guide, and as the ride becomes adventurous, you get excited. Suddenly, a herd of gigantic wild elephants blocks your road, and you take out your camera and film the adventure! After all, the memories at Yala are too nerve-kicking to stay only with you; they are worth a share! Finally, you see the glorious leopards and the mesmerizing peacock dance. This Sri Lanka vacation package is surely a one of a kind. By the end of this Sri Lanka vacation, you fulfill your wish to sight-see the majestic leopards of Sri Lanka. – Lucky you!</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li class="text-slate-400 mt-3">Wake up to the sounds of wilderness in the jungle</li>
                            <li class="text-slate-400 mt-3">Take early morning bicycle ride around the villages in Udawalawa</li>
                            <li class="text-slate-400 mt-3">Savour a delightful breakfast buffet by the lake</li>
                            <li class="text-slate-400 mt-3">Taste our fresh tropical fruits for a sweet dessert</li>
                            <li class="text-slate-400 mt-3">Later check out from the Udawalawa hotel</li>
                            <li class="text-slate-400 mt-3">Proceed to more wildlife in Yala National Park</li>
                            <li class="text-slate-400 mt-3">Check in at the tropical hotel in Yala</li>
                            <li class="text-slate-400 mt-3">Culinary experience - Learn how to make Sri Lanka chicken curry</li>
                            <li class="text-slate-400 mt-3">In the evening, gear up for the 4 x 4 jungle safari</li>
                            <li class="text-slate-400 mt-3">Magnificent leopards are your prime sights to spot</li>
                            <li class="text-slate-400 mt-3">Enjoy the grand dinner buffet at the hotel</li>
                            <li class="text-slate-400 mt-3">Overnight stay in Yala hotel</li>

                            </ul>

                            
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong>  Jetwing Yala (4 Star Hotel)
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
                                        <strong>Travel Time:</strong>  Udawalawe to Yala - 1 hour 45min (approx.)
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

                            <h4 className="text-lg font-semibold">Day 09 -<span >Mirissa</span> </h4>
                            <p className="font-semibold mt-3">Mirissa</p>
                            <p className="text-slate-400 mt-3">Your Sri Lanka vacation just got more adventurous! Mirissa paradise is for beach lovers like you. You jump right into the pristine sea and wade into the turquoise waters. You go snorkeling and scuba diving to discover the aquatic life under the sea. As per your Sri Lanka vacation package, you go fishing in the deep sea with the local fishermen. You saw whales and dolphins in the blue waters! As suggested by our Sri Lanka vacation team, you spend a rejuvenating time enjoying massages in the local spas filled with entangling herbal aroma. In the evening, you rent a bicycle and wander around as there are countless artistic boutiques and attractive streets on this marine coast of Sri Lanka.</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li class="text-slate-400 mt-3">Wake up to the surrounding wilderness</li>
                            <li class="text-slate-400 mt-3">Have your Sri Lankan breakfast buffet at the hotel</li>
                            <li class="text-slate-400 mt-3">Proceed to the beautiful Mirissa beach</li>
                            <li class="text-slate-400 mt-3">Check in at the beach hotel</li>
                            <li class="text-slate-400 mt-3">Start enjoying the warm sea and golden shore</li>
                            <li class="text-slate-400 mt-3">Surf lovers can surf their heart out</li>
                            <li class="text-slate-400 mt-3">Enjoy the whale & dolphin watching Excursion</li>
                            <li class="text-slate-400 mt-3">Chill beer or Sri Lankan style cocktails? Choice is yours</li>
                            <li class="text-slate-400 mt-3">Enjoy the beautiful sunset by the beach</li>
                            <li class="text-slate-400 mt-3">Learn how to make the famous Sri Lankan Crab Curry</li>
                            <li class="text-slate-400 mt-3">Enjoy the grand seafood dinner buffet rich in flavor</li>

                            </ul>

                            
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong>  Mandara Resort Mirissa (4 Star Hotel)
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
                                        <strong>Travel Time:</strong> Yala to Mirissa - 2 hours 45min (approx.)
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

                            <h4 className="text-lg font-semibold">Day 10 -<span >Sinharaja</span> </h4>
                            <p className="font-semibold mt-3">Sinharaja</p>
                            <p className="text-slate-400 mt-3">You wake up to the chirping of the birds and look through the window of your cozy hotel room. You smell the tropical fruit trees surrounding you in the lush forest. You are in Sinharaja, and it’s a beautiful morning full of life. Like all other destinations in our Sri Lanka vacation packages, the unlimited breakfast buffet takes you to the moon with its delicious Sri Lankan cuisine. You start trekking the jungle, and your Sri Lanka vacation just got better: You come across a natural water spring. After exploring the adventurous yet soul-touching Sinharaja forest, you walk through the beautiful Sinharaja village. The tropical weather is just right to chug some Sri Lankan Lion Beer, which foreigners love; the best way to end a chilly night of a Sri Lanka vacation.</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li class="text-slate-400 mt-3">Wake up to the lullaby of the salty beach waves</li>
                            <li class="text-slate-400 mt-3">Trail along the morning sun-kissed beach</li>
                            <li class="text-slate-400 mt-3">Have your delicious breakfast buffet by the beach</li>
                            <li class="text-slate-400 mt-3">Check out & proceed to Sinharaja Rain Forest</li>
                            <li class="text-slate-400 mt-3">Trek Sinharaja Rain Forest full of life and humidity</li>
                            <li class="text-slate-400 mt-3">Check in at luxury jungle hotel & refresh</li>
                            <li class="text-slate-400 mt-3">Later visit Toddy (made from Kithul tree) huts</li>
                            <li class="text-slate-400 mt-3">Enjoy your dinner buffet overlooking the rainforest</li>
                            <li class="text-slate-400 mt-3">Overnight stay at Sinharaja Rainforest Hotel</li>

                            </ul>

                            
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong>  The Rainforest Ecolodge (3 Star Hotel)
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
                                        <strong>Travel Time:</strong> Mirissa to Sinharaja - 2 hours 45min (approx.)
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

                            <h4 className="text-lg font-semibold">Day 11 -<span >Galle</span> </h4>
                            <p className="font-semibold mt-3">Galle</p>
                            <p className="text-slate-400 mt-3">A Sri Lanka vacation is a mixture of feelings with a blend of contrasting locations. Your Sri Lanka vacation package includes a beautiful town called Galle, on the South West coast. So you visit the Galle Fort beside the rippling sea waves. Later you cycle through the streets that mirror architecture influenced by the Dutch, British and Portuguese rule. You are an antique enthusiast, and this Galle vacation package is sending you over the moon! You stop by the Maritime Archeology Museum that houses boats and other old items from century-old shipwrecks. Then you walk into the Historical Mansion Museum, one of the biggest in the world, and you find traditional arts and crafts. You shop at the elegant Dutch hospital shopping precinct, which has a line of restaurants, boutiques, and bars to relax in.</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li class="text-slate-400 mt-3">Wake up to the beautiful greenery filled with bird-songs</li>
                            <li class="text-slate-400 mt-3">Have a humungous breakfast buffet at the hotel</li>
                            <li class="text-slate-400 mt-3">Proceed to Galle city</li>
                            <li class="text-slate-400 mt-3">On the way, stop to see stilt fishermen in Sri Lanka</li>
                            <li class="text-slate-400 mt-3">Experience unique fishing techniques in Sri Lanka</li>
                            <li class="text-slate-400 mt-3">Take part in the famous Madu River boat ride</li>
                            <li class="text-slate-400 mt-3">Visit the adorable turtles at a turtle hatchery</li>
                            <li class="text-slate-400 mt-3">Check in at the beach hotel in Galle</li>
                            <li class="text-slate-400 mt-3">Dive in for water activities in the Indian ocean</li>
                            <li class="text-slate-400 mt-3">Visit the ancient Galle fort (Dutch fort)</li>
                            <li class="text-slate-400 mt-3">Take a walk around the Galle fort</li>
                            <li class="text-slate-400 mt-3">Taste the famous Sri Lankan crab for dinner</li>
                            <li class="text-slate-400 mt-3">Enjoy your night in local pubs</li>
                            <li class="text-slate-400 mt-3">Overnight stay in the hotel in Galle</li>

                            </ul>

                            
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong>  Garton's Cape (4 Star Hotel)
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
                                        <strong>Travel Time:</strong> Sinharaja to Galle - 3 hours (approx.)
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

                            <h4 className="text-lg font-semibold">Day 12 -<span >Hikkaduwa</span> </h4>
                            <p className="font-semibold mt-3">Hikkaduwa</p>
                            <p className="text-slate-400 mt-3">On your Sri Lanka vacation, Hikkaduwa is a place that keeps you busy with many fun activities. You rent some snorkeling gear and get onto a boat and swim into the Hikkaduwa coral reef. After a good time in the deep sea, you take a boat ride at the Madu river and experience wildlife like beautiful birds, crocodiles, and monkeys. The Hikkaduwa vacation package is incomplete without an Ayurvedic spa treatment to refresh you after all the tiring activities. After having a good time at the Turtle hatchery, you enjoy the best local seafood in this Sri Lanka vacation. During the night, you go to a bar and feel the beachy ambiance with some live music as you hear the waves sing along with you. How satisfying is that!?</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li class="text-slate-400 mt-3">Devour a delicious breakfast buffet at the hotel</li>
                            <li class="text-slate-400 mt-3">Proceed to Hikkaduwa beach</li>
                            <li class="text-slate-400 mt-3">Check in to the tropical hotel on beach</li>
                            <li class="text-slate-400 mt-3">Enjoy a wide range of water sports at the sea</li>
                            <li class="text-slate-400 mt-3">Feed turtles on the beach</li>
                            <li class="text-slate-400 mt-3">Snorkeling in shallow turquoise water</li>
                            <li class="text-slate-400 mt-3">Sink in the warm sea water and embrace the beautiful view</li>
                            <li class="text-slate-400 mt-3">Enjoy your night at the beach party with friendly locals</li>
                            <li class="text-slate-400 mt-3">Enjoy the buffet dinner & BBQ on the beach</li>

                            </ul>

                            
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong>  Garton's Cape (4 Star Hotel)
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
                                        <strong>Travel Time:</strong> Galle to Hikkaduwa - 20min (approx.)
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

                            <h4 className="text-lg font-semibold">Day 13 -<span >Colombo City</span> </h4>
                            <p className="font-semibold mt-3">Colombo City</p>
                            <p className="text-slate-400 mt-3">After two weeks of touring around the pearl island for the lowest Sri Lanka vacation cost, a city tour around Colombo is a treat. As the commercial capital, Colombo is gifted with scenic beauty, some of the best restaurants, and shopping complexes on the island. You walk through the Pettah market, which gives the feel of the down-to-earth lifestyle of the city life in Sri Lanka. A Colombo travel package always has a stop at the floating market. In this Sri Lanka vacation package, you get the chance to learn how to cook traditional Sri Lankan cuisine. While the day remains to be bustling, nightlife in Colombo is one for the party animals! You enjoy this night of your Sri Lanka vacation beside the spectacular beach under the starry skies.</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li class="text-slate-400 mt-3">Wake up to see the beautiful sunrise through the horizon</li>
                            <li class="text-slate-400 mt-3">Relax with a yoga session by the beach</li>
                            <li class="text-slate-400 mt-3">Enjoy an Indian ocean seafood buffet for breakfast</li>
                            <li class="text-slate-400 mt-3">Proceed to Colombo; the capital city of the paradise</li>
                            <li class="text-slate-400 mt-3">Go on a Colombo city tour & shopping tour</li>
                            <li class="text-slate-400 mt-3">Learn the basics of Buddhist meditation - Part 1</li>
                            <li class="text-slate-400 mt-3">Culinary experience 3 – How to make Sri Lankan Potato Curry</li>
                            <li class="text-slate-400 mt-3">Dinner at ‘Ministry of Crab’ – Best seafood restaurant in Sri Lanka</li>
                            <li class="text-slate-400 mt-3">Later visit local pubs with friendly locals</li>
                            <li class="text-slate-400 mt-3">VIP night club & casino for those interested</li>

                            </ul>

                            
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong>  Hilton Colombo (5 Star Hotel)
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
                                        <strong>Travel Time:</strong> Hikkaduwa to Colombo - 1hour 30min (approx.)
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

                            <h4 className="text-lg font-semibold">Day 05 -<span >Kalpitiya</span> </h4>
                            <p className="font-semibold mt-3">Kalpitiya</p>
                            <p className="text-slate-400 mt-3">Every goodbye does not have to be a sad one. Even though it is the last day of your Sri Lanka vacation, the excitement goes on. Kalpitiya is the haven for surfers and snorkelers. The surfer in you is a little tired today, so you hop into a boat and go whale and dolphin watching. As the adorable dolphins flock around your boat to greet everyone who came to visit them, you capture the moment to treasure it. Tasting local seafood is a must in a Sri Lanka vacation package. After a mouthwatering meal, you visit the Kalpitiya Dutch Fort built using coral and limestone in the 16th century. Your Sri Lanka vacation ends here, but you embrace the memories it carries on your way back to the airport.</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                            <li class="text-slate-400 mt-3">Early morning yoga session at the luxury hotel</li>
                            <li class="text-slate-400 mt-3">Enjoy a grand breakfast buffet at the hotel</li>
                            <li class="text-slate-400 mt-3">Proceed to Kalpitiya Beach</li>
                            <li class="text-slate-400 mt-3">Endless water sports in the beach paradise</li>
                            <li class="text-slate-400 mt-3">Relax your soul by the beach</li>
                            <li class="text-slate-400 mt-3">Spend your last night in this tropical haven at the beach</li>
                            <li class="text-slate-400 mt-3">Enjoy the BBQ dinner prepared by the beach</li>

                            </ul>

                            
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong>  Dolphin Beach Resort (4 Star Hotel)
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
                                        <strong>Travel Time:</strong> Colombo to Kalpitiya - 3 hours (approx.)
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
                            <h4 className="text-lg font-semibold">Day 15 - Depature </h4>



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