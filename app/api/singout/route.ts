import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {


    const coockiesHandler = await cookies()
    coockiesHandler.delete("rememberMe")
    coockiesHandler.delete("isLogged")



    return NextResponse.json({success:true})
}