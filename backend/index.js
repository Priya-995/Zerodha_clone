require("dotenv").config();

const express= require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const cookieParser = require("cookie-parser");
// const authRoute = require("./Routes/AuthRoute");
const {UserModel} = require("./model/UserModel");
const { createSecretToken } = require("./util/SecretToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const {HoldingsModel}=require("./model/HoldingsModel");
const {PositionsModel} =require("./model/PositionsModel");
const {OrdersModel}=require("./model/OrdersModel");

const PORT=process.env.PORT||3002;
const uri=process.env.MONGO_URL;

const app=express();
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['https://stock-trading-platform-frontend-pnch.onrender.com', 'https://stock-trading-platform-dashboard-6nvv.onrender.com'];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    return callback(new Error('Not allowed by CORS'), false);
  },
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.json());


// app.use("/", authRoute);
//⁡⁢⁢⁡⁣⁢⁡⁢⁢⁣Adding sample data for rendering on dashboard⁡
// app.get('/addHoldings',async (req,res)=>{
//     let tempHoldings=[
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];
// tempHoldings.forEach((item) => {
//     let newHolding=new HoldingsModel({
//         name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     })
//     newHolding.save();
// });
//  await res.send("Done!!");

// })
// app.get('/addPositions', async(req,res)=>{
//   let tempPositions=[
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];
//  tempPositions.forEach((item)=>{
//    let newPosition=PositionsModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//    });
//    newPosition.save();
//  });
//  await res.send("Done!!");
// })



//fetching holdings data from database
app.get('/addHoldings', async(req,res)=>{
  let allHoldings=await HoldingsModel.find({});
  res.json(allHoldings);
})
//fetching positions data from database
app.get('/addPositions', async(req,res)=>{
  let allPositions=await PositionsModel.find({});
  res.json(allPositions);
})
//for new Order
app.post('/newOrder', async(req,res)=>{
  let newOrder= new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode:req.body.mode,
    
  });
  newOrder.save();
  res.send("Order saved!");
});
//fetching order details from database
app.get('/getOrder',async(req,res)=>{
  let AllOrders=await OrdersModel.find({});
  res.json(AllOrders);
})
app.post('/signup', async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // Validate input
    if (!email || !password || !username) {
      return res.json({ 
        message: "All fields are required", 
        success: false 
      });
    }

    // Check if user exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ 
        message: "User already exists", 
        success: false 
      });
    }

    // DON'T hash here - let the pre-save middleware do it
    // Create user with plain password
    const user = await UserModel.create({ 
      email, 
      password: password,  // ← Plain password, middleware will hash it
      username,
      createdAt: new Date()
    });

    // Create token
    const token = createSecretToken(user._id);
    
    // Set cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(201).json({ 
      message: "User signed up successfully", 
      success: true, 
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ 
      message: "Server error: " + error.message, 
      success: false 
    });
  }
});

// ⭐ FIXED LOGIN ROUTE
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
   
    
    // Validate input
    if (!email || !password) {
    
      return res.json({ 
        message: 'All fields are required', 
        success: false 
      });
    }
    
    // Find user
    const user = await UserModel.findOne({ email });
  
    if (user) {
      console.log('User details:', {
        id: user._id,
        email: user.email,
        hasPassword: !!user.password,
        passwordLength: user.password ? user.password.length : 0
      });
    }
    
    if (!user) {
      return res.json({ 
        message: 'Incorrect password or email', 
        success: false 
      });
    }
    
    // Verify password
    console.log('Comparing passwords...');
    const auth = await bcrypt.compare(password, user.password);
   
    if (!auth) {
    
      return res.json({ 
        message: 'Incorrect password or email', 
        success: false 
      });
    }
    
    
    // Create token
    const token = createSecretToken(user._id);
    
    // Set cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
    
    res.status(200).json({ 
      message: "User logged in successfully", 
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    });
  } catch (error) {
   
    res.status(500).json({ 
      message: "Server error: " + error.message, 
      success: false 
    });
  }
});

// ⭐ RENAMED AND FIXED VERIFY ROUTE
app.post('/userVerification', (req, res) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.json({ status: false, success: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false, success: false });
    } else {
      const user = await UserModel.findById(data.id);
      if (user) {
        return res.json({ 
          status: true, 
          success: true,
          user: user.username 
        });
      } else {
        return res.json({ status: false, success: false });
      }
    }
  });
});


app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  mongoose.connect(uri);
  console.log("✅ DB connected");
});