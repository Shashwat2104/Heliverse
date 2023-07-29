// Import necessary modules
const { Router } = require("express");
const { userModel } = require("../models/user-model");

// Create a router for user routes
const userRoute = Router();

// Route to add a new user
userRoute.post("/", async (req, res) => {
  const data = req.body;
  try {
    // Check if all required fields are provided (at least 7 fields)
    if (Object.keys(data).length >= 7) {
      let existEmail = await userModel.findOne({ email: data["email"] });
      if (existEmail) {
        res.status(200).send({ msg: "email is already registered" });
      } else {
        // Create a new user and save it to the database
        const createUser = new userModel(data);
        await createUser.save();
        res
          .status(200)
          .send({ msg: "User has been added", userDetails: createUser });
      }
    } else {
      res.status(400).json({ error: "Provide all the details" });
    }
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

// Route to get users (with optional search query, pagination, and limit)
userRoute.get("/", async (req, res) => {
  const { search } = req.query;

  try {
    let usersData = await userModel.find();
    if (search) {
      // Filter users based on the search query
      usersData = await userModel.find({
        $or: [
          {
            first_name: { $regex: search },
          },
        ],
      });
    }
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const data = usersData.slice(startIndex, endIndex);

    // Send paginated user data and total pages
    res.status(200).send({
      currentPage: page,
      totalPages: Math.ceil(usersData.length / limit),
      data,
    });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

// Route to get a specific user by ID
userRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findOne({ _id: id });
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(400).send({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

// Route to delete a user by ID
userRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndDelete({ _id: id });
    if (user) {
      res.status(200).send({ msg: "user deleted" });
    } else {
      res.status(400).send({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

// Route to update a user by ID
userRoute.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndUpdate({ _id: id }, req.body);
    if (user) {
      res.status(200).send({ msg: "user updated" });
    } else {
      res.status(400).send({ error: "user not found" });
    }
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

module.exports = { userRoute };
