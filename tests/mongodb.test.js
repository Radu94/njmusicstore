//dotenv
const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');

describe('insert_user', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb+srv://' + process.env.MONGOUSER + ':' + process.env.MONGOPASSWORD + '@cluster0.jlrkv.mongodb.net/' + process.env.MONGODBNAME + '?retryWrites=true&w=majority', {
      useNewUrlParser: true,
    });
    db = await connection.db(process.env.MONGODBNAME);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('userInfo');

    const mockUser = { username: 'someusername', password: 'somepassword' };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({ username: 'someusername' });
    expect(insertedUser).toEqual(mockUser);
    await users.deleteOne({username: 'someusername'});
  });
});

describe('insert_track', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb+srv://' + process.env.MONGOUSER + ':' + process.env.MONGOPASSWORD + '@cluster0.jlrkv.mongodb.net/' + process.env.MONGODBNAME + '?retryWrites=true&w=majority', {
      useNewUrlParser: true,
    });
    db = await connection.db(process.env.MONGODBNAME);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const tracks = db.collection('tracks');

    const mockTrack = {
      trackName:"mockName",
      artistName:"mockArtist",
      albumName:"mockAlbum",
      albumYear:"2000",
      albumGenre:"mockGenre",
      trackPrice:"20"
    };
    await tracks.insertOne(mockTrack);

    const insertedTrack = await tracks.findOne({ trackName: 'mockName' });
    expect(insertedTrack).toEqual(mockTrack);
    await tracks.deleteOne({trackName: "mockName"});
  });
});

describe('insert_cart_item', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb+srv://' + process.env.MONGOUSER + ':' + process.env.MONGOPASSWORD + '@cluster0.jlrkv.mongodb.net/' + process.env.MONGODBNAME + '?retryWrites=true&w=majority', {
      useNewUrlParser: true,
    });
    db = await connection.db(process.env.MONGODBNAME);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const userCarts = db.collection('usercarts');

    const mockuserCart = {
      username:"someusername",
      trackid:"010101010101010101010",
      trackname:"mockName",
      unitprice:"20",
      quantity:"1"
    };
    await userCarts.insertOne(mockuserCart);

    const inserteduserCarts = await userCarts.findOne({$and:[{username:"someusername"}, {trackname:"mockName"}]});
    expect(inserteduserCarts).toEqual(mockuserCart);
    await userCarts.deleteOne({$and:[{username:"someusername"}, {trackname:"mockName"}]});
  });
});