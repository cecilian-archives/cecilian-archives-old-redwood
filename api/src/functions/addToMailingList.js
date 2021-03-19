import Mailgun from "mailgun-js";

const config = {
  apiKey: process.env.MAILGUN_API_KEY,
  domain: "cecilianarchives.com",
  host: "api.eu.mailgun.net",
};
const mailgun = Mailgun(config);

export const handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body);
    const newMember = {
      subscribed: true,
      address: body.email,
      name: body.name,
      upsert: "yes",
    };

    const list = mailgun.lists(`alumni@${config.domain}`);

    return await new Promise((resolve, reject) =>
      list
        .members()
        .create(newMember, (error, data) =>
          error ? reject(error) : resolve(data)
        )
    )
      .then((data) => {
        console.log("CREATED:", data);
        return {
          statusCode: 200,
          body: JSON.stringify({
            success: true,
          }),
        };
      })
      .catch((error) => {
        console.error(error);
        return {
          statusCode: 500,
          body: JSON.stringify({
            success: false,
          }),
        };
      });
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
      }),
    };
  }
};
