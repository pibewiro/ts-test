import { Router } from "express";

const CarRoutes = Router();

CarRoutes.get("/", (req, res) => {
  const cars = [
    {
      id: "1111",
      make: "Ford",
      model: "Explorer",
    },
    {
      id: "2222",
      make: "Honda",
      model: "Accord",
    },
    {
      id: "3333",
      make: "Dodge",
      model: "Durango",
    },
  ];
  return res.status(200).json(cars);
});

export default CarRoutes;
