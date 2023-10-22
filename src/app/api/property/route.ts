
import { NextResponse } from 'next/server'
import axios from 'axios';

export async function GET() {
    try {
        
        if(!process.env.PROJECT_ID) return NextResponse.json({
          message: 'Project ID IS MISSING.....',
        });
        const projectId = process.env.PROJECT_ID;
        const endPoint = `projects/${projectId}/assets`;
        const BACKEND_ENDPOINT = process.env.BACKEND_ENDPOINT;
        const requestData = {
            paginate: false
          };
          const config = {
            headers: {
              'Content-Type': 'application/json', 
              'taas-api-key': process.env.TAAS_API_KEY,
            },
        };

        const response = await axios.get(`${BACKEND_ENDPOINT}/${endPoint}?paginate=false`, config)
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