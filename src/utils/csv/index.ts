import fs from 'fs'
import csv from 'csv-parser'

export const readFileCSV = (path: string) =>
  new Promise((resolve, reject) => {
    const results = <any>[]
    try {
      fs.createReadStream(path)
        .on('error', e => {
          reject(e)
        })
        .pipe(
          csv({
            mapHeaders: ({ header }: { header: string }) => header.toLowerCase().split(' ').join('_')
          })
        )
        .on('data', row => {
          results.push(row)
        })
        .on('end', () => {
          resolve(results)
        })
    } catch (e) {
      reject(e)
    }
  })
