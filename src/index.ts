import { Hono } from 'hono'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { eq, lt, gte, ne } from 'drizzle-orm';
import { Database } from 'bun:sqlite';
const sqlite = new Database(process.env.DB_FILE_NAME!);
const db = drizzle({ client: sqlite });
const app = new Hono()
import { users } from './db/sqlite3/Users';

app.get('/login',async(c)=>{
  return c.text('Login section');
});

app.get('/dashboard',async(c)=>{
  return c.text('Dashboard!!!!');
});

app.get('/', async (c) => {    
  
  const usersList = await db.select().from(users).where(eq(users.active,1)); 
  const pwd = usersList[0].password;
  const isMatch = await Bun.password.verify("clave123",pwd);
  return c.text( isMatch ? "Siiiiii":"Noooooo" );

  //return c.json(usersList);
  //return c.text('Hello Hono!')
})

export default app
