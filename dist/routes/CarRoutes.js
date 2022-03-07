"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarRoutes = (0, express_1.Router)();
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
exports.default = CarRoutes;
