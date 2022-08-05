import { MongoClient } from "mongodb";
import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

const MEETUP_MODEL = [
  {
    id: "m1",
    title: "first meetUp",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1-e56pdPrReTO8aKQXv3mwHaEo%26pid%3DApi&f=1",
    address: "some address",
    description: "description for first meetUp",
  },
  {
    id: "m2",
    title: "second meetUp",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1-e56pdPrReTO8aKQXv3mwHaEo%26pid%3DApi&f=1",
    address: "some address for second meetUp",
    description: "description for second meetUp",
  },
];

const HomePage = (props) => {
  //   console.log(MEETUP_MODEL);
  //   console.log(props.meetups);

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="some description for meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// // this function run's in the serve
// export async function getServerSideProps(context) {
//   console.log(context);
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: MEETUP_MODEL,
//     },
//   };
// }

// this function run's on the build process
export async function getStaticProps() {
  // always need to return an obj with props obj

  //connect to DB
  const client = await MongoClient.connect(
    "mongodb+srv://euAdmin:Cfi0bQnv5GzzsxPR@cluster0.tfplb.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  //create de collection if it doesn't exist
  const meetupCollection = db.collection("meetups");
  //get all db itens
  const meetups = await meetupCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // props: {
    //   meetups: MEETUP_MODEL,
    // },
    // numbers of seconds that NextJs will wait until regenerat this page
    revalidate: 3600, // Incremental static generation
  };
}

export default HomePage;
