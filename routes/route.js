const router = require('express').Router();

const auth = require('./../controller/auth');

router.post('/auth/admin/login',auth.adminLogin)
router.post('/auth/admin/signup',auth.adminSignup)
router.post('/auth/agent/signup',auth.agentSignup)
router.post('/auth/agent/login',auth.agentLogin)
router.post('/auth/client/signup', auth.clientSignup);
router.post('/auth/client/login', auth.clientLogin);

module.exports = router;