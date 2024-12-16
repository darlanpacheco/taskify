kill $(lsof -ti :8080)
kill $(lsof -ti :3000)

cd backend
bun index.js &
cd ../frontend
bun run dev
