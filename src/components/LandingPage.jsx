import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();

  const goToDashboard = () => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const goToCreateShortLink = () => {
    if (token) {
      navigate("/dashboard?openCreateModal=true");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
            Simplify Your Links with KittyURL
          </motion.h1>

          <p className="text-slate-600 mt-4 text-base md:text-lg my-5">
            KittyURL transforms long, messy URLs into sleek, shareable links in
            seconds. Whether you're promoting content, tracking performance, or
            just simplifying your sharing process — KittyURL makes it
            effortless.
          </p>

          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={goToDashboard}
              className="w-40 text-white rounded-md py-2"
              style={{ backgroundColor: "#FF7F3E" }}
            >
              Manage Links
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={goToCreateShortLink}
              className="border-btnColor border w-40 text-btnColor rounded-md py-2"
            >
              Create Short Link
            </motion.button>
          </div>
        </div>

        <div className="flex-1 flex justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[400px] object-cover rounded-md"
            src="/images/img2.png"
            alt="Landing Visual"
          />
        </div>
      </div>

      <div className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center font-roboto font-semibold text-2xl sm:text-3xl mb-10"
        >
          Trusted by individuals and teams at leading companies worldwide
        </motion.p>

        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Effortless URL Shortening"
            desc="Create concise, shareable URLs instantly with our sleek and user-friendly platform. Get started in seconds—no technical skills required."
          />
          <Card
            title="Insightful Analytics"
            desc="Track the performance of your links in real-time with detailed metrics, including click counts, geolocation, and traffic sources to maximize your impact."
          />
          <Card
            title="Secure & Private"
            desc="Benefit from enterprise-grade security and data encryption. Your URLs and analytics are safeguarded with strict privacy protocols."
          />
          <Card
            title="Blazing Fast & Reliable"
            desc="Experience instant redirects and 99.9% uptime thanks to our robust infrastructure. Share with confidence—your links are always live."
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
