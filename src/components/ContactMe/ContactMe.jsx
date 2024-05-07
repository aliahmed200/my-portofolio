import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { SiTelegram } from "react-icons/si";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import message from "../../Assets/pP5sOlHgC4.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("mjvnlzed");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="lg:flex flex-row-reverse justify-center items-center lg:-my-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <div className="flex-1">
        <Lottie animationData={message} />
      </div>
      <div className="flex-1">
        <p className="font-bold text-4xl mb-1">Contact Me</p>
        <p className="font-normal md:text-lg max-w-[750px] text-gray-400 mb-5 dark:text-zinc-800 tracking-wide nb-6">
          You're welcome to contact me for work or just to say hello.
        </p>
        <form onSubmit={handleSubmit} className="flex-col">
          <div className="pb-3">
            <label
              class="block text-white dark:text-zinc-800 text-sm font-bold mb-2"
              for="email"
            >
              Enter Your Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
              className="shadow appearance-none border rounded w-[50%] lg:w-[30%] py-2 px-3 bg-transparent text-white border-gray-300 leading-tight dark:text-zinc-800 dark:border-zinc-800"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="pb-5">
            <label
              class="block text-white dark:text-zinc-800 text-sm font-bold mb-2"
              for="message"
            >
              Enter Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              name="message"
              required
              class="block p-2.5 text-sm text-white w-[75%] lg:w-[50%] bg-transparent rounded-lg border border-gray-300 dark:text-zinc-800 dark:border-zinc-800"
              placeholder="Your Message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="border border-white dark:border-zinc-800 rounded-lg py-2 px-4 hover:bg-gray-300 dark:hover:bg-white hover:text-zinc-800 active:scale-75 transition mb-5"
          >
            Send Message
          </button>
        </form>
        <div>
          <p className="font-bold text-4xl mb-3">Connect with Me</p>
          <div className="flex flex-wrap gap-x-2">
            <a
              href="https://www.facebook.com/profile.php?id=100069281631238"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-6 rounded-lg bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/aliahmed200"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-6 rounded-lg bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://t.me/aliahmed_2000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-6 rounded-lg bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition"
            >
              <SiTelegram />
            </a>
            <a
              href="mailto:aliahmed60345@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-6 rounded-lg bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition"
            >
              <SiGmail />
            </a>
            <a
              href="whatsapp://send?phone=+201096929238"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-6 rounded-lg bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition"
            >
              <BsWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-ahmed-2579202a9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-6 rounded-lg bg-transparent border border-zinc-800 hover:text-zinc-800 hover:bg-gray-300 hover:scale-105 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
