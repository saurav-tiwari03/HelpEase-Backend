const bcrypt = require("bcrypt");
const { response } = require("./../helper/responseHandler");
const User = require("../models/user.model");
const query = require('../query/user.query')



// ID Generator
function idGenerator() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

exports.adminSignup = async (req,res,next) => {
  try {
    const { firstname, lastname, email, password, phoneNumber } =
      req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      phoneNumber,
      role: "admin",
      userId : email
    });
    admin.save();
    console.log(admin)
    return response(201, true, admin, "Agent signup successful", res);
  } catch (error) {
    console.error(error);
    return response(500, false, null, "Error during agent signup", res);
  }
}

exports.adminLogin = async(req,res,next) => {
  try {
    const { login, password } = req.body;

    const admin = await User.findOne({login});

    if (!admin) {
      return response(404, false, null, "Agent not found", res);
    }

    const isPasswordValid = await bcrypt.compare(password, agent.password);
    if (!isPasswordValid) {
      return response(401, false, null, "Invalid credentials", res);
    }

    let data = {
      email: agent.email,
      userId: agent.userId,
    };

    return response(200, true, data, "Agent login successful", res);
  } catch (error) {
    console.error(error);
    return response(500, false, null, "Error during agent login", res);
  }
}

//Agent Signup
exports.agentSignup = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password, phoneNumber } =
      req.body;
    const date = new Date().getFullYear().toString();
    const agentId = `A-${date[2] + date[3]}${idGenerator()}`;


    const hashedPassword = await bcrypt.hash(password, 10);
    const agent = await User.create({
      firstname,
      lastname,
      email,
      userId:agentId,
      password: hashedPassword,
      phoneNumber,
      role: "agent",
      issuesSolved:[],
    });
    agent.save();
    console.log(agent)
    return response(201, true, agent, "Agent signup successful", res);
  } catch (error) {
    console.error(error);
    return response(500, false, null, "Error during agent signup", res);
  }
};

//Agent Login
exports.agentLogin = async (req, res, next) => {
  try {
    const { login, password } = req.body;

    const agent = await User.findOne({login});

    if (!agent) {
      return response(404, false, null, "Agent not found", res);
    }

    const isPasswordValid = await bcrypt.compare(password, agent.password);
    if (!isPasswordValid) {
      return response(401, false, null, "Invalid credentials", res);
    }

    let data = {
      email: agent.email,
      userId: agent.userId,
    };

    return response(200, true, data, "Agent login successful", res);
  } catch (error) {
    console.error(error);
    return response(500, false, null, "Error during agent login", res);
  }
};

//Client Details
exports.clientDetails = async (req,res,next) => {
  try {
    
  } catch (error) {
    
  }
}

// Client Signup 
exports.clientSignup = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password, phoneNumber } =
      req.body;
    const date = new Date().getFullYear().toString();
    const clientId = `C-${date[2] + date[3]}${idGenerator()}`;

    console.log({
      firstname,
      lastname,
      email,
      userId: clientId,
      clientId,
      password,
      phoneNumber,
      role: "client",
    });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstname,
      lastname,
      email,
      userId:clientId,
      password: hashedPassword,
      phoneNumber,
      role: "client",
    });
    user.save();
    console.log(user)
    return response(201, true, user, "Client signup successful", res);
  } catch (error) {
    console.error(error);
    return response(500, false, null, "Error during client signup", res);
  }
};
// Client Login
exports.clientLogin = async (req, res, next) => {
  try {
    const { login, password } = req.body;

    const user = await User.findOne({login});

    // Check if user exists
    if (!user) {
      return response(404, false, null, "User not found", res);
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return response(401, false, null, "Invalid credentials", res);
    }

    // Construct response data
    let data = {
      email: user.email,
      userId: user.userId,
    };

    // Return response using response handler
    return response(200, true, data, "Client login successful", res);
  } catch (error) {
    console.error(error);
    return response(500, false, null, "Error during client login", res);
  }
};

