/**
 *
 * This call sends a message to the given recipient with vars and custom vars.
 *
 */
const mailjet = require ('node-mailjet')
	.connect(8ec628b6c16e8c94d8fa5db5336423a9, 33ecbd41ce3cca092d6c84cb8d7f30df)
const request = mailjet
	.post("send", {'version': 'v3.1'})
	.request({
		"Messages":[
			{
				"From": {
					"Email": "ashishks4567@gmail.com",
					"Name": "Railway"
				},
				"To": [
					{
						"Email": "passenger1@example.com",
						"Name": "passenger 1"
					}
				],
				"TemplateID": 382136,
				"TemplateLanguage": true,
				"Subject": "Railway Ticket",
				"Variables": {
      "name": "Traveller",
      "fromStation": "mumbai",
      "toStation": "bangalore",
      "date": "10-12-2018"
    }
			}
		]
	})
request
	.then((result) => {
		console.log(result.body)
	})
	.catch((err) => {
		console.log(err.statusCode)
	})