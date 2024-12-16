kill $(lsof -ti :8080)
kill $(lsof -ti :3000)

cd backend
cargo run &
cd ../frontend
bun run dev
