const Enquiry = require("../models/enqModel");
const asyncHandler = require('express-async-handler');
const { validateMongoId } = require('../utils/validateMongodbId');

//create Enquiry
exports.createEnquiry = asyncHandler(async(req,res)=>{
    try {
        const newEnquiry = await Enquiry.create(req.body);
        res.json(newEnquiry);
    } catch (error) {
        throw new Error(error)
    }
})

//Get All Enquiry
exports.GetAllEnquiry = asyncHandler(async(req,res)=>{
    try {
        const enquiry = await Enquiry.find();
        res.json(enquiry);
    } catch (error) {

        throw new Error(error)
    }
})

//Get a Enquiry
exports.GetAEnquiry = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id)
    try {
        const enquiry = await Enquiry.findById(id);
        res.json(enquiry);
    } catch (error) {
        throw new Error(error)
    }
})

//Update Enquiry
exports.updateEnquiry = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id)
    try {
        const updateEnquiry = await Enquiry.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        res.json(updateEnquiry);
    } catch (error) {
        throw new Error(error)
    }
})

//Delete Enquiry
exports.deleteEnquiry = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id)
    try {
        const deleteEnquiry = await Enquiry.findByIdAndDelete(id);
        res.json({
            status:true,
            message:"Enquiry deleted successfully!",
            deleteEnquiry
        });
    } catch (error) {
        throw new Error(error)
    }
})
