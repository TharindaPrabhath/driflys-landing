// next
import Image from "next/Image";
import Link from "next/link";

import Page from "../components/Page";
import { common } from "../constants";
import LandingLayout from "../layouts/landing.layout";

// images
import Design from "../public/features/Design.png";
import StatusTrack from "../public/features/StatusTrack.png";
import Verify from "../public/features/Verify.png";
import Share from "../public/features/Share.png";
import OnlineView from "../public/features/OnlineView.png";
import OnlineViewHeading from "../public/features/OnlineViewHeading.svg";
import BrandPromote from "../public/features/BrandPromote.png";

const Home = () => {
  return (
    <Page
      title="Driflys"
      meta={
        <>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </>
      }
    >
      <section id="hero" className="relative h-5/6 md:h-screen">
        <div className="container flex flex-col justify-center py-14 lg:pt-28 gap-12 md:items-center md:text-center z-10">
          <div>
            <h1 className="font-Exo2 text-4xl md:text-6xl font-bold max-w-2xl">
              Create design & send{" "}
              <span className="text-blue-700">certificates</span> hassle freely
            </h1>
            <p className="text-lg text-gray-500 tracking-wide mt-4 max-w-2xl">
              Issue digital certificates, promote your brand by admiring the
              audience. We can help you.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:w-3/5">
            <input
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 text-lg"
              type="email"
              placeholder="Enter your Email"
            />
            <button className="bg-blue-700 text-white font-semibold tracking-wide px-10 py-2 rounded-lg min-w-fit hover:bg-blue-600">
              Notify Me
            </button>
          </div>

          <div className="flex justify-between items-center md:w-96">
            <SocialIcon
              href="https://facebook.com"
              alt="facebook"
              src={common.socialMedia.color.facebook}
            />
            <SocialIcon
              href="https://twitter.com"
              alt="twitter"
              src={common.socialMedia.color.twitter}
            />
            <SocialIcon
              href="https://instagram.com"
              alt="instagram"
              src={common.socialMedia.color.instagram}
            />
            <SocialIcon
              href="https://youtube.com"
              alt="youtube"
              src={common.socialMedia.color.youtube}
            />
            <SocialIcon
              href="https://linkedin.com"
              alt="linkedin"
              src={common.socialMedia.color.linkedIn}
            />
          </div>
        </div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-blue-700 filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute -top-40 -right-20 w-96 h-96 rounded-full bg-slate-800 filter blur-3xl opacity-30 -z-10"></div>
      </section>

      <section id="features" className="bg-white">
        <div className="container py-20 flex flex-col gap-40 lg:px-20">
          {/* Feature 1 */}
          <div className="flex flex-col justify-center items-center gap-12 lg:flex-row lg:justify-between lg:gap-12">
            <div className="w-3/4 max-w-lg lg:3/4">
              <Image
                src={Design}
                alt="Design Certificates"
                layout="responsive"
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-4 lg:items-start">
              <h1 className="font-bold text-center text-4xl lg:text-6xl lg:text-left">
                <span className="text-blue-700">Design</span> certificates the
                way you want
              </h1>
              <p className="text-gray-500 text-center lg:text-lg lg:text-left md:w-3/4">
                You can customize the look & feel of your certificates by using
                our drag n drop builder{" "}
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col justify-center items-center gap-12 lg:flex-row-reverse lg:justify-between lg:gap-12">
            <div className="w-2/5 max-w-xs md:w-1/5">
              <Image src={StatusTrack} alt="Status Track" layout="responsive" />
            </div>

            <div className="flex flex-col justify-center items-center gap-4 lg:items-start">
              <h1 className="font-bold text-center text-4xl lg:text-6xl lg:text-left">
                Deliver with <span className="text-blue-700">Confident</span>
              </h1>
              <p className="text-gray-500 text-center lg:text-lg lg:text-left md:w-3/4">
                With the help of realtime status tracking, you as the issuer can
                track the status of certificate emails
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col justify-center items-center gap-12 lg:flex-row lg:justify-between lg:gap-12">
            <div className="w-3/4 max-w-xs lg:3/4">
              <Image src={Verify} alt="Verify" layout="responsive" />
            </div>

            <div className="flex flex-col justify-center items-center gap-4 lg:items-start">
              <h1 className="font-bold text-center text-4xl lg:text-6xl lg:text-left">
                <span className="text-blue-700">Verify</span> the validity with
                ease
              </h1>
              <p className="text-gray-500 text-center lg:text-lg lg:text-left md:w-3/4">
                Receivers can verify the validity of their certificates using
                unique certificate id
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col justify-center items-center gap-12 lg:flex-row-reverse lg:justify-between lg:gap-12">
            <div className="w-3/4 max-w-xs lg:3/4">
              <Image src={Share} alt="Share" layout="responsive" />
            </div>

            <div className="flex flex-col justify-center items-center gap-4 lg:items-start">
              <h1 className="font-bold text-center text-4xl lg:text-6xl lg:text-left">
                <span className="text-blue-700">Show</span> the world what you
                achieved
              </h1>
              <p className="text-gray-500 text-center lg:text-lg lg:text-left md:w-3/4">
                Receivers can verify the validity of their certificates using
                unique certificate id
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col justify-center items-center gap-4 lg:gap-12">
            <div className="w-4/5 md:w-3/5">
              <Image
                src={OnlineView}
                alt="Online Certificate View"
                layout="responsive"
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-8 lg:flex-row-reverse lg:gap-20">
              <div className="w-4/5 md:w-2/5">
                <Image
                  src={OnlineViewHeading}
                  alt="View Anywhere Anytime"
                  layout="responsive"
                />
              </div>
              <div className="lg:h-80 lg:w-px lg:bg-gray-500 lg:opacity-60"></div>
              <p className="text-xl text-gray-500 text-center lg:text-right md:w-1/2">
                We host all the issued certificates via Driflys platform to
                assure that the receivers can view/interact with their
                certificates 24/7
              </p>
            </div>
          </div>

          <div className="container flex justify-center items-center content-center">
            <div className="py-20 px-4 bg-gradient-to-r from-blue-700 via-blue-900 to-blue-900 rounded-t-3xl flex flex-col justify-center items-center gap-12">
              <div className="w-2/5 md:1/5">
                <Image
                  src={BrandPromote}
                  alt="Brand Promote"
                  layout="responsive"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-8">
                <h1 className="text-6xl text-white font-semibold text-center">
                  Promote your brand
                </h1>
                <p className="text-lg text-gray-400 text-center md:w-2/3">{`Essential brand details such as logo, name & social media links can be displayed in the certificate view page. 
We believe that this feature makes perfect impact both
the popularity of brand and receiver’s trustworthiness upon your brand`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contactUs" className="bg-white">
        <div className="container h-screen flex justify-center items-center content-center">
          <div className="py-16 px-4 md:px-10 max-w-2xl shadow-xl rounded-xl bg-white">
            <h1 className="font-bold text-center text-4xl">Get in touch!</h1>
            <p className="mt-2 font-semibold text-center text-md text-gray-500">
              Have a comment or feedback? Fill the below form to contact us
            </p>
            <form className="mt-8 flex flex-col gap-2">
              <div className="flex flex-col gap-2 md:flex-row">
                <input
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 text-lg"
                  placeholder="First Name"
                  type="text"
                />
                <input
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 text-lg"
                  placeholder="Last Name"
                  type="text"
                />
              </div>

              <input
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 text-lg"
                placeholder="Email"
                type="email"
              />
              <textarea
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 text-lg"
                placeholder="Message"
              />
              <button className="bg-blue-700 text-white font-semibold tracking-wide px-10 py-2 rounded-lg min-w-fit hover:bg-blue-600">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Page>
  );
};

Home.layout = LandingLayout;

export default Home;

const SocialIcon = ({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <a target="_blank">
        <Image src={src} alt={alt} width={25} height={25} objectFit="contain" />
      </a>
    </Link>
  );
};
