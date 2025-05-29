export async function GET() {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  try {
    const response = await fetch("https://api.github.com/users/Karkianuj17/repos", {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      return new Response("Failed to fetch repositories", { status: response.status });
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("API error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
