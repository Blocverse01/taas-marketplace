
import { NextResponse } from 'next/server'
import axios from 'axios';
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    try {
      const searchParams = request.nextUrl.searchParams
      const assetId = searchParams.get('id')
     // const assetId  =  params.id;
        const endPoint = `assets/${assetId}`;
        const BACKEND_ENDPOINT = process.env.BACKEND_ENDPOINT;
        const config = {
            headers: {
              'Content-Type': 'application/json', 
              'taas-api-key': process.env.TAAS_API_KEY,
            },
        };

        const response = await axios.get(`${BACKEND_ENDPOINT}/${endPoint}`, config)
        if (response.status === 200)  return NextResponse.json({
            data : response.data.data
        });

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            status: 500,
            message: 'Internal Server Error',
          });
    }

}