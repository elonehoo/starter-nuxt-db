import {db} from '~/server/db'

type User = {
  id: string,
  name: string
}

export default defineEventHandler( async () => {
  const data= await db({query:"select * from `user` where id = '1' limit 1"}) as any
  return data[0] as User
})
