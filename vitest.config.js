
import { defineConfig } from 'vitest/config'
import * as dotenv from 'dotenv';

dotenv.config(".env.testing");

export default defineConfig({
test: {
globals: true,
environment: 'node',
},
})