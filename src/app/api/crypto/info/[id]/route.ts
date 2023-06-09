import { NextApiRequest, NextApiResponse } from "next";

export async function GET(
  request: Request,

  // tohle je zpusob jak si vytahnout variable ID z cryptoCtx.
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    console.log(id, " idEEE");

    //this is how we connect with coin gecko API and get back the response which we parse in Card.tsx
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&sparkline=true`,
      {
        method: "GET",
        next: { revalidate: 60 },
        headers: {
          accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`FAILED ${response.status}`);
    }

    return response;
  } catch (error) {
    // POTREBUJEME PRIDAT ERROR NOTIFICATION NEBO ERROR PAGE
    console.log("error server side", error);
    return new Response("Invalid request.", { status: 400 });
  }

  // }
  // getData()
}
