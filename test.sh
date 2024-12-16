kill $(lsof -ti :8080)
kill $(lsof -ti :3000)

cd backend
bun run test &
cd ../frontend
bun run test
