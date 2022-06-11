const router = require('express').Router()
const userCtrl = require('../controller/userCtrl')

router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)



router.post('/billing', userCtrl.billing)
router.post('/payment', userCtrl.payment)

// router.post('/adminregister', userCtrl.adminregister)
// Super Admin Roles
router.post('/adminlogin', userCtrl.adminlogin)
router.get('/getadmin', userCtrl.getadmin)


router.post('/addhotel', userCtrl.addhotel)
router.get('/getalldata', userCtrl.getalldata)
router.delete('/deletedata/:_id', userCtrl.deletedata)
router.patch('/updatedata/:_id', userCtrl.updatedata)
router.get('/getDataById/:_id', userCtrl.getDataById)

// // router.get('/info', userCtrl.getUserInfo) 

// router.get('/allinfo', userCtrl.getUsersAllInfo) 

// router.get('/logout', userCtrl.logout) 

// router.patch('/update', userCtrl.updateUser) 

// router.delete('/delete/:id', userCtrl.deleteUser) 


module.exports = router
