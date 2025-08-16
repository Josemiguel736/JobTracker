import { signinMock } from "@/services/signin";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const { email, password, rememberMe } = await request.json()

    const response = await signinMock(email, password)

    if(!response){
        return NextResponse.json({success:false})
    }

    const coockiesHandler = await cookies()
    coockiesHandler.set("rememberMe", rememberMe)
    coockiesHandler.set("isLogged", "true")



    return NextResponse.json({success:response})
}