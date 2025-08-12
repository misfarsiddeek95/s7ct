"use client";

import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import MapModalTwo from "../components/map-modal-two";

import { FiPhone, FiMail, FiMapPin } from "../assets/icons/vander";
import emailjs from "@emailjs/browser";
import Tagline from "@/app/components/tagline";
import { message } from "antd";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm(
        "service_a182q5u",
        "template_egnptz7",
        form,
        "axl2XXWSLIvzNfhsi"
      )
      .then(
        (result) => {
          message.success("Message sent successfully!", result.text);
          alert("Details submitted successfully!");
          form.reset();
        },
        (error) => {
          message.error(
            "Failed to send the message. Please try again.",
            error.text
          );
          alert("Failed to send the details. Please try again.");
        }
      );
  };

  return (
    <>
      <Tagline />
      <Navbar
        navclass="defaultscroll is-sticky tagline-height"
        navlight={false}
        manuclass="justify-end"
      />
      {/*<div className="container-fluid relative mt-20">*/}
      {/*    <div className="grid grid-cols-1">*/}
      {/*        <div className="w-full leading-[0] border-0">*/}
      {/*            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: '0' }} title="travosy" className="w-full h-[500px]"></iframe>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}
      <section className="relative lg:py-40 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="lg:col-span-7 md:col-span-6">
              <Image
                src="/images/travel-train-station.svg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="w-full max-w-[500px] mx-auto"
                alt=""
              />
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-semibold">
                    Get in touch !
                  </h3>

                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="to_name" value="S7 Travels" />
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                      <div className="lg:col-span-6">
                        <label htmlFor="name" className="font-semibold">
                          Your Name:
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Name :"
                          required
                        />
                      </div>

                      <div className="lg:col-span-6">
                        <label htmlFor="email" className="font-semibold">
                          Your Email:
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Email :"
                          required
                        />
                      </div>

                      <div className="lg:col-span-12">
                        <label htmlFor="subject" className="font-semibold">
                          Your Question:
                        </label>
                        <input
                          name="subject"
                          id="subject"
                          className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Subject :"
                          required
                        />
                      </div>

                      <div className="lg:col-span-12">
                        <label htmlFor="comments" className="font-semibold">
                          Your Comment:
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          placeholder="Message :"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-2"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <FiPhone></FiPhone>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="h5 text-lg font-semibold">Phone</h5>
                <p className="text-slate-400 mt-3">
                  Your journey begins here—call us anytime!
                </p>

                <div className="mt-5">
                  <Link
                    href="tel:+94766086665"
                    className="text-red-500 font-medium"
                  >
                    +94 (76) 608 6665
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <FiMail></FiMail>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="h5 text-lg font-semibold">Email</h5>
                <p className="text-slate-400 mt-3">
                  Reach us anytime—your adventure awaits in your inbox!
                </p>

                <div className="mt-5">
                  <Link
                    href="mailto:contact@example.com"
                    className="text-red-500 font-medium"
                  >
                    s7travels95@gmail.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <FiMapPin></FiMapPin>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="h5 text-lg font-semibold">Location</h5>
                <p className="text-slate-400 mt-3">
                  307/18, Thummodara
                  <br /> Nattandiya.
                </p>

                <MapModalTwo />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
