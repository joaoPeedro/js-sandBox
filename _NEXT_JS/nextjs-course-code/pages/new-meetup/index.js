import { useRouter } from "next/router";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

const newNeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    console.log({ enteredMeetupData }, JSON.stringify(enteredMeetupData));
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "aplication/json",
      },
    });

    const data = await response.json();

    // console.log(data);

    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Add new Meetup</title>
        <meta name="description" content="some description for meetups" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default newNeetupPage;
