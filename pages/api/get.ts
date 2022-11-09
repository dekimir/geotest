// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

type Data = {
    name: string,
    d: any[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    open({
        filename: '/tmp/database.db',
        driver: sqlite3.Database
    }).then((db) => {
        db.all('SELECT col FROM tbl')
            .then((d) => {
                res.status(200).json({ name: 'John Doe', d })
            })
    })
}
