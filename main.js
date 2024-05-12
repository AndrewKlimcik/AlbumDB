import express from 'express'
import knex from 'knex'
import knexfile from './knexfile.js'

const app = express()
const db = knex(knexfile);