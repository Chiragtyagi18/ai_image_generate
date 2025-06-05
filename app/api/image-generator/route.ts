import axios from 'axios';

export async function POST(request:Request) {
    try {
      const payload =  await request.json();
      console.log('Payload:', payload);
      const response = await axios.post('https://api.claid.ai/v1-beta1/image/generate', payload, {
        headers: {
          Authorization: `Bearer ${process.env.CLAID_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      return Response.json( response.data.data, { status: 200 });
    } catch (error) {
      console.error("Error:", error);
      return Response.json({ success: false, error: error }, { status: 500 });
    }
}
