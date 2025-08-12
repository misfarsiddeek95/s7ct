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
                        {/* <TourImageOne/> */}
                        <TourImage images= {kandy}/>

                        <h4 className="text-2xl font-semibold mt-5">Sri Lanka Tour Package 7 Days</h4>
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
                            <h4 className="text-lg font-semibold">Day 01 -<span >Sigiriya & Dambulla</span> </h4>
                            <p className="font-semibold mt-3">Sigiriya</p>
                            <p className="text-slate-400 mt-3">An essential destination of every Sri Lanka trips, the amazing ancient rock fortress of Sigiriya might strike one as a peculiar sight. Its round structure and its intricate ancient urban landscape surely astound the best of us! Declared as a world heritage by UNESCO, this massive column of rock once used to be the capital of an ancient Sri Lankan kingdom. As you step into Sigiriya rock, you are bound to be amazed by the infamous Sigiriya frescoes depicting the beautiful Lankan women of the fifth century. The Mirror Wall, providing an outlook of ancient poetry, gives you a glimpse into the lives of early visitors of the site. Moreover, you will be overwhelmed by the beauty of the Gardens of Sigiriya as you wonder about the intellect and ingenuity of the ancient minds at work. Topping the list of tourist destinations in our Sri Lanka tour packages, Sigiriya fortress is a captivating masterpiece of ancient urban landscape and architecture.</p>
                            <TourImage images= {Sigirya}/>
                            <p className="font-semibold mt-3">Dambulla</p>
                            <p className="text-slate-400 mt-3">Dambulla is an ancient city that offers many natural and spiritual wonders to be discovered. It is one of the most sought-after attractions in our Sri Lanka tour packages filled with dominance and epic grandeur. With its scenic spots such as the ironwood forest, the breathtaking rose quartz mountain, the world-famous Rangiri International Stadium, and the serene landscape of Na Uyana Aranya, the majestic city of Dambulla is sure to be one of your favorites in an adventurous Sri Lanka trip to explore and enjoy the magnificence of this ancient paradise. As you traverse this fascinating city, you are welcomed by the largest and well-preserved cave complex on the island, filled with rich and colorful paintings and sculptures depicting the bold history Lanka. Yes, you are absolutely right! This is your chance to grab the perfect adventurous and fun getaway on this beautiful tropical island.</p>
                            <TourImage images= {Dambull}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                                <li className="text-slate-400 mt-3">Arrive at Sri Lanka (Katunayake International Airport)</li>
                                <li className="text-slate-400 mt-3">Warm welcome from our Olanka representative and driver at the airport</li>
                                <li className="text-slate-400 mt-3">Proceed to the ancient city; Sigiriya</li>
                                <li className="text-slate-400 mt-3">Check in at the beautiful hotel and refresh</li>
                                <li className="text-slate-400 mt-3">Enter the famous Sigiriya Rock Fortress and Frescoes</li>
                                <li className="text-slate-400 mt-3">Enjoy a wonderful Sri Lankan traditional boat ride</li>
                                <li className="text-slate-400 mt-3">Experience how Sri Lankan ancestors travelled through a cart ride</li>
                                <li className="text-slate-400 mt-3">Experience Sri Lankan culture in a truly village experience</li>
                                <li className="text-slate-400 mt-3">Enjoy the best cuisines the island has to offer</li>
                            </ul>

                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    {/* Accommodation */}
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> Amaya Lake (4 Star Hotel)
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
                                        <strong>Travel Time:</strong> Airport to Dambulla - 5 hour (approx.)
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

                            <h4 className="text-lg font-semibold">Day 02 -<span >Kandy</span> </h4>
                            <p className="font-semibold mt-3">Kandy</p>
                            <p className="text-slate-400 mt-3">Being an important and well-praised site among those of the Buddhist faith, Kandy is one of the favorites of our Sri Lanka tour packages. This historic city of majestic splendor will sweep you off your feet with its lush greenery and scenic mountain ranges. The mildly cool weather of the city refreshes you as you take a cheerful stroll through the Peradeniya Botanical Garden, appreciating its vibrant beauty. Home to a rich cultural heritage, Kandy will definitely provide you with a unique immersion into the local traditions, as you see the dancers dressed in colorful costumes with distinctive drums begin to perform the cultural dance, which is a unique and well-preserved aspect of Sri Lankan culture. After experiencing the mesmerizing activities that the city has to offer, you will be spending the night in a Kandy hotel overlooking a magnificent city waiting to be explored. Kandy surely is a place that will be in your heart for ever!</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                                <li className="text-slate-400 mt-3">Wake up to peacocks’ squawk early in the morning</li>
                                <li className="text-slate-400 mt-3">Enjoy a delightful local breakfast buffet</li>
                                <li className="text-slate-400 mt-3">Try some mouth-watering fresh tropical fruits</li>
                                <li className="text-slate-400 mt-3">Checkout from the hotel</li>
                                <li className="text-slate-400 mt-3">Proceed to the city of Kandy</li>
                                <li className="text-slate-400 mt-3">En route visit Dambulla Golden Cave temple</li>
                                <li className="text-slate-400 mt-3">Take a part in Sri Lanka Spice Village Trip</li>
                                <li className="text-slate-400 mt-3">Enjoy a colourful Sri Lankan style village lunch</li>
                                <li className="text-slate-400 mt-3">Check in at a beautiful hotel in Kandy and relax</li>
                                <li className="text-slate-400 mt-3">Visit the Temple of the Sacred Tooth Relic</li>
                                <li className="text-slate-400 mt-3">Witness a Sri Lankan traditional cultural show</li>
                                <li className="text-slate-400 mt-3">Devour a Sri Lankan style grand dinner buffet</li>
                                <li className="text-slate-400 mt-3">Overnight stay and relax at the hotel in Kandy</li>
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
                                        <strong>Travel Time:</strong> Dambulla to Kandy - 2 hours (approx.)
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
                            <p className="text-slate-400 mt-3">Among the top favorites of our Sri Lanka tour packages, Nuwara Eliya is a vibrant city that boasts acres of lush-green tea estates, soothingly chilly weather, and enchanting flora and fauna. Nuwara Eliya is a destination not to be missed when you are planning your trip to Sri Lanka, don’t miss Nuwara Eliya as it is a must-see destination. The opportunities at Nuwara Eliya are endless; from long walks in the beautiful parks at the heart of the city, to adventurous hikes through the highlands and tea plantations, this old colonial town never fails to impress one! As you wake up and fill your lungs with refreshingly pure air, your mind will wonder thinking what this charming town has to offer me today. Will you dine in one of the colonial Tudor-style buildings? Or, will you enjoy a fun horseback ride along the bank of Gregory Lake? Whatever your choice may be, the wonderful city of Nuwara Eliya is the perfect holiday destination in the beautiful island paradise of Sri Lanka!</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                                <li className="text-slate-400 mt-3">Enjoy the misty morning with a cup of iconic Ceylon tea</li>
                                <li className="text-slate-400 mt-3">Devour a humongous breakfast buffet at the hotel</li>
                                <li className="text-slate-400 mt-3">Proceed to Nuwara Eliya</li>
                                <li className="text-slate-400 mt-3">On the way, witness the Ramboda falls</li>
                                <li className="text-slate-400 mt-3">Stop over at world famous Labukale tea estate & plantation</li>
                                <li className="text-slate-400 mt-3">Experience Sri Lankan tea culture with a 'Tea Tour'</li>
                                <li className="text-slate-400 mt-3">Visit a strawberry farm & enjoy a fresh strawberry juice & shake</li>
                                <li className="text-slate-400 mt-3">Check in at a colonial-style hotel</li>
                                <li className="text-slate-400 mt-3">Later, visit Gregory Lake and watch the beautiful sunset</li>
                                <li className="text-slate-400 mt-3">Walk around 'The Little England' filled with friendly locals</li>
                            </ul>
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    {/* Accommodation */}
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> The Blackpool (4 Star Hotel)
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
                                        <strong>Travel Time:</strong> Kandy to Nuwara Eliya - 1 hour 15min (approx.)
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


                            <h4 className="text-lg font-semibold">Day 04 -<span >Yala National Park</span> </h4>
                            <p className="font-semibold mt-3">Yala National Park</p>
                            <p className="text-slate-400 mt-3">Being the most visited and second-largest national park on the island of Sri Lanka, Yala National Park is home to a myriad of wildlife species that completes the picturesque holiday destination offered by our Sri Lanka tour packages. As you step into the dense forests and vast grasslands teeming with the animal life of Yala, you find yourself becoming a part of nature. The safari experience at Yala is truly one of its kind, where you get to experience wildlife species on a personal yet thrilling level. We ensure to provide an experience that is sure to be memorable and rouse the adventurer in you. Yala hides many caves that contain centuries-old rock paintings, adding an air of mystery to the park. Are you an adventurer? Are you an explorer at heart? Then you should definitely visit Yala National Park on your next Sri Lanka trip! </p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities</p>

                            <ul className="list-disc list-inside">
                                <li className="text-slate-400 mt-3">Wake up feeling the chill and misty weather</li>
                                <li className="text-slate-400 mt-3">Experience the lush hotel surrounding by a walk</li>
                                <li className="text-slate-400 mt-3">Have a cup of fresh Ceylon tea</li>
                                <li className="text-slate-400 mt-3">Enjoy a grand breakfast buffet at the hotel</li>
                                <li className="text-slate-400 mt-3">Proceed to Yala national park</li>
                                <li className="text-slate-400 mt-3">Witness wonderful wildlife moments on the 4 x 4 Jeep safari</li>
                                <li className="text-slate-400 mt-3">Get back to the luscious hotel and refresh</li>
                                <li className="text-slate-400 mt-3">Later, visit the world famous Kataragama Hindu temple</li>
                                <li className="text-slate-400 mt-3">BBQ dinner time in the hotel</li>
                                <li className="text-slate-400 mt-3">Enjoy a BBQ dinner under the starry sky by the jungle</li>
                            </ul>
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    {/* Accommodation */}
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> Cinnamon Wild Yala (4 Star Hotel)
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
                                        <strong>Travel Time:</strong> AKandy to Yala National Park - 3 hour 30min (approx.)
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


                            <h4 className="text-lg font-semibold">Day 05 & 06 -<span >Bentota</span> </h4>
                            <p className="font-semibold mt-3">Bentota</p>
                            <p className="text-slate-400 mt-3">Whether you want to explore Sri Lanka with your family, your loved one, or by yourself, a trip to Sri Lanka not a completed one without a visit to the golden sandy beaches of Bentota! Also known as Paradise Island, the sandy stretch of Bentota beach bordering the lagoon is a popular tourist attraction in our Sri Lanka tour packages. This resort town on Sri Lanka’s Southern coast is a hub of watersports including surfing. A romantic boat ride to the nearby Madu River or a fun visit to the turtle hatchery to see the little ones are a few ways to make the most out of your time in Bentota. As you take a sip of the local toddy, you realize that Bentota is a true paradise. You watch the waves crashing to the shore, and the sun glistening on the sandy beach. Yes, this is why you should visit this tropical island of beauty to make memories that will last for ever!</p>
                            <TourImage images= {kandy}/>
                            <br/>
                            <p className="font-semibold mt-3">Activities Day 05</p>

                            <ul className="list-disc list-inside">
                                <li className="text-slate-400 mt-3">Wake up with the sounds of the wilderness</li>
                                <li className="text-slate-400 mt-3">Take a walk around the hotel and Yala village</li>
                                <li className="text-slate-400 mt-3">Enjoy a breakfast buffet rich in curry flavors</li>
                                <li className="text-slate-400 mt-3">Proceed to Bentota beach</li>
                                <li className="text-slate-400 mt-3">Visit a turtle hatchery to learn about Sri Lankan turtles</li>
                                <li className="text-slate-400 mt-3">Check in at the beachfront hotel & relax</li>
                                <li className="text-slate-400 mt-3">Engage in fun water sports activities in the Bentota sea</li>
                                <li className="text-slate-400 mt-3">Wine down with a cocktail/ Sri Lankan Lion beer</li>
                                <li className="text-slate-400 mt-3">Stroll along the orange beach when the sun sets</li>
                                <li className="text-slate-400 mt-3">Enjoy a grand seafood dinner buffet</li>
                                <li className="text-slate-400 mt-3">A relaxing overnight stay at the beach hotel</li>
                            </ul>

                            <p className="font-semibold mt-3">Activities Day 06</p>

                            <ul className="list-disc list-inside">
                                <li className="text-slate-400 mt-3">Wake up to see the beautiful sunrise at the beach</li>
                                <li className="text-slate-400 mt-3">Taste Asia’s best crab at the seafood breakfast buffet</li>
                                <li className="text-slate-400 mt-3">Proceed to Mirissa beach</li>
                                <li className="text-slate-400 mt-3">Sail to the sea to meet whales and dolphins</li>
                                <li className="text-slate-400 mt-3">Experience an amazing boat ride in Madu river through the mangroves</li>
                                <li className="text-slate-400 mt-3">Enjoy a relaxing fish therapy in Madu river</li>
                                <li className="text-slate-400 mt-3">Experience surfing in one of world’s greatest surfing destinations</li>
                                <li className="text-slate-400 mt-3">Overnight stay and relax at the tropical hotel</li>
                                
                            </ul>
                            <div className="bg-white p-6 rounded-md shadow-md">
                                <ul className="space-y-4">
                                    {/* Accommodation */}
                                    <li className="flex items-center">
                                    <FaHotel className="text-red-500 text-lg mr-3" />
                                    <span>
                                        <strong>Accommodation:</strong> Taj Bentota Resort & Spa (5 Star Hotel)
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
                                        <strong>Travel Time:</strong> Yala Park to Bentota - 3 hour 30min (approx.)
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