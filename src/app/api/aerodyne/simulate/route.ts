
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "AERODYNE simulation API",
  });
}

export async function POST(request: Request) {
  try {
    const input = await request.json();

    const apiUrl =
      process.env.AERODYNE_API_URL ?? "http://127.0.0.1:8000";

    const response = await fetch(`${apiUrl}/simulate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
      cache: "no-store",
      signal: AbortSignal.timeout(120000),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error ?? "Simulation failed." },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      {
        error:
          "Cannot reach the AERODYNE Python service. Make sure it is running.",
      },
      { status: 503 }
    );
  }
}
