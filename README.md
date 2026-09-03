# Instant Mechanic

Instant Mechanic is a full-stack service booking app with a Spring Boot REST API and an Expo React Native frontend.

## Project Structure

```text
MiniMechanic/
  backend/    Spring Boot API
  frontend/   Expo React Native app
```

## Backend

```bash
cd backend
mvn spring-boot:run
```

The API runs on `http://localhost:8080`.

### Endpoints

- `GET /api/mechanics`
- `GET /api/mechanics/{id}`
- `POST /api/requests`

Example request body:

```json
{
  "customerName": "Avery Stone",
  "phoneNumber": "9876543210",
  "vehicleNumber": "KA01AB1234",
  "selectedService": "Oil Change",
  "problemDescription": "Engine oil replacement needed.",
  "mechanicId": 1
}
```

## Frontend

```bash
cd frontend
npm install
npm start
```

Set the API URL for your device before starting Expo:

```bash
EXPO_PUBLIC_API_URL=http://YOUR_COMPUTER_LAN_IP:8080/api
```

Android emulator can usually use `http://10.0.2.2:8080/api`. iOS simulator can usually use `http://localhost:8080/api`.
