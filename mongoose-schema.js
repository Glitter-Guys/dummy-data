
//Events
{
    title: String,
    datetime: Date,
    image_url: String,
    details: String,
    address: String,
    cityState: String,
    long: Number,
    lat: Number,
    organizers: [
        {type: Schema.Types.ObjectId, ref: 'Users'}
      ],
    attendees: [
        {type: Schema.Types.ObjectId, ref: 'Users'}
      ],
    group: String
}

//Users
{
    first_name: String,
    last_name: String,
    image_url: String
}


//Comments 

{
    by: {type: Schema.Types.ObjectId, ref: 'Users'},
    message: String,
    datetime: Date,
    event_id: Number,
    likes: Number
}