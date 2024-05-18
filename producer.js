const {kafka} = require('./client')

async function  init(){
    const producer = kafka.producer();

    console.log("Connecting Producer");
    await producer.connect()
    console.log("Producer Connected Successfully");
    console.log("Sending Message");

    await producer.send({
        topic : "rider-updates",
        messages : [
                {
                    partition : 0,
                    key : 'location-updates', 
                    value : JSON.stringify({name : 'Tony stark', location : "HYD"})

                }


        ]
        
        })
        await producer.disconnect();
        console.log("Producer Disconnected Successfully");
    }

    init()