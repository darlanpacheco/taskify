kill $(lsof -ti :8080)
kill $(lsof -ti :3000)

cd backend
cargo test &
cd ../frontend
bun run test
