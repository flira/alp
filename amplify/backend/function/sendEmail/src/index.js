const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' });

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);

  const params = {
    Destination: {
      ToAddresses: ['alp@toscocloud.com']
    },
    Message: {
      Body: {
        Text: {
          Data: `
            Name: ${body.name}
            Email: ${body.email}
            Message: ${body.message}
          `
        }
      },
      Subject: { Data: 'Novo e-mail do site' }
    },
    Source: 'alp@toscocloud.com'
  };

  try {
    await ses.sendEmail(params).promise();
    return {
      statusCode: 200,
      body: 'Email sent successfully'
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }
};