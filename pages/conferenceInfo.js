import Head from 'next/head';
import React from 'react'

const conferenceInfo = () => {
  return (
    <div className="mt-32  basicContainer conferenceSection">
      <Head>
        <title>Conference Info</title>
      </Head>
      <h2>Conference info</h2>
      <p className="conferenceDesc mt-2">
        Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
        fermentum.
      </p>
    </div>
  );
}

export default conferenceInfo