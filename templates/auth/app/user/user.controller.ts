import { type Request, type Response } from 'express'
import { createResponse } from '../common/helper/response.helper'
import asyncHandler from 'express-async-handler'
import * as userService from './user.service'
import { IUser } from './user.dto'
import { createUserTokens } from '../common/services/passport-jwt.service'
import passport from 'passport'
import jwt from 'jsonwebtoken'

export const createUser = asyncHandler(async (req: Request, res: Response) => {
    const result = await userService.createUser(req.body)
    res.send(createResponse(result, 'User created successfully'))
})

export const login = asyncHandler(async (req: Request, res: Response) => {
    passport.authenticate(
        'login',
        (
            err: { status: any; message: any },
            user: Omit<IUser, 'password'>,
            info: { message: any }
        ) => {
            if (err)
                return res
                    .status(err.status || 500)
                    .json({ message: err.message })

            const tokens = createUserTokens(user)

            res.send(createResponse({ user, tokens }, info.message))
        }
    )(req, res)
})

export const getMe = asyncHandler(
    async (req: Request, res: Response) => {
        const token = req.headers.authorization?.replace('Bearer ', '')
        
        // @ts-ignore
        const decodedUser = jwt.verify(token, process.env.JWT_SECRET!) as {
            id: string
        }
        
        const result = await userService.getUserById(decodedUser.id)
        
        res.send(createResponse({
            id:result?.id,
            email: result?.email,
            createdAt: result?.createdAt
        }))
    }
)