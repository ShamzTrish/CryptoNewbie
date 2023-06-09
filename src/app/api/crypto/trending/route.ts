export async function GET(request: Request) {
  try {
    //this is how we connect with coin gecko API and get back the response which we parse in Card.tsx
    const response = await fetch(
      `https://api.coingecko.com/api/v3/search/trending`,
      {
        method: "GET",
        next: { revalidate: 60 },
        headers: {
          "Content-Type": "application/json",
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
}
