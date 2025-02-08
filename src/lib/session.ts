import { type SessionConfig, eventHandler, getSession, useSession } from "vinxi/http"

const sessionConfig = {
    password: process.env.SECRET,
  } as SessionConfig

  type SessionData = {
    user: string
    token: string
  }
  
export async function getToken(event:any): Promise<any | null> {
    const session = await useSession<SessionData>(sessionConfig) 

  const token = session.data.token;
  if (!token) return null;

  return token
}

export async function login(formData: FormData) {
    const username = String(formData.get("username"));
    const password = String(formData.get("password"));
    // do validation
    try {
        const res = await fetch(`${process.env.API_URL}/api/v1/staff/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((res) => res.json());
      console.log(res)
      const session = await useSession<SessionData>(sessionConfig) 
      console.log(session.data)
      try {
        await session.update({
                      user: JSON.stringify(res.user),
            token: res.token,
        });
    } catch (updateError) {
        console.error("Session update error:", updateError);
    }
    return {
        ...res,
    };
    
    } catch (err) {
      console.log(err)
      return err
    }
}
  