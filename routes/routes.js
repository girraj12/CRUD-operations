import {user,detail,getAmount,updateDetail,deleteDetail,getDetail} from '../controller/jobcontrol.js';
import express from 'express';
const router = express.Router();

router.post('/person',detail);
router.get('/role/:job',getDetail);
router.get('/amount/:amount', getAmount);
router.patch('/amountUpdate/:amount', updateDetail);
router.delete('/delete/:amount',deleteDetail);
router.get('/search',user)
export default router;
