import { RegisterDto } from "../dto/register.dto";
import { UserRepository } from "../repository/user";
import HttpException from "../exception";
import jwt, { Secret } from "jsonwebtoken";
import { comparePassword, hashPassword } from "../utils/hashPassword";
import { Types } from "mongoose";
import { LoginDto } from "../dto/login.dto";

export class AuthenticationService {
  static async register(registerData: RegisterDto) {
    const { email, password } = registerData;

    const user = await UserRepository.findOne({ email });

    if (user) {
      throw new HttpException("email already in use", 400);
    }

    const hashedPassword = await hashPassword(password);

    registerData.password = hashedPassword;

    const newUser = await UserRepository.create(registerData);

    const token = this.generateAccessToken(newUser._id);

    return {
      id: newUser._id,
      email: newUser.email,
      accessToken: token,
      firstname: newUser.firstname,
    };
  }

  static async login(loginData: LoginDto) {
    const { email, password } = loginData;

    const user = await UserRepository.findOne({ email });

    if (!user) {
      throw new HttpException("invalid email or password", 400);
    }

    const isValid = await comparePassword(password, user.password);

    if (!isValid) {
      throw new HttpException("invalid email or password", 400);
    }

    const token = this.generateAccessToken(user._id);

    return {
      id: user._id,
      email: user.email,
      accessToken: token,
      firstname: user.firstname,
    };
  }

  static generateAccessToken(id: string | Types.ObjectId | any): string {
    const token = jwt.sign({ _id: id }, process.env.JWT_SECRET_KEY as Secret, {
      expiresIn: `${process.env.JWT_EXPIRES_IN}`,
    });

    return token;
  }
}
