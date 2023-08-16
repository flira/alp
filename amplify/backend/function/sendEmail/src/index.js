const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' });

const defaultMsg = {
  name: 'Anonymous',
  email: 'alp@toscocloud.com',
  message: ''
};

function formatEmail(name, email, msg) {
  return `
  <h1>You've Got Mail!</h1>
  <p>Mensagem de <a href="mailto:${email}">${name}<a/>:</p>
  <p>${msg}</p>`;
}

exports.handler = async (event, context) => {
  const body = Object.assign(defaultMsg, event);
  const params = {
    Destination: {
      ToAddresses: ['alp@toscocloud.com']
    },
    Message: {
      Body: {
         Html: {
          Data: formatEmail(body.name, body.email, body.message),
          Charset: 'UTF-8'
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