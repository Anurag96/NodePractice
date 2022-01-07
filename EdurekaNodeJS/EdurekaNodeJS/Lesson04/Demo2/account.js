const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'edureka@rediffmail.com',
    from: 'edureka@rediffmail.com',
    subject: 'Email via Node.js app',
    text: 'welcome to node.js certifictaion Training'
}).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
    });