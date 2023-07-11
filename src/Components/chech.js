// import { getUserID, incrementUserID } from '@/utils/generate-user-id';
// import { HttpException } from '@exceptions/HttpException';
// import { isEmpty } from '@utils/util';
// import { sendSMSWithSNS } from '@/lib/aws-sns-sms';
// import { sendSMSWithTwilio } from '@/lib/twilio';
// import { generateAccessToken, generateRefreshToken, getAccessTokenExpiry, getRefreshTokenExpiry } from '@globals/jwt.global'
// import jwt from 'jsonwebtoken';
// import bcrypt, { hash } from 'bcryptjs';
// import mongoose from 'mongoose';
// import UserModel from '@/models/User/User.model';
// import TokenModel from '@/models/User/Token.model';
// const useTwilioCountry = ['1'];


// export default class AuthService {

//     private userModel = UserModel;
//     private tokenModel = TokenModel;
//     private saltRounds = 10;

   

//     public async userlogin(userInput: { 
//         email: string; 
//         password: string;
//         mobile: string;
//         d : string

        
//     }) {
//         try  {
//              let user, token,  passwordMatch;
           
//               user = await this.userModel.find({
//               email: userInput.email
//              });
//               user = user[0];
//               // console.log('userExists', user);
//               if(!user) {

//                 const salt = bcrypt.genSaltSync(this.saltRounds);
//                 const encryptPassword = bcrypt.hashSync(userInput.password, salt);
//                 const newUser = await (await this.userModel.create({ email: userInput.email, password: encryptPassword })).save();
//                 // const generatedToken = generateAccessToken(user);
//                 // const token =  await (await this.tokenModel.create({ userId: userInput._id, token: generatedToken })).save();
                

                
//               // console.log('newUser', newUser);
//                 user = newUser;
               
               
//              } 
            
//                 passwordMatch =   bcrypt.compareSync(userInput.password, user.password);

//                // console.log(passwordMatch)
//              if (!passwordMatch) {
//                // console.log(passwordMatch)
//                throw new HttpException(400, 'Invalid Login Credentials');
              
//              }  else {

//                 //  create a token collection by refrehce of useID from userSchema

//                 const generatedToken = generateAccessToken(user);
//                 const newToken = await (await this.tokenModel.create({ userId: user._id, token: generatedToken })).save();
//                 token = newToken;

//                const response = {
//                user,
//                token,
//                accessToken : generateAccessToken({user,token}), 
//                refreshToken: generateRefreshToken({user,token}),
//                accessExpiryTime: getAccessTokenExpiry(),
//                refreshExpiryTime: getRefreshTokenExpiry()

//             };
//            // console.log(token, "creating user")
//                // console.log( "userInputPassword:",userInput.password)
//                // console.log("full details of user", user)
//              // console.log("database password:", user.email, user.id, user.password)
//             return response;
//          }
            
//          }

//          catch (err) {

//             if(err.message.includes('E11000')) {
//                 throw new HttpException(400, 'Email already exists!');
//             } 
//             throw new HttpException(err.status || 500, err?.message || 'Something went wrong');
//         }
//     }

// // When the user Logegd Out

//      public async userLogout(userId: string) {
//       try {
//       await this.tokenModel.deleteMany({ userId });
   
//      return { message: 'Logged out successfully!' };
//      } catch (err) {
//       throw new HttpException(err.status || 500, err?.message || 'Something went wrong');
//     }
// }

//      public async mobileLogin(userInput: { 
//         mobile: string; 
//          })
//          { 
//          try {

//          const { mobile } = userInput;

//             // Generate OTP (replace this with your own OTP generation logic)
//             const otp = Math.floor(1000 + Math.random() * 9000);

//             // Send OTP to the mobile number
//             if (mobile.length !== 10) {

//             throw new HttpException(400, 'Invalid mobile number');

//      }

//             await sendSMSWithSNS( mobile,`Your OTP is ${otp}`, "Otp was successfully send");


//             const user = await this.userModel.findOneAndUpdate(
//             { mobile },
//             { $set: { mobile, otp } },
//             { upsert: true, new: true }
//             );

//             const response = {
//             user,
//             accessToken: generateAccessToken(user),
//             refreshToken: generateRefreshToken(user),
//             accessExpiryTime: getAccessTokenExpiry(),
//             refreshExpiryTime: getRefreshTokenExpiry(),
//             };

//             return response
//             }
//         catch (err) {
//             throw new HttpException(err.status || 500, err?.message || 'Something went wrong');
//         }
//         }

// }




// // public logout = catchAsync(async (req: Request, res: Response): Promise<void> => {
// //     try {
// //       const { userId } = req.body; 

// //       await this.adminAuth.userLogout(userId);


// //       ApiResponse.successFullyLoggedOut(res, 'Logged Out Successfully');

// //     } catch (err) {
// //       throw new HttpException(err.status || 500, err?.message || 'Something went wrong');
// //     }
// //   });
