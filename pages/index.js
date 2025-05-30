import Head from "next/head";
import Link from "next/link";
import { useState } from "react";


export default function Home() {

  

  return (
    <>
      <Head>
        <title>ISF REGISTRATION</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="homeregist-section">
        <div className="wrapper">
          <div className="">
            <h2 className="">Registration Form</h2>
            <h1 className="">ISF Registration</h1>
          </div>
        </div>
        <div className="wrapper">
            <Link href="/internationalparticipants" className="btn btn-custom text-center me-lg-5 m-2">International Participant</Link>
            <Link href="/indonesiaparticipants" className="btn btn-custom text-center me-lg-5 m-2">Indonesian Participant</Link>
        </div>
      </section>
    </>
  );
}
