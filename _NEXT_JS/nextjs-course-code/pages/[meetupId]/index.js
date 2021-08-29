import React from "react";
import { MongoClient, ObjectID } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";

const MeetupDetails = (props) => {
  console.log(props);
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  //connect to DB
  const client = await MongoClient.connect(
    "mongodb+srv://euAdmin:dyqX6b9nFf6g1oRi@cluster0.tfplb.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  //create de collection if it doesn't exist
  const meetupCollection = db.collection("meetups");
  //get Id's of all db itens
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    // false if the obj have all paths in the array true||"blocking" generat the page when is needed
    //true de forma async "bom para criar uma pag de fallback para o user a dizer que está a carregar, para seo n será tão bom"
    //"blocking" - bloqueia o pedido da pag até ter a pag renderizada
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

// this function run's on the build process
export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  //   console.log({ context });

  //connect to DB
  const client = await MongoClient.connect(
    "mongodb+srv://euAdmin:dyqX6b9nFf6g1oRi@cluster0.tfplb.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  //create de collection if it doesn't exist
  const meetupCollection = db.collection("meetups");
  //get meetup by id
  const selectedMeetup = await meetupCollection.findOne({
    _id: ObjectID(meetupId),
  });
  console.log({ selectedMeetup });

  client.close();

  // always need to return an obj with props obj
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
      //   meetupData: {
      //     image:
      //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1-e56pdPrReTO8aKQXv3mwHaEo%26pid%3DApi&f=1",
      //     id: "meetupId",
      //     title: "meetup title",
      //     address: "meetup address",
      //     description: "meetup description",
      //   },
    },
    // numbers of seconds that NextJs will wait until regenerat this page
    revalidate: 3600, // Incremental static generation
  };
};

export default MeetupDetails;
