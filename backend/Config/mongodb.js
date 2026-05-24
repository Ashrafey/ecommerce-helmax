import mongoose from 'mongoose'

// Cache connection across serverless invocations so Vercel warm instances
// reuse the existing TCP connection instead of reconnecting every request.
let cached = global._mongooseCache || { conn: null, promise: null }
global._mongooseCache = cached

const connectDB = async () => {
    if (cached.conn) return cached.conn

    if (!cached.promise) {
        mongoose.connection.on('connected', () => console.log("DB CONNECTED"))
        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`, {
            maxPoolSize: 10,
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}

export default connectDB